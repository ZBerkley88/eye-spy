const { Case, Note } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    // ====================== CASE QUERIES ======================
    case: async (parent, { caseId }) => {
      return Case.findOne({ _id: caseId });
    },
    cases: async () => {
      return Case.find();
    },

    // ====================== NOTE QUERIES ======================
    note: async (parent, { noteId }) => {
      return Note.findOne({ _id: noteId });
    },
    notes: async () => {
      return Note.find();
    },
  },
  Mutation: {
    // ====================== CASE MUTATIONS ======================
    addCase: async (
      parent,
      {
        first_name,
        last_name,
        description,
        client_first_name,
        client_last_name,
        email,
        phone,
      }
    ) => {
      const newCase = await Case.create({
        first_name,
        last_name,
        description,
        client_first_name,
        client_last_name,
        email,
        phone,
      });
      return newCase;
    },
    removeCase: async (parent, { caseId }) => {
      return Case.findOneAndDelete({ _id: caseId });
    },

    addNotesToCase: async (parent, { input }, context) => {
      if (context.case) {
        const updatedCase = await Case.findOneAndUpdate(
          { _id: context.case._id },
          { $addToSet: { notes: input } },
          { new: true, runValidators: true }
        );
        return updatedCase;
      }
    },

    // ====================== NOTE MUTATIONS ======================
    addNote: async (
      parent,
      {
        note_text,
        note_date,
      }
    ) => {
      const newNote = await Note.create({
        note_text,
        note_date,
      });
      return newNote;
    },
    removeNote: async (parent, { noteId }) => {
      return Note.findOneAndDelete({ _id: noteId });
    },
  },
};

module.exports = resolvers;

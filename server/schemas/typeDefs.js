const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Case {
    _id: ID!
    first_name: String!
    last_name: String!
    description: String
    notes: [Note]
    client_first_name: String!
    client_last_name: String
    client_email: String
    client_phone: String
  }

  type Note {
    _id: ID!
    note_text: String!
    note_date: String!
  }

  type Query {
    case(caseId: ID!): Case
    cases: [Case]
    note(noteId: ID!): Note
    notes: [Note]
  }

  input NoteInput {
    _id: ID
    note_text: String!
    note_date: String!
    }

  type Mutation {
    addCase(
      first_name: String!
      last_name: String!
      description: String
      client_first_name: String!
      client_last_name: String!
      client_email: String
      client_phone: String
    ): Case
    removeCase(caseId: ID!): Case

    addNote(
      note_text: String!
      note_date: String!
      ): Note
    addNotesToCase(input: [NoteInput]): Case
    removeNote(noteId: ID!): Note
  }
`;

module.exports = typeDefs;

const { Schema, model } = require("mongoose");
const formatDate = require("../utils/formatDate");

const noteSchema = new Schema({
  note_text: {
    type: String,
    required: true,
  },
  note_date: {
    type: String,
    get: formatDate,
    required: true
  },
});

const Note = model("notes", noteSchema);

module.exports = Note;

const { Schema, model } = require("mongoose");

const caseSchema = new Schema({
  // ====================== SUBJECT INFO ======================
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "notes",
    },
  ],

  // ====================== CLIENT INFO ======================

  client_first_name: {
    type: String,
    required: true,
  },

  client_last_name: {
    type: String,
    required: true,
  },

  client_email: {
    type: String,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },

  client_phone: {
    type: String,
  },
});

const Case = model("cases", caseSchema);

module.exports = Case;

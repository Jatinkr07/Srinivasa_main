const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Service: {
    type: String,
    required: true,
  },
  Comments: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contact", contactSchema);

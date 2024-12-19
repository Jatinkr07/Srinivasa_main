const mongoose = require("mongoose");

const project = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    descriptionHeading: {
      type: String,
    },
    challengesHeading: {
      type: String,
    },
    challenges: {
      type: String,
      default: null,
    },
    solutionsHeading: {
      type: String,
    },
    solution: {
      type: String,
      default: null,
    },
    resultsHeading: {
      type: String,
    },
    results: {
      type: String,
      default: null,
    },
    thumbnail: {
      type: String,
      default: null,
    },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("project", project);

const mongoose = require("mongoose");

// COMMENT Schema
// Step 1 :- creating the schema
const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    tweetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tweet",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Step 2 :- creating the model
module.exports = mongoose.model("comment", commentSchema); // comment => comments

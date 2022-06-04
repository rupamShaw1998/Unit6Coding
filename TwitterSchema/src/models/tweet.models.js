const mongoose = require("mongoose");

// tweet SCHEMA
// Step 1 :- creating the schema
const tweetSchema = new mongoose.Schema(
  {
    tweets: { type: String, required: true },
    tweetId: { type: Number, required: true, unique: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 :- creating the model
module.exports = mongoose.model("tweet", tweetSchema); // tweet => tweets

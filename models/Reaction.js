// Import required models
const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Defines the ReactionSchema
const ReactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    validate: {
      // The validator function checks the length of the reactionBody field
      validator: ({ length }) => length <= 280,
      // The message to display if the validation fails
      message: "Reactions cannot be more than 280 characters long!",
    },
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // The getter function formats the createdAt field using the dateFormat utility function
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

// Exports the ReactionSchema
module.exports = ReactionSchema;

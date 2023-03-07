// Import required modules
const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // Validate the length of the thought text
      validate: {
        validator: function (v) {
          return v.length > 0 && v.length <= 280;
        },
        message: (props) => `${props.value} is not a valid thought. Thoughts can only be between 1 and 280 characters long!`,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Format the date when getting the createdAt value
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    // Adds the reactions schema to the thought schema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      // Includes getters when converting the object to JSON
      getters: true,
      // Includes virtual properties when converting the object to JSON
      virtuals: true,
    },
  }
);

// Defines the virtual property 'reactionCount'
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Creates the Thought model
const Thought = model("Thought", thoughtSchema);

// Export the Thought model
module.exports = Thought;

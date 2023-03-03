// Import required models
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      // Removes whitespace from the start and end of the string
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      // Validates the email format
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"], // Validates the email format
    },

    // Adds the reference to the Thoughts schema
    thoughts: [{ type: Types.ObjectID, ref: "Thought" }],
    // Adds the reference to the User schema
    friends: [{ type: Types.ObjectID, ref: "User" }],
  },
  {
    toJSON: {
      // Include getters when converting the object to JSON
      getters: true,
      // Include virtual properties when converting the object to JSON
      virtuals: true,
    },
  }
);

// Define the virtual property 'friendCount'
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model
const User = model("User", UserSchema);

// Export the User model
module.exports = User;

// Imports the Thought and User models from the '../models' module
const { Thought, User } = require("../models");

// Defines an object called thoughtController with several methods
const thoughtController = {
  // Method to get all thoughts
  getThoughts: async (req, res) => {
    try {
      const thoughtData = await Thought.find({});
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400), json(err);
    }
  },
};

// Exports the thoughtController
module.exports = thoughtController;

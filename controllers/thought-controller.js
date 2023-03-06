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
  // Method to get a single thought by its ID
  getThoughtByID: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findOne({ _id: params.thoughtID });
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  addThought: async ({ params, body }, res) => {
    try {
      const thought = await Thought.create(body);
      const user = await User.findOneAndUpdate({ _id: params.userID }, { $push: { thoughts: thought._id } }, { new: true });
      if (!user) {
        res.status(400).json({ message: "Incorrect user data!" });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.json(err);
    }
  },
};

// Exports the thoughtController
module.exports = thoughtController;

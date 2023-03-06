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
  // Method to add a new thought
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
  // Method to update a thought by its ID
  updateThought: async ({ params, body }, res) => {
    try {
      const thoughtData = await Thought.findByIdAndUpdate({ _id: params.thoughtID }, body, { runValidators: true, new: true });
      if (!thoughtData) {
        res.status(404).json({ message: "No thought found with this ID!" });
        return;
      }
      res.json(thoughtData);
    } catch (err) {
      res.json(err);
    }
  },
};

// Exports the thoughtController
module.exports = thoughtController;

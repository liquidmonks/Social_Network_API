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
      res.status(400).json(err);
    }
  },
  // Method to get a single thought by its ID
  getThoughtByID: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findOne({ _id: params.thoughtId });
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  // Method to add a new thought
  addThought: async ({ params, body }, res) => {
    try {
      const user = await User.findById(params.userId);
      if (!user) {
        res.status(400).json({ message: "Invalid user ID!" });
        return;
      }

      const thought = await Thought.create(body);
      user.thoughts.push(thought);
      await user.save();
      res.json(thought);
    } catch (err) {
      res.json(err);
    }
  },
  // Method to update a thought by its ID
  updateThought: async ({ params, body }, res) => {
    try {
      const thoughtData = await Thought.findByIdAndUpdate({ _id: params.thoughtId }, body, { runValidators: true, new: true });
      if (!thoughtData) {
        res.status(404).json({ message: "No thought found with this ID!" });
        return;
      }
      res.json(thoughtData);
    } catch (err) {
      res.json(err);
    }
  },
  // Method to delete a thought by its ID
  deleteThought: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findByIdAndDelete({ _id: params.thoughtId }, { runValidators: true, new: true });
      if (!thoughtData) {
        res.status(404).json({ message: "No thought found with this ID!" });
        return;
      }

      // Remove the thought from the user's thoughts array
      const userData = await User.findOneAndUpdate({ _id: thoughtData.userId }, { $pull: { thoughts: params.thoughtId } }, { new: true });
      if (!userData) {
        res.status(400).json({ message: "No user found with this ID!" });
        return;
      }

      res.json(thoughtData);
    } catch (err) {
      res.json(err);
    }
  },
  // Method to add a reaction to a thought
  addReaction: async ({ params, body }, res) => {
    try {
      const thoughtData = await Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body } }, { new: true, runValidators: true });
      if (!thoughtData) {
        res.status(404).json({ message: "Incorrect reaction data!" });
        return;
      }
      res.json(thoughtData);
    } catch (err) {
      res.json(err);
    }
  },
  // Method to delete a reaction from a thought
  deleteReaction: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findOneAndUpdate({ _id: params.thoughtId }, { $pullAll: { reactions: { reactionId: params.reactionId } } }, { new: true, runValidators: true });
      if (!thoughtData) {
        res.status(404).json({ message: "Incorrect reaction data!" });
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

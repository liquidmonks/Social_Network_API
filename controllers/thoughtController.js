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
      const thoughtData = await Thought.findById(params.thoughtId);
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  // Method to add a new thought
  addThought: async ({ params, body }, res) => {
    try {
      const user = await User.findOne({ _id: params.userId });

      if (!user) {
        res.status(400).json({ message: "Incorrect user data!" });
        return;
      }

      const thought = await Thought.create({
        thoughtText: body.thoughtText,
        userId: user._id,
        username: user.username,
        reactions: [],
      });

      await user.updateOne({ $push: { thoughts: { text: thought.thoughtText, id: thought._id } } });

      res.json(thought);
    } catch (err) {
      res.json(err);
    }
  },
  // Method to update a thought by its ID
  // updateThought: async ({ params, body }, res) => {
  //   try {
  //     const thoughtData = await Thought.findByIdAndUpdate({ _id: params.thoughtId }, body, { runValidators: true, new: true });
  //     await User.findOneAndUpdate({ _id: thoughtData.userId }, { $pull: { thoughts: { id: thoughtData._id } } }, { new: true });
  //     await User.findOneAndUpdate({ _id: thoughtData.userId }, { $push: { thoughts: { text: thoughtData.thoughtText, id: thoughtData._id } } }, { new: true });

  //     if (!thoughtData) {
  //       res.status(404).json({ message: "No thought found with this ID!" });
  //       return;
  //     }
  //     res.json(thoughtData);
  //   } catch (err) {
  //     res.json(err);
  //   }
  // },
  updateThought: async ({ params, body }, res) => {
    try {
      const thoughtData = await Thought.findByIdAndUpdate(params.thoughtId, body, { runValidators: true, new: true });
      if (!thoughtData) {
        res.status(404).json({ message: "No thought found with this ID!" });
        return;
      }
      await User.findOneAndUpdate({ _id: thoughtData.userId, "thoughts.id": thoughtData._id }, { $set: { "thoughts.$.text": thoughtData.thoughtText } }, { new: true });
      res.json(thoughtData);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Method to delete a thought by its ID
  deleteThought: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findById(params.thoughtId);
      if (!thoughtData) {
        res.status(404).json({ message: "No thought found with this ID!" });
        return;
      }

      await User.findOneAndUpdate({ username: thoughtData.username }, { $pull: { thoughts: { id: thoughtData._id } } }, { new: true });

      await thoughtData.delete();

      res.json({ message: "Thought has been deleted" });
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
  deleteReaction: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findOneAndUpdate({ _id: params.thoughtId }, { $pull: { reactions: { reactionID: params.reactionId } } }, { new: true, runValidators: true });
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

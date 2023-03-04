// Imports the Thought and User models from the '../models' module
const { Thought, User } = require("../models");

// Defines an object called thoughtController with several methods
const thoughtController = {
  async getUsers(req, res) {
    try {
      const userData = await User.findOne({});
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
};

// Exports the thoughtController
module.exports = thoughtController;

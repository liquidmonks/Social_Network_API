// Imports the User model from the '../models' module
const { User } = require("../models");

const userController = {
  // Method to get all users from the database
  async getUsers(req, res) {
    try {
      const userData = await User.find({});
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
};

module.exports = userController;

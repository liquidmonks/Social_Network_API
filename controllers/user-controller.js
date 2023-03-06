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
  // Method to add a new user to the database
  async addUser({ body }, res) {
    try {
      const userData = await User.create(body);
      res.json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // Method to get a user by ID from the database
  async getUserByID({ params }, res) {
    try {
      const userData = await User.findOne({ _id: params.id });
      res.json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // Method to update a user by ID in the database
  async updateUser({ params, body }, res) {
    try {
      const userData = await User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true });
      if (!userData) {
        res.status(400).json({ message: "No user found with this ID!" });
        return;
      }
      res.json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

// Exports the userController object
module.exports = userController;

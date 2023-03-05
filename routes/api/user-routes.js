/*
// Imports necessary modules and controllers
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user-controller");

// Defines routes to get all users and a new user
router.route("/users").get(userController.getUsers).post(userController.addUser);

// Route to get a specific user by ID, update a user, and delete a user
router.route("/users/:id").get(userController.getUserByID).put(userController.updateUser).delete(userController.deleteUser);

// Route to add a friend and delete a friend of a user
router.route("/users/:id/friends/:friendID").post(userController.addFriend).delete(userController.deleteFriend);

// Exports router module
module.exports = router;
*/
const router = require("express").Router();

const { getUsers, addUser, getUserByID, updateUser, deleteUser, addFriend, deleteFriend } = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getUsers).post(addUser);

// /api/users/:id
router.route("/:id").get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/:id/friends/:friendId

router.route("/:id/friends/:friendID").post(addFriend).delete(deleteFriend);

module.exports = router;

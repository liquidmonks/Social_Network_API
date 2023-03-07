// Imports necessary modules and controllers
const express = require("express");
const router = express.Router();
const thoughtController = require("../../controllers/thoughtController");

// Defines route to get all thoughts
router.route("/").get(thoughtController.getThoughts);

// Route to add a new thought for a user
router.route("/:userID").post(thoughtController.addThought);

// Route to get a specific thought by ID, update a thought, and delete a thought
router.route("/:thoughtId").get(thoughtController.getThoughtByID).put(thoughtController.updateThought).delete(thoughtController.deleteThought);

// Route to add a reaction to a thought
router.route("/:thoughtId/reactions").post(thoughtController.addReaction);

// Route to delete a reaction from a thought
router.route("/:thoughtId/reactions/:reactionId").delete(thoughtController.deleteReaction);

// Exports router module
module.exports = router;

/*
// Imports necessary modules and controllers
const express = require("express");
const router = express.Router();
const thoughtController = require("../../controllers/thought-controller");

// Defines route to get all thoughts
router.route("/thoughts").get(thoughtController.getThoughts);

// Route to add a new thought for a user
router.route("/thoughts/:userID").post(thoughtController.addThought);

// Route to get a specific thought by ID, update a thought, and delete a thought
router.route("/thoughts/:thoughtId").get(thoughtController.getThoughtByID).put(thoughtController.updateThought).delete(thoughtController.deleteThought);

// Route to add a reaction to a thought
router.route("/thoughts/:thoughtId/reactions").post(thoughtController.addReaction);

// Route to delete a reaction from a thought
router.route("/thoughts/:thoughtId/reactions/:reactionId").delete(thoughtController.deleteReaction);

// Exports router module
module.exports = router;
*/

const router = require("express").Router();

const { getThoughts, getThoughtByID, addThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thought-controller");

// /api/thoughts/
router.route("/").get(getThoughts);

// api/thoughts/:userId
router.route("/:userId").post(addThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getThoughtByID).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;

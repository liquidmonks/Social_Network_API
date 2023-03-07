// Imports the express Router middleware
const router = require("express").Router();

// Imports the ThoughtRoutes and userRoutes modules
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

// Mount the thoughtRoutes module on the '/thoughts' path and the userRoutes module on the '/users' path
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

// Exports the router middleware
module.exports = router;

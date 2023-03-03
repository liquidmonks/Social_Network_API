// Imports the API routes module
const router = require("express").Router();

// Mounts the API routes module on the '/api' path
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("404 Error!");
});

// Exports the router middleware
module.exports = router;

// Import express to create routes
const express = require("express");

// Create a new router object to define API routes
const router = express.Router();

// Import the controller functions for login and signup
const { login, signup } = require("../controller/Auth");

// -------- AUTH ROUTES --------

// Route for user signup (POST request)
// When someone calls /signup, it will run the signup controller

router.post("/signup", signup);
// Route for user login (currently commented out)
router.post("/login", login);

// Export the router so it can be used in server.js
module.exports = router;

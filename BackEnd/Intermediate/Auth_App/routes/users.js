// Import express to create routes
const express = require("express");

// Create a new router object to define API routes
const router = express.Router();

// Import the controller functions for login and signup
const { login, signup } = require("../controller/Auth");

const { auth, isStudent, isAdmin } = require("../middleware/auth");

// -------- AUTH ROUTES --------

// Route for user signup (POST request)
// When someone calls /signup, it will run the signup controller

router.post("/signup", signup);
// Route for user login (currently commented out)
router.post("/login", login);

// testing protected routes for single middleware
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected route for tests"
    });
})
// protected route

router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected route for students."
    });
});

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected route for admin."
    });
})

// Export the router so it can be used in server.js
module.exports = router;

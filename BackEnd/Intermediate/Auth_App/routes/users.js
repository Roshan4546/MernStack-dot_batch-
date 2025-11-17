const express = require("express");
const router = express.Router();

const { login, signup } = require("../controller/Auth");
const { auth, isStudent, isAdmin } = require("../middleware/authe");

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected routes
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected route for tests"
    });
});

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
});

router.get("/getEmail", auth, (req, res) => {
    res.json({
        success: true,
        email: req.user.email,
        id: req.user.id
    });
});

// Export the router
module.exports = router;

const jwt = require("jsonwebtoken");
require("dotenv").config();

// ------------------ AUTH MIDDLEWARE ------------------
exports.auth = (req, res, next) => {
    try {
        // Get token from body, cookies, or header
        const token =
            req.body.token ||
            req.cookies?.token ||
            req.header("Authorization")?.replace("Bearer ", "");

        // If token missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing"
            });
        }

        // Verify token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Attach decoded payload
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            });
        }

        next(); // Proceed to next middleware
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while verifying token",
        });
    }
};


// ------------------ STUDENT ROLE MIDDLEWARE ------------------
exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students only"
            });
        }
        next(); // Continue
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role could not be verified"
        });
    }
};


// ------------------ ADMIN ROLE MIDDLEWARE ------------------
exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for admin only"
            });
        }
        next(); // Continue
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role could not be verified"
        });
    }
};

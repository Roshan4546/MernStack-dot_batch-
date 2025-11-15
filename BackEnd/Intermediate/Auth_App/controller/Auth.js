// Import bcrypt library for hashing passwords
const bcrypt = require("bcrypt");

// Import the User model to interact with the users collection
const User = require("../model/UserSpec");

// Import JWT
const jwt = require("jsonwebtoken");

// Load environment variables
require("dotenv").config();

// ----------------------------- SIGNUP CONTROLLER -----------------------------
exports.signup = async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Save new user
        await User.create({
            name,
            email,
            password: hashPassword,
            role
        });

        // Return success response
        return res.status(200).json({
            success: true,
            message: "User created successfully"
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Cannot register, please try again later.",
            error: err.message
        });
    }
};


// ----------------------------- LOGIN CONTROLLER -----------------------------
exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details carefully."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered."
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        };

        if (await bcrypt.compare(password, user.password)) {

            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            // Convert mongoose document → plain JS object
            let userObj = user.toObject();
            userObj.token = token;   // now token will appear
            delete userObj.password; // hide password
            // Previously, the token did not show because you added it to a Mongoose document, which removes non-schema fields when converted to JSON. After converting to a plain object (toObject()), the token is included.//
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            return res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user: userObj,   // returning updated object
                message: "User logged in successfully.",
            });
        }
        else {
            return res.status(403).json({
                success: false,
                message: "Wrong password."
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(403).json({
            success: false,
            message: "Login failure"
        });
    }
};

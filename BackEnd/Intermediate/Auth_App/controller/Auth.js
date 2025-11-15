const bcrypt = require("bcrypt");
const User = require("../model/UserSpec");

exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // check if user exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // save user
        await User.create({
            name,
            email,
            password: hashPassword,
            role
        });

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

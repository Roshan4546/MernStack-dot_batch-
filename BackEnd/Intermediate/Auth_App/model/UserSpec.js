const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        // ! In Mongoose, the keyword enum is used to restrict a field to only specific allowed values.
        enum: ["Admin", "Student", "Guest"]
    }
});

module.exports = mongoose.model("users", userSchema);


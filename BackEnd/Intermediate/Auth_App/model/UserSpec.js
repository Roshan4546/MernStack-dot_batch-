// Import mongoose to create a schema and model
const mongoose = require("mongoose");

// Create a new schema for the user collection
const userSchema = new mongoose.Schema({

    // -------- USER NAME FIELD --------
    name: {
        type: String,        // data type is String
        required: true,      // this field must be provided
        trim: true           // removes extra spaces from start & end
    },

    // -------- USER EMAIL FIELD --------
    email: {
        type: String,        // email stored as String
        required: true,      // email is mandatory
        trim: true           // clean extra spaces
    },

    // -------- PASSWORD FIELD --------
    password: {
        type: String,        // password will be stored as a hashed string
        required: true       // password is required
    },

    // -------- USER ROLE FIELD --------
    role: {
        type: String,        // role stored as text
        // restrict role to only these allowed values
        enum: ["Admin", "Student", "Guest"]
    }
});

// Export the model so other files can use this schema
// "users" = collection name in MongoDB
module.exports = mongoose.model("users", userSchema);

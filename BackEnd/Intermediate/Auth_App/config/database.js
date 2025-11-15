// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Load environment variables from the .env file into process.env
require("dotenv").config();

// Export a function named 'connect' so it can be used in other files
exports.connect = () => {

    // Use mongoose to connect to MongoDB using the URL from .env file
    mongoose
        .connect(process.env.MONGODB_URL, {
            // Use the new MongoDB URL string parser (recommended)
            useNewUrlParser: true,

            // Use the new server discovery and monitoring engine (recommended)
            useUnifiedTopology: true,
        })

        // If the connection is successful, this function will run
        .then(() => {
            console.log("DB connected successfully");
        })

        // If there is an error while connecting, this block will run
        .catch((err) => {
            // Print the error message to the console
            console.log("DB connection failed:", err.message);

            // Stop the server if the database fails to connect
            process.exit(1);
        });
};

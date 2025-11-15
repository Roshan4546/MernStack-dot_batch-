// Import the express framework
const express = require("express");

// Create an Express application
const app = express();

// Load environment variables from the .env file
require('dotenv').config();

// Get PORT value from .env, if not available use 4000 as default
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Connect to the MongoDB database
require("./config/database").connect();

// Import user routes file
const user = require("./routes/users");

// Mount the routes at /api/v1
// Example: /api/v1/signup
app.use("/api/v1", user);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});

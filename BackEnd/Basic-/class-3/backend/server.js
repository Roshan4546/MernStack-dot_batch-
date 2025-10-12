
const express = require("express");
const dbConnect = require("./config/database");
const blogRoutes = require("./routes/BlogRoute");


// 1. access the express.
const app = express();

// 2. load config from env file
require("dotenv").config();

// 3. connect to database
dbConnect();

// 4. middleware to parse json request body
app.use(express.json());

// 5. mount the blog API routes
app.use("/api/v1", blogRoutes);

// 6. default route
app.get("/", (req, res) => {
    res.send("<h1>This is Home page</h1>");
});

// 7. start server
const PORT = process.env.PORT || 2708;
app.listen(PORT, () => {
    console.log(`✅ Server started successfully at port ${PORT}`);
});

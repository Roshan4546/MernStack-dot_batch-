const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // ⭐ REQUIRED

app.use(require("express-fileupload")({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    parseNested: true   // optional but recommended
}));

// DB Connect
const db = require("./config/database");
db.connect();

// Cloudinary Connect
const cloud = require("./config/cloudinary");
cloud.connect();

// Routes
const uploadRoutes = require("./routes/fileUpload");
app.use("/api/v1/upload", uploadRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


// http://localhost:5000/api/v1/upload/local
// http://localhost:5000/api/v1/upload/cloudinary
const express = require("express");
const router = express.Router();

const {
    localFileUpload,
    cloudinaryUpload,
    imageUpload,
    videoUpload,
    imageSizeReducer // <-- Corrected name here
} = require("../controllers/fileController");

router.post("/local", localFileUpload);
router.post("/cloudinary", cloudinaryUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/compressFile", imageSizeReducer); // <-- Corrected here

module.exports = router;

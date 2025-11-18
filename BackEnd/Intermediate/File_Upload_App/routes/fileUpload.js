const express = require("express");
const router = express.Router();

const {
    localFileUpload,
    cloudinaryUpload,
    imageUpload,
    videoUpload
} = require("../controllers/fileController");

router.post("/local", localFileUpload);
router.post("/cloudinary", cloudinaryUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
module.exports = router;

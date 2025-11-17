const express = require("express");
const router = express.Router();

const {
    localFileUpload,
    cloudinaryUpload
} = require("../controllers/fileController");

router.post("/local", localFileUpload);
router.post("/cloudinary", cloudinaryUpload);

module.exports = router;

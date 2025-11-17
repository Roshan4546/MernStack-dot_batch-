const File = require("../models/fileModel_Dummy");
const { cloudinary } = require("../config/cloudinary");
const path = require("path");

// ---------------- LOCAL UPLOAD ----------------
exports.localFileUpload = async (req, res) => {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const file = req.files.file;
        const uploadPath = path.join(__dirname, "..", "files", `${Date.now()}_${file.name}`);

        // FIX: WRAP file.mv IN A PROMISE
        await new Promise((resolve, reject) => {
            file.mv(uploadPath, err => {
                if (err) return reject(err);
                resolve();
            });
        });

        // SAVE TO DB
        const fileData = await File.create({
            name: file.name,
            imageUrl: uploadPath,
            tags: req.body.tags || "",
            email: req.body.email || ""
        });

        res.json({
            success: true,
            message: "Local file uploaded & saved to DB",
            file: fileData
        });

    } catch (error) {
        console.log("UPLOAD ERROR:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};



// ---------------- CLOUDINARY UPLOAD ----------------
exports.cloudinaryUpload = async (req, res) => {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const file = req.files.file;

        // FIX: Cloudinary requires file.tempFilePath
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "uploads"
        });

        // SAVE TO DB
        const fileData = await File.create({
            name: file.name,
            imageUrl: result.secure_url,
            tags: req.body.tags || "",
            email: req.body.email || ""
        });

        res.json({
            success: true,
            message: "File uploaded to Cloudinary & saved to DB",
            url: result.secure_url,
            file: fileData
        });

    } catch (error) {
        console.log("CLOUDINARY ERROR:", error);
        res.status(500).json({ success: false, message: "Cloudinary error", error: error.message });
    }
};

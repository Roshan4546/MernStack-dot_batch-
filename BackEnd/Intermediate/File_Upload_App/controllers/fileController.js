const File = require("../models/fileModel_Dummy");
const { cloudinary } = require("../config/cloudinary");
const path = require("path");


// =======================================================
//                  LOCAL UPLOAD
// =======================================================
exports.localFileUpload = async (req, res) => {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const file = req.files.file;
        const uploadPath = path.join(__dirname, "..", "files", `${Date.now()}_${file.name}`);

        await new Promise((resolve, reject) => {
            file.mv(uploadPath, err => err ? reject(err) : resolve());
        });

        return res.json({
            success: true,
            message: "Local file uploaded",
            filePath: uploadPath
        });

    } catch (error) {
        console.log("UPLOAD ERROR:", error);
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};



// =======================================================
//                  CLOUDINARY UPLOAD
// =======================================================
exports.cloudinaryUpload = async (req, res) => {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const file = req.files.file;

        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "uploads",
            resource_type: "auto"
        });

        const fileData = await File.create({
            name: file.name,
            imageUrl: result.secure_url,
            tags: req.body.tags || "",
            email: req.body.email || ""
        });

        return res.json({
            success: true,
            message: "Uploaded to Cloudinary & DB saved",
            url: result.secure_url,
            data: fileData
        });

    } catch (error) {
        console.log("CLOUDINARY ERROR:", error);
        return res.status(500).json({ success: false, message: "Cloudinary error", error: error.message });
    }
};


// =======================================================
//                  HELPERS
// =======================================================
function isFiletypeSupportive(type, supportiveType) {
    return supportiveType.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder, resource_type: "auto" };

    if (quality) options.quality = quality;

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}



// =======================================================
//                  IMAGE UPLOAD
// =======================================================
exports.imageUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;

        if (!req.files || !req.files.imageFile) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        const file = req.files.imageFile;

        const allowed = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".").pop().toLowerCase();

        if (!isFiletypeSupportive(fileType, allowed)) {
            return res.status(400).json({
                success: false,
                message: "Only jpg/jpeg/png allowed",
            });
        }

        const response = await uploadFileToCloudinary(file, "cloudinaryFolder");

        const fileData = await File.create({
            name: name || file.name,
            imageUrl: response.secure_url,
            tags: tags || "",
            email: email || ""
        });

        return res.status(200).json({
            success: true,
            message: "Image uploaded to Cloudinary & saved to DB",
            data: fileData,
        });

    } catch (error) {
        console.log("IMAGE UPLOAD ERROR:", error);
        return res.status(500).json({
            success: false,
            message: "Cloudinary error",
            error: error.message,
        });
    }
};



// =======================================================
//                  VIDEO UPLOAD
// =======================================================
exports.videoUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;

        const file = req.files.videoFile || req.files.videoUpload || req.files.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No video uploaded",
            });
        }

        const allowed = ["mp4", "mov", "mkv", "avi"];
        const fileType = file.name.split(".").pop().toLowerCase();

        if (!isFiletypeSupportive(fileType, allowed)) {
            return res.status(400).json({
                success: false,
                message: "Only mp4/mov/mkv/avi allowed",
            });
        }

        const response = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "videoFolder",
            resource_type: "video",
            chunk_size: 6000000,
        });

        const fileData = await File.create({
            name: name || file.name,
            imageUrl: response.secure_url,
            tags: tags || "",
            email: email || ""
        });

        return res.status(200).json({
            success: true,
            message: "Video uploaded to Cloudinary & DB saved",
            data: fileData,
        });

    } catch (error) {
        console.log("VIDEO UPLOAD ERROR:", error);
        return res.status(500).json({
            success: false,
            message: "Cloudinary video error",
            error: error.message,
        });
    }
};



// =======================================================
//                  IMAGE COMPRESSOR
// =======================================================
exports.imageSizeReducer = async (req, res) => {
    try {
        const { name, tags, email, quality } = req.body;

        if (!req.files || !req.files.compressFile) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        const file = req.files.compressFile;

        const allowed = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".").pop().toLowerCase();

        if (!isFiletypeSupportive(fileType, allowed)) {
            return res.status(400).json({
                success: false,
                message: "Only jpg/jpeg/png allowed",
            });
        }

        const compressQuality = quality ? Number(quality) : 80;

        const response = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "compressFile",
            resource_type: "image",
            quality: "auto",       // Smart compression
            fetch_format: "auto"   // Convert to best format (WEBP)
        });

        const fileData = await File.create({
            name: name || file.name,
            imageUrl: response.secure_url,
            tags: tags || "",
            email: email || ""
        });

        return res.status(200).json({
            success: true,
            message: "Image compressed & uploaded successfully",
            data: fileData,
        });

    } catch (error) {
        console.log("COMPRESS ERROR:", error);
        return res.status(500).json({
            success: false,
            message: "Image compression error",
            error: error.message,
        });
    }
};

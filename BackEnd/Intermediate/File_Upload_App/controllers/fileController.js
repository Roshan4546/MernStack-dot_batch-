const File = require("../models/fileModel_Dummy");
const { cloudinary } = require("../config/cloudinary");
const path = require("path");
const { console } = require("inspector");

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

        // // SAVE TO DB
        // const fileData = await File.create({
        //     name: file.name,
        //     imageUrl: uploadPath,
        //     tags: req.body.tags || "",
        //     email: req.body.email || ""
        // });

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

function isFiletypeSupportive(type, supportiveType) {
    return supportiveType.includes(type);
}

async function uploadFileToCloudinary(file, folder) {
    const options = { folder: folder };
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}
// ---------------- IMAGE UPLOAD ----------------
exports.imageUpload = async (req, res) => {
    try {
        // fetch simple data
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        // receive file
        const file = req.files.imageFile;
        console.log(file);

        // file validation
        const supportiveType = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".").pop().toLowerCase();

        // check file support
        if (!isFiletypeSupportive(fileType, supportiveType)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported. Only jpg/jpeg/png allowed",
            });
        }

        // upload file to cloudinary
        const response = await uploadFileToCloudinary(file, "cloudinaryFolder");
        console.log("Cloudinary upload response:", response);

        // save in DB
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
        console.log("CLOUDINARY ERROR:", error);
        return res.status(500).json({
            success: false,
            message: "Cloudinary error",
            error: error.message,
        });
    }
};


// ---------------- VIDEO UPLOAD ----------------

exports.videoUpload = async (req, res) => {
    try {
        // fetch data
        const { name, tags, email } = req.body;
        console.log("name : ", name);
        console.log("email : ", email);
        console.log("tag : ", tags);


        // receive file
        console.log(req.files); // check first
        const file = req.files.videoUpload || req.files.file || req.files.videoFile;

        console.log("file : ", file);

        // check file validation
        const supportedTypes = ["mp4", "mov", "mkv", "avi"];
        const fileType = file.name.split(".").pop().toLowerCase();

        // check file support
        if (!isFiletypeSupportive(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "nvalid format. Only mp4/mov/mkv/avi allowed.",
            });
        }

        // upload file to cloudinary
        // upload to cloudinary
        const response = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "videoFolder",
            resource_type: "video",
            chunk_size: 6000000,     // 6MB (optional: useful for big videos)
        });
        console.log("Cloudinary upload response.");

        // save in db
        const fileData = await File.create({
            name: name || file.name,
            imageUrl: response.secure_url,
            tags: tags || "",
            email: email || ""
        });

        return res.status(200).json({
            success: true,
            message: "Video uploaded to Cloudinary & saved to DB",
            data: fileData,
        });
    } catch (error) {
        console.log("Cloudinary error : ", error);
        return res.status(500).json({
            success: false,
            message: "Cloudinary error",
            error: error.message,
        });
    }
}
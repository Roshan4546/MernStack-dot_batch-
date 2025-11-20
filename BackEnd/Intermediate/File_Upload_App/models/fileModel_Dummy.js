const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String },
    tags: { type: String },
    email: { type: String }
});

// Post-save middleware
fileSchema.post("save", async function (doc) {
    try {
        console.log("DOC", doc);

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
        });

        let info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: doc.email,
            subject: "New file uploaded successfully.",
            html: `<p>Hello, your file <b>${doc.name}</b> was uploaded successfully!</p>`,
        });

        console.log("INFO", info);

    } catch (error) {
        console.log(error);
        console.log("Error sending email.");
    }
});

module.exports = mongoose.model("File", fileSchema);

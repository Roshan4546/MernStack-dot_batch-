const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("✅ MongoDB Connected"))
        .catch((err) => {
            console.log("❌ MongoDB Connection Failed");
            console.error(err);
            process.exit(1);
        });
};

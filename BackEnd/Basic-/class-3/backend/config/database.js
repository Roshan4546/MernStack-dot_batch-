const mongoose = require("mongoose");
// fetch api database.
// Usually in config/database.js or wherever you connect to MongoDB:
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,     // flag define true or false (property)
        useUnifiedTopology: true
    }).then(() => console.log("connection is successfully."))
        .catch((error) => {
            console.log("something went wrong");
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = dbConnect;
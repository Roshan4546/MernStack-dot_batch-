const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
    // url
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,     // flag define true or false (property)
        useUnifiedTopology: true
    }).then(() => console.log("Connection is successfully."))
        .catch((error) => {
            console.log("Something is wrong.");
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = dbConnect;
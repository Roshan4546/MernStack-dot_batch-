// require means import

const express = require("express");
const app = express();

// load config from env file

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middlewere to parse json request body

app.use(express.json());


// import routes for todo api

const todoRouts = require("./routes/todoRoute");


// mounts the todo ASPI route


app.use("/api/v1", todoRouts);

// start server

app.listen(PORT, () => {
    console.log(`server started successfully at ${PORT}`);
})

//  connect to the database

const dbConnect = require("./config/database");
dbConnect();

// default Rout

app.get("/", (req, res) => {
    res.send(`<h1>This is home Page</h1>`);
})
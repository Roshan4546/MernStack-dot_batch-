const express = require("express");
const dbConnect = require("./config/database");
const blogRoutes = require("./routes/BlogRoute");
const cors = require("cors");
const app = express();

require("dotenv").config();

// 1. connect database
dbConnect();

// 2. enable CORS for frontend
app.use(cors({ origin: "http://localhost:5173" }));

// 3. parse JSON
app.use(express.json());

// 4. routes
app.use("/api/v1", blogRoutes);

// 5. default route
app.get("/", (req, res) => {
    res.send("<h1>This is Home page</h1>");
});

const PORT = process.env.PORT || 2708;
app.listen(PORT, () => console.log(`✅ Server running at ${PORT}`));

app.use(cors({ origin: "http://localhost:5173" })); // allow frontend port

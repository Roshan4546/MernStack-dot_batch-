const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");

// define API routes
router.post("/controllerCreate", createTodo);

module.exports = router;

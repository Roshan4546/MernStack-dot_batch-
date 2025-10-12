const express = require("express");
const router = express.Router();

const { createBlog } = require("../controllers/createBlog");
const { deleteBlog } = require("../controllers/deleteBlog");
const { getBlogs, getBlogById } = require("../controllers/getBlog");
const { updateBlog } = require("../controllers/update");
const { likeBlog, dislikeBlog } = require("../controllers/likeDislike");
const { toggleSave } = require("../controllers/saveBlog");

router.post("/controllerCreate", createBlog);
router.delete("/deleteBlog/:id", deleteBlog);
router.get("/getBlogs", getBlogs);
router.get("/getBlogById/:id", getBlogById);
router.put("/updateBlog/:id", updateBlog)
router.post("/blogs/:id/like", likeBlog);
router.post("/blogs/:id/dislike", dislikeBlog);
router.post("/blogs/:id/save", toggleSave);


module.exports = router;

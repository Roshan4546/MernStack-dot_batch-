const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
    try {
        const blog = await Blog.find({});

        res.status(200).json({
            success: true,
            message: "display Blogs",
            data: blog, // send the array
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog is not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Blog is found"
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}
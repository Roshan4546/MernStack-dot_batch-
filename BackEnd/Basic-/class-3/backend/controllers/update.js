const Blog = require("../models/Blog");

exports.updateBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, description, updatedAt: Date.now() },
            { new: true }
        );
        if (!blog) return res.status(404).json({
            success: false,
            message: "Blog not found"
        });
        res.status(200).json({
            success: true,
            message: "Blog updated",
            data: blog
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
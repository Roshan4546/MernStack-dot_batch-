const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required"
            });
        }

        const blog = await Blog.create({ title, description });

        res.status(201).json({
            success: true,
            data: blog,
            message: "Blog created successfully"
        });
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        });
    }
};

const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Blog.create({ title, description });

        res.status(200).json({
            success: true,
            data: response,
            message: "Blog created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        });
    }
};

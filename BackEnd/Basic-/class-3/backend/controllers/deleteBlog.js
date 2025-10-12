const Blog = require("../models/Blog");

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) return res.status(404).json({
            success: false,
            message: "blog not found",

        })

        res.status(200).json({
            success: true,
            message: "blog deleted",
        })
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}
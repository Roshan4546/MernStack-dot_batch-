const Blog = require("../models/Blog");


// ✅ Like blog
exports.likeBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

        blog.likes += 1;
        await blog.save();

        res.status(200).json({ success: true, message: "Blog liked", data: blog });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// ✅ Dislike blog
exports.dislikeBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

        blog.dislikes += 1;
        await blog.save();

        res.status(200).json({ success: true, message: "Blog disliked", data: blog });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

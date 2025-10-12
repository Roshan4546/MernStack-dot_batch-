const Blog = require("../models/Blog");


// ✅ Toggle Save blog
exports.toggleSave = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

        blog.saved = !blog.saved;
        await blog.save();

        res.status(200).json({ success: true, message: "Save status updated", data: blog });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
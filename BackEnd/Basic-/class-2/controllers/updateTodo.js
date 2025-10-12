const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try {
        // Extract ID from URL
        const id = req.params.id;

        // Extract fields from request body
        const { title, description } = req.body;

        // Find and update
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {
                title,
                description,
                updatedAt: Date.now()
            },
            { new: true } // returns the updated document
        );

        // If no todo found
        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found."
            });
        }

        // Send success response
        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: "Todo updated successfully!"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error updating Todo",
            error: err.message
        });
    }
};

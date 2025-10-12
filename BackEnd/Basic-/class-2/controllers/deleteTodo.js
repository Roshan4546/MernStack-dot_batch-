const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        // Extract the ID from URL parameters
        const id = req.params.id;

        // Find and delete the Todo by ID
        const deletedTodo = await Todo.findByIdAndDelete(id);

        // If no todo found
        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found!"
            });
        }

        // Success response
        res.status(200).json({
            success: true,
            data: deletedTodo,
            message: "Todo deleted successfully!"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error deleting Todo",
            error: err.message
        });
    }
};



const Todo = require("../models/Todo");


exports.getTodo = async (req, res) => {
    try {
        // fetch all todo item from database.
        const todo = await Todo.find({}); // get all items so that there is not provides any parameter.

        // response

        res.status(200).json(
            {
                success: true,
                data: todo,
                message: "Entire Todo Data is is fetched",
            }
        )
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal issue",
            message: err.message
        });
    }
}

exports.getTodoById = async (req, res) => {
    try {
        // extract todo id from request parameters
        const id = req.params.id;

        // fetch todo by ID using Mongoose's findById method
        const todo = await Todo.findById(id);

        // if given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found."
            });
        }

        // if data found
        res.status(200).json({
            success: true,
            data: todo,
            message: "Fetched successfully."
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        });
    }
};

import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:2708/api/v1",
});

export default api;

// POST http://localhost:2708/api/v1/controllerCreate

// GET  http://localhost:2708/api/v1/getBlogs

// GET http://localhost:2708/api/v1/getBlogById/68ed0ece7102a9bbbcb119a9

// DELETE http://localhost:2708/api/v1/deleteBlog/68ebc578b095ec71de8f98ba

// POST http://localhost:2708/api/v1/blogs/68ed0ece7102a9bbbcb119a9/dislike

// POST http://localhost:2708/api/v1/blogs/68ed0ece7102a9bbbcb119a9/save
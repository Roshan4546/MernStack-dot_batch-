import React, { useState } from 'react';
import api from '../apiurl';   // your axios instance
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/blogs", { title, description });
            console.log("Blog created:", response.data);
            navigate("/"); // redirect to home
        } catch (error) {
            console.error(error);
            alert("Failed to create blog");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Create Blog</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-3 rounded"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-3 rounded h-40"
                    required
                />
                <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;

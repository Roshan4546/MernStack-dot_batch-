import React from 'react'
import api from "../apiurl";


const BlogCard = ({ blog }) => {
    // handle like button
    const handleLike = async () => {
        await api.post(`/blogs/${blog._id}/like`);
        window.location.reload();
    }
    // handle dislike button

    const handleDislike = async () => {
        await api.post(`/blogs/${blog._id}/dislike`);
        window.location.reload();
    }

    // handle save button

    const handleSave = async () => {
        await api.post(`/blogs/${blog._id}/save`);
        window.location.reload();
    }

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">{blog.title}</h3>
            <p className="text-gray-700 mb-6">{blog.description}</p>

            <div className="flex items-center justify-between mb-6">
                <div className="flex gap-6 text-gray-800 font-medium text-lg">
                    <span>👍 {blog.likes}</span>
                    <span>👎 {blog.dislikes}</span>
                </div>
                <button
                    className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${blog.saved
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                    onClick={handleSave}
                >
                    {blog.saved ? "Unsave" : "Save"}
                </button>
            </div>

            <div className="flex gap-4">
                <button
                    className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                    onClick={handleLike}
                >
                    Like
                </button>
                <button
                    className="flex-1 bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    onClick={handleDislike}
                >
                    Dislike
                </button>
            </div>
        </div>
    )
}

export default BlogCard

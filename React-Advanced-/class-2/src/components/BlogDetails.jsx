import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function BlogDetails() {
    const { loading, posts } = useContext(AppContext);

    if (loading) {
        return <Spinner />;
    }

    if (!posts || posts.length === 0) {
        return <p className="text-center text-red-500 mt-6">No posts found.</p>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-6 space-y-8">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
                >
                    {/* Title */}
                    <NavLink to={`/Blog/${post.id}`}>
                        <h2 className="text-2xl font-bold text-blue-600 hover:underline">
                            {post.title}
                        </h2>
                    </NavLink>

                    {/* Author + Category */}
                    <p className="text-sm text-gray-600 mt-2">
                        By <span className="font-medium">{post.author}</span> on{" "}
                        <NavLink
                            to={`/categories/${post.category.replace(/\s+/g, "-").toLowerCase()}`}
                            className="text-green-600 hover:underline"
                        >
                            {post.category}
                        </NavLink>
                    </p>

                    {/* Date */}
                    <p className="text-xs text-gray-500 mb-3">
                        Posted on <span>{post.date}</span>
                    </p>

                    {/* Content */}
                    <p className="text-gray-800 leading-relaxed">{post.content}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags &&
                            post.tags.map((tag, index) => (
                                <NavLink
                                    key={index}
                                    to={`/tags/${tag.replace(/\s+/g, "-").toLowerCase()}`}
                                    className="px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-gray-300"
                                >
                                    #{tag}
                                </NavLink>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogDetails;

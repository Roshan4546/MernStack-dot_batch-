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
        <div className="max-w-2xl mx-auto mt-8 space-y-10 px-4">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200"
                >
                    {/* Title */}
                    <NavLink to={`/Blog/${post.id}`}>
                        <h2 className="text-2xl font-bold text-blue-700 hover:text-blue-900 hover:underline leading-snug">
                            {post.title}
                        </h2>
                    </NavLink>

                    {/* Author + Category */}
                    <div className="mt-2 text-sm text-gray-600 flex flex-wrap justify-center gap-1">
                        <span>
                            By <span className="font-semibold text-gray-800">{post.author}</span>
                        </span>
                        <span>·</span>
                        <NavLink
                            to={`/categories/${post.category.replace(/\s+/g, "-").toLowerCase()}`}
                            className="text-green-600 font-medium hover:underline"
                        >
                            {post.category}
                        </NavLink>
                    </div>

                    {/* Date */}
                    <p className="text-xs text-gray-500 mb-4 flex items-center justify-center gap-1">
                        📅 {post.date}
                    </p>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed">{post.content}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags &&
                            post.tags.map((tag, index) => (
                                <NavLink
                                    key={index}
                                    to={`/tags/${tag.replace(/\s+/g, "-").toLowerCase()}`}
                                    className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 rounded-full hover:bg-blue-100 transition"
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

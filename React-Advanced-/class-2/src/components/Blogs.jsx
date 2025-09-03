import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; // ✅ correct path
import Spinner from "./Spinner";

function Blogs() {
    const { loading, posts } = useContext(AppContext);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div>
                    <p>No Post Found</p>
                </div>
            ) : (
                posts.map((post, index) => (
                    <div key={index} className="border-b border-gray-300 pb-4 mb-4">
                        <p className="text-xl font-bold">{post.title}</p>
                        <p className="text-sm text-gray-600">
                            By <span className="font-semibold">{post.author}</span> on{" "}
                            <span>{post.category}</span>
                        </p>
                        <p className="text-xs text-gray-500">Posted on {post.date}</p>
                        <p className="mt-2">{post.content}</p>
                        <div className="mt-2 space-x-2">
                            {post.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-blue-500 text-sm font-medium"
                                >{`#${tag}`}</span>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Blogs;

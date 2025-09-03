import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; 
import Spinner from "./Spinner";

function Blogs() {
    const { loading, posts } = useContext(AppContext);

    return (
        <div className="flex flex-col items-center w-[650px] border-x border-blue-300 px-10 py-6 bg-white shadow-lg rounded-lg">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div>
                    <p className="text-gray-600 text-lg font-medium">No Post Found</p>
                </div>
            ) : (
                posts.map((post, index) => (
                    <div 
                        key={index} 
                        className="border-b border-gray-300 pb-6 mb-6 text-left hover:scale-[1.01] transition-transform"
                    >
                        <p className="text-2xl font-bold text-gray-900">{post.title}</p>
                        <p className="text-sm text-gray-600 mt-1">
                            By <span className="font-semibold text-red-500">{post.author}</span> 
                            {" "}on{" "}
                            <span className="text-blue-600 font-medium">{post.category}</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">📅 {post.date}</p>
                        <p className="mt-3 text-gray-800 leading-relaxed">{post.content}</p>
                        <div className="mt-3 space-x-2">
                            {post.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Blogs;

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
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
                // posts.map((post, index) => (
                //     <BlogDetails key={post.id} post={post}></BlogDetails>
                // ))
                <BlogDetails></BlogDetails>
            )}
        </div>
    );
}

export default Blogs;

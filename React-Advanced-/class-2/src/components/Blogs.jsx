import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

function Blogs({ tag, category }) {
    const { loading, posts, fetchBlogPosts } = useContext(AppContext);

    useEffect(() => {
        if (tag) {
            fetchBlogPosts(1, tag, null);
        } else if (category) {
            fetchBlogPosts(1, null, category);
        } else {
            fetchBlogPosts(1);
        }
        // ❌ removed fetchBlogPosts from deps to avoid infinite loop
    }, [tag, category]);

    if (loading) return <Spinner />;

    if (!posts || posts.length === 0) {
        return <p className="text-red-500">No blogs found.</p>;
    }

    return (
        <div className="space-y-6">
            {/* {posts.map((post) => (
                <BlogDetails key={post.id} post={post} />
            ))} */}
            <BlogDetails />
        </div>
    );
}

export default Blogs;

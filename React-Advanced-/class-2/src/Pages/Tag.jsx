import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

function Blogs({ tag, category }) {
    const { loading, posts, fetchBlogPosts } = useContext(AppContext);

    // ✅ Fetch posts whenever tag/category changes
    useEffect(() => {
        if (tag) {
            fetchBlogPosts(1, tag, null);
        } else if (category) {
            fetchBlogPosts(1, null, category);
        } else {
            fetchBlogPosts(1);
        }
    }, [tag, category, fetchBlogPosts]);

    if (loading) return <Spinner />;

    if (!posts || posts.length === 0) {
        return <p className="text-red-500">No blogs found.</p>;
    }

    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <BlogDetails key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Blogs;

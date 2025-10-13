import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import api from '../apiurl'
const BlogDetails = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        api.get("/getBlogs").then(res => setBlogs(res.data.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div className="blog-list">
                {blogs.map(blog => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default BlogDetails

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header"; // 👈 adjust path

function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    const { setloading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setloading(true);
        // let url = `${baseUrl}?blogId=${blogId}`;
        let url = "https://codehelp-apis.vercel.app/api/";

        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlog(data.relatedBlog || []);
        } catch (error) {
            console.log("Error found in Blog id", error);
            setBlog(null);
            setRelatedBlog([]);
        }
        setloading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

    return (
        <div>
            <Header />

            <div>
                <button onClick={() => navigate(-1)}>⬅ Back</button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : blog ? (
                <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>

                    <h3>Related Blogs</h3>
                    <ul>
                        {relatedBlog.map((rb) => (
                            <li key={rb.id}>{rb.title}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No blog found.</p>
            )}
        </div>
    );
}

export default BlogPage;

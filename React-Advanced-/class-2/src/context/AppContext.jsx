import React, { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // ✅ Fetch blogs
    async function fetchBlogPosts(page = 1, tag = null, category = null) {
        setLoading(true);

        const params = new URLSearchParams({ page });
        if (tag) params.append("tag", tag);
        if (category) params.append("category", category);

        const url = `${baseUrl}?${params.toString()}`;
        console.log("🌐 Fetching:", url); // ✅ Debug log

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log("✅ API Response:", data); // ✅ Debug log

            setPage(data.page || 1);
            setPosts(data.posts || []);
            setTotalPages(data.totalPages || null);
        } catch (error) {
            console.error("❌ Error fetching blogs:", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }


    // ✅ Handle pagination
    function handlePageChange(newPage) {
        setPage(newPage);
        fetchBlogPosts(newPage);
    }

    // ✅ Context value
    const value = {
        posts,
        loading,
        page,
        totalPages,
        fetchBlogPosts,
        handlePageChange,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

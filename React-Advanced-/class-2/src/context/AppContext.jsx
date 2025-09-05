import React, { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl';

// ✅ Step-1: create context
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // ✅ fetch blogs
    async function fetchBlogPosts(page = 1, tag=null, category) {
        setLoading(true);

        // let url = `${baseUrl}?page=${page}`;
        // ! class-3 update
        let url = `${baseUrl}?page=${page}`;
        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`;
        }

        try {
            const result = await fetch(url);
            const data = await result.json();

            // 👇 print full API response
            console.log("📌 API Response:", data);

            // 👇 print individual parts if needed
            console.log("➡️ Page:", data.page);
            console.log("➡️ Total Pages:", data.totalPages);
            console.log("➡️ Posts:", data.posts);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("❌ Error in fetching data:", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }

    // ✅ handle pagination
    function handlePageChange(newPage) {
        setPage(newPage);
        fetchBlogPosts(newPage);
    }

    // ✅ context value
    const value = {
        posts,
        loading,
        page,
        totalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

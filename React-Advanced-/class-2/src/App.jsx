import React, { useContext, useEffect } from "react"
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import PageChange from "./components/PageChange"
import { AppContext } from "./context/AppContext"

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center text-center px-4">
      <Header />
      <div className="mt-6">
        <Blogs />
        <PageChange />
      </div>
    </div>
  )
}

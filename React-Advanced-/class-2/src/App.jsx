import React, { useContext, useEffect } from "react"
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import PageChange from "./components/PageChange"
import { AppContext } from "./context/AppContext"


export default function App() {
  // call api
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  },[])
  return (
    <div className="bg-gray-900 h-screen  text-center ">
      <Header></Header>
      <Blogs></Blogs>
      <PageChange></PageChange>
    </div>
  )
}

import React, { useContext, useEffect } from "react"
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import PageChange from "./components/PageChange"
import { AppContext } from "./context/AppContext"
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom"
import Home from "./Pages/Home"
import BlogPage from "./Pages/BlogPage"
import Category from "./Pages/Category"
import Tag from "./Pages/Tag"
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  // useEffect(() => {
  //   fetchBlogPosts();
  // }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const Page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      // show tags page
      const tag = location.pathname.split("/").at(-1).replace("-", " "); // get after last '/' text. // replace - with space
      fetchBlogPosts(Number(Page), tag);
    }
    // show category basis.
    else if (location.pathname.includes("categories")) { // if no tag present.
      const Category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(Page), null, Category);
    }

    else {
      fetchBlogPosts(Number(Page));
    }
    // only run when pathname, page number is change.
  }, [location.pathname, location.search]);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center text-center px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<Tag />} />
        <Route path="/categories/category" element={<Category />} />
      </Routes>
    </div>
  )
}

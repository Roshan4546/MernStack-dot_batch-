import React from "react"
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import PageChange from "./components/PageChange"

export default function App() {
  return (
    <div className="bg-gray-900 h-screen  text-center ">
      <Header></Header>
      <Blogs></Blogs>
      <PageChange></PageChange>
    </div>
  )
}

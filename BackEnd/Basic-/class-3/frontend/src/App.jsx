import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./components/CreateBlog";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-700 min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </div>
  );
};

export default App;

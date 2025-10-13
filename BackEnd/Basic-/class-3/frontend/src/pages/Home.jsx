import React from 'react'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import BlogDetails from './BlogDetails'
const Home = () => {
    return (
        <div className="container mx-auto p-6 flex flex-col items-center">
            <Navbar></Navbar>
            <BlogDetails></BlogDetails>
        </div>
    )
}

export default Home

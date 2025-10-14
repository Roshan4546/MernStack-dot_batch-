import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50 rounded-2xl">
            <div className="container mx-auto flex items-center justify-between p-4">
                <h1 className="text-2xl font-bold tracking-wide">Blog App</h1>
                <div className="hidden md:flex gap-4">
                    <Link
                        to="/"
                        className="px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/create"
                        className="px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
                    >
                        Create Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

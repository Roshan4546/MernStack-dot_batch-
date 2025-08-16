import React from 'react'
import Logo from "../assets/logo2.png"
import { Link } from 'react-router-dom'
import { toast } from "react-hot-toast";

function Navbar({ isLoggedin, setLoggedin }) {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-3 px-6">

                {/* Logo */}
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-24 h-12 rounded-lg object-cover hover:scale-105 transition-transform"
                    />
                </Link>

                {/* Nav Links */}
                <nav>
                    <ul className="flex gap-6 text-lg font-medium">
                        <li>
                            <Link to="/" className="hover:text-yellow-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-yellow-400 transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-yellow-400 transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="flex gap-4">
                    {!isLoggedin && (
                        <>
                            <Link to="/login">
                                <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}

                    {isLoggedin && (
                        <>
                            <Link to="/">
                                <button
                                    onClick={() => {
                                        setLoggedin(false);
                                        toast.success("Logout successfully");
                                    }}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors"
                                >
                                    Logout
                                </button>
                            </Link>

                            <Link to="/dashboard">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors">
                                    Dashboard
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar

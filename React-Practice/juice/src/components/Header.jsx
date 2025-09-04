import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoJuice.png";

function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-2 bg-gray-900 text-white shadow-md">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="Juice Logo" className="h-13 w-auto" />
                <span className="text-2xl font-bold tracking-wide">Juicy Lovers</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex gap-6 text-lg font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/story">Story</Link></li>
                    <li><Link to="/drinks">Drinks</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Buttons */}
            <div className="flex gap-3">
                <button className="px-4 py-2 rounded-xl border border-amber-300 hover:bg-amber-300 hover:text-gray-900 transition font-bold">
                    Login
                </button>
                <button className="px-4 py-2 rounded-xl bg-amber-300 text-gray-900 font-bold hover:bg-amber-400 transition">
                    Cart
                </button>
            </div>
        </header>
    );
}

export default Header;

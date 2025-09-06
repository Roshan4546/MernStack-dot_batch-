import React from 'react';
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="w-full bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">

            {/* Logo */}
            <NavLink to="/">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="h-10 w-auto" />
                </div>
            </NavLink>

            {/* Menu & Cart */}

            <div className="flex items-center gap-6 text-gray-700 font-semibold">
                <NavLink to="/">
                    <p className="text-white hover:text-blue-500 cursor-pointer">Home</p>
                </NavLink>
                <NavLink to="/cart">
                    <div className="relative cursor-pointer hover:text-blue-500">
                        <FaShoppingCart size={24} />
                        {/* Optional: Cart count badge */}
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            0
                        </span>
                    </div>
                </NavLink>
            </div>


        </div>
    )
}

export default Navbar;

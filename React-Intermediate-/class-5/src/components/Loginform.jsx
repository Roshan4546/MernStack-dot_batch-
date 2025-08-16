import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Loginform = ({ setLoggedin }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();

        if (!formData.email || !formData.password) {
            toast.error("Please fill in all fields");
            return;
        }

        setLoggedin(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col gap-4 w-full"
        >
            {/* Email */}
            <label className="flex flex-col gap-1 text-sm text-gray-700">
                <p>
                    Email Address <sup className="text-red-500">*</sup>
                </p>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter your email"
                    name="email"
                    className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </label>

            {/* Password */}
            <label className="flex flex-col gap-1 text-sm text-gray-700 relative">
                <p>
                    Password <sup className="text-red-500">*</sup>
                </p>
                <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter your password"
                    name="password"
                    className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
                />
                {/* Toggle password */}
                <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
            </label>

            {/* Forgot password */}
            <div className="text-right">
                <Link
                    to="#"
                    className="text-xs text-indigo-600 hover:underline"
                >
                    Forgot password?
                </Link>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
            >
                Sign in
            </button>
        </form>
    );
};

export default Loginform;

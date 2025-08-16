import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signupform = ({ setLoggedin }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            toast.error("Please fill in all fields");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoggedin(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col gap-4 w-full">
            {/* Account Type */}
            <div className="flex gap-3 mb-2">
                <button
                    type="button"
                    className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-indigo-50"
                >
                    Student
                </button>
                <button
                    type="button"
                    className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-indigo-50"
                >
                    Instructor
                </button>
            </div>

            {/* First & Last Name */}
            <div className="flex gap-3">
                <label className="flex flex-col gap-1 text-sm text-gray-700 w-1/2">
                    <p>
                        First Name <sup className="text-red-500">*</sup>
                    </p>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                        placeholder="First Name"
                        required
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm text-gray-700 w-1/2">
                    <p>
                        Last Name <sup className="text-red-500">*</sup>
                    </p>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        placeholder="Last Name"
                        required
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </label>
            </div>

            {/* Email */}
            <label className="flex flex-col gap-1 text-sm text-gray-700">
                <p>
                    Email Address <sup className="text-red-500">*</sup>
                </p>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter your email"
                    required
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
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Create a Password"
                    required
                    className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
                />
                <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
            </label>

            {/* Confirm Password */}
            <label className="flex flex-col gap-1 text-sm text-gray-700">
                <p>
                    Re-enter Password <sup className="text-red-500">*</sup>
                </p>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    required
                    className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </label>

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
            >
                Create Account
            </button>
        </form>
    );
};

export default Signupform;

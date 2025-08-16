import React from "react";
import frameImg from "../assets/frame.webp";
import Signupform from "./Signupform";
import Loginform from "./Loginform";

const Template = ({ title, desc1, desc2, image, formType, setLoggedin }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6 py-10">
            {/* Left Section */}
            <div className="w-full md:w-1/2 max-w-md space-y-6">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>

                {/* Description */}
                <p className="text-gray-600">
                    <span>{desc1} </span>
                    <span className="font-semibold text-indigo-600">{desc2}</span>
                </p>

                {/* Form */}
                <div className="bg-white shadow-md rounded-2xl p-6">
                    {formType === "signup" ? (
                        <Signupform setLoggedin={setLoggedin} />
                    ) : (
                        <Loginform setLoggedin={setLoggedin} />
                    )}

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <p className="px-4 text-gray-500 text-sm">OR</p>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Google Button */}
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google logo"
                            className="w-5 h-5"
                        />
                        <p className="text-gray-700 font-medium">Sign in with Google</p>
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                {/* Frame image */}
                <img
                    src={frameImg}
                    alt="Pattern"
                    className="w-[500px] h-[450px] object-contain"
                    loading="lazy"
                />
                {/* Student image positioned inside frame */}
                <img
                    src={image}
                    alt="Students"
                    className="absolute top-6 w-[460px] h-[420px] object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default Template;

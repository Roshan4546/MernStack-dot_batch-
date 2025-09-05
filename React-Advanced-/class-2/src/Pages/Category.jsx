import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PageChange from "../components/PageChange";

function Category() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header />

            <div className="p-4">
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    ⬅ Back
                </button>

                <h2 className="text-xl font-semibold mt-4">
                    Blogs on <span className="text-green-600">#{category}</span>
                </h2>
            </div>

            {/* Pass category to Blogs */}
            <Blogs category={category} />

            <PageChange />
        </div>
    );
}

export default Category;

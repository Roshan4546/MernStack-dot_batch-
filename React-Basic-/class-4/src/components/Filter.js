import React from "react";
import "./Filter.css";

function Filter({ filterData, selectedCategory, setSelectedCategory }) {
    return (
        <div className="filter">
            {filterData.map((item) => (
                <button
                    key={item.id}
                    className={`filter-btn ${selectedCategory === item.title ? "active" : ""}`}
                    onClick={() => setSelectedCategory(item.title)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
}

export default Filter;

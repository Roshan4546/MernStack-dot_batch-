import React from "react";
import './Filter.css';
// import { apiUrl } from "../data";
function Filter({ filterData }) {
    return (
        <div className="filter">
            {filterData.map((data, id) => (
                <button key={id}>
                    {data.title}
                </button>
            ))}
        </div>
    );
}

export default Filter;

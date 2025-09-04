import React, { useState } from "react";

function AmountFilter() {
    const [selected, setSelected] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    const resetFilters = () => {
        setSelected([]);
    };

    return (
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md w-64">
            <div>
                {/* Header with Reset */}
                <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
                    <h3 className="text-lg font-semibold">Price Range</h3>
                    <button

                        className="text-sm text-amber-400 hover:text-amber-300 transition"
                    >
                        Reset
                    </button>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition">
                        <input
                            type="checkbox"
                            value="20-50"
                            checked={selected.includes("20-50")}
                            onChange={handleChange}
                            className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400"
                        />
                        ₹20 - ₹50
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition">
                        <input
                            type="checkbox"
                            value="50-100"
                            checked={selected.includes("50-100")}
                            onChange={handleChange}
                            className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400"
                        />
                        ₹50 - ₹100
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition">
                        <input
                            type="checkbox"
                            value="100-150"
                            checked={selected.includes("100-150")}
                            onChange={handleChange}
                            className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400"
                        />
                        ₹100 - ₹150
                    </label>
                </div>
            </div>
        </div>
    );
}

export default AmountFilter;

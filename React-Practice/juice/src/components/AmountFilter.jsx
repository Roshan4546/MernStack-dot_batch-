import React, { useState } from "react";

const AmountFilter = ({ FiltersData, setFilteredData }) => {
    const [selectedRanges, setSelectedRanges] = useState([]);

    // define price ranges
    const priceRanges = [
        { label: "₹20 - ₹50", min: 20, max: 50 },
        { label: "₹60 - ₹100", min: 60, max: 100 },
        { label: "₹110 - ₹150", min: 110, max: 150 },
    ];

    const handleFilter = (e, range) => {
        const { checked } = e.target;
        let updatedRanges;

        if (checked) {
            updatedRanges = [...selectedRanges, range];
        } else {
            updatedRanges = selectedRanges.filter((r) => r.label !== range.label);
        }
        setSelectedRanges(updatedRanges);

        if (updatedRanges.length > 0) {
            setFilteredData(
                FiltersData.filter((juice) =>
                    updatedRanges.some(
                        (r) => juice.price >= r.min && juice.price <= r.max
                    )
                )
            );
        } else {
            setFilteredData(FiltersData); // reset if nothing selected
        }
    };

    return (
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
                Price Range
            </h3>
            <div className="flex flex-col gap-3">
                {priceRanges.map((range) => (
                    <label
                        key={range.label}
                        className="flex items-center gap-2 cursor-pointer hover:text-amber-400 transition"
                    >
                        <input
                            type="checkbox"
                            onChange={(e) => handleFilter(e, range)}
                            className="accent-amber-400 w-4 h-4"
                        />
                        <span>{range.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default AmountFilter;

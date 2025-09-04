import React from "react";

const SizeType = ({ FiltersData, setFilteredData }) => {
    // get unique sizes
    const uniqueSize = [...new Set(FiltersData.map((s) => s.size))];

    const handleFilter = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // filter by size
            setFilteredData(FiltersData.filter((j) => j.size === value));
        } else {
            // reset to all if unchecked
            setFilteredData(FiltersData);
        }
    };

    return (
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
                Size
            </h3>
            <div className="flex flex-col gap-3">
                {uniqueSize.map((size) => (
                    <label
                        key={size}
                        className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition"
                    >
                        <input
                            type="checkbox"
                            name="size"
                            value={size}
                            onChange={handleFilter}
                            className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400"
                        />
                        {size}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SizeType;

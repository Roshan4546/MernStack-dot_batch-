import React from "react";

const TypeFilter = ({ FiltersData, setFilteredData }) => {
    // extract unique types from juices
    const uniqueTypes = [...new Set(FiltersData.map((j) => j.type))];

    const handleFilter = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // filter juices by selected type
            setFilteredData(FiltersData.filter((j) => j.type === value));
        } else {
            // if unchecked, show all
            setFilteredData(FiltersData);
        }
    };

    return (
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
                Type
            </h3>
            <div className="flex flex-col gap-3">
                {uniqueTypes.map((type) => (
                    <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer hover:text-amber-400 transition"
                    >
                        <input
                            type="checkbox"
                            value={type}
                            onChange={handleFilter}
                            className="accent-amber-400 w-4 h-4"
                        />
                        <span>{type}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default TypeFilter;

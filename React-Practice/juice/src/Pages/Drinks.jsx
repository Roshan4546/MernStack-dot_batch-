import React, { useState } from "react";
import TypeFilter from "../components/TypeFilter";
import SizeType from "../components/SizeType";
import AmountFilter from "../components/amountFilter";
import Card from "../components/Card";
import { FiltersData } from "../Data";
function Drinks() {


    const [FilterData, setFilteredData] = useState(FiltersData);

    return (
        <div className="p-8 flex gap-8 bg-gray-100 min-h-screen">

            {/* Sidebar Filters */}
            <aside className="w-64 space-y-6">
                <TypeFilter
                    FiltersData={FiltersData}
                    setFilteredData={setFilteredData} // access data from Data.
                />
                <SizeType
                    FiltersData={FiltersData}
                    setFilteredData={setFilteredData} // access data from Data.
                />
                <AmountFilter
                    FiltersData={FiltersData}
                    setFilteredData={setFilteredData} // access data from Data.
                />
            </aside>

            {/* Main Content */}
            <div className="flex-1 mt-6">
                {FilterData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {FilterData.map((juice) => (
                            <Card key={juice.id} juice={juice} />
                        ))}
                    </div>
                ) : (
                    <p className="text-red-600 text-lg font-semibold">No Drink Matches Your Filter</p>
                )}
            </div>

        </div>
    );
}

export default Drinks;

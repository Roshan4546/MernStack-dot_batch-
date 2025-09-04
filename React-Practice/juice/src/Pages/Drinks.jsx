import React from "react";
import TypeFilter from "../components/TypeFilter";
import SizeType from "../components/SizeType";
import AmountFilter from "../components/amountFilter";

function Drinks() {
    return (
        <div className="p-8 flex gap-8 bg-gray-100 min-h-screen">

            {/* Sidebar Filters */}
            <aside className="w-64 space-y-6">
                <TypeFilter />
                <SizeType />
                <AmountFilter />
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white p-6 rounded-2xl shadow-md">
                <h1 className="text-3xl font-bold text-amber-600">Our Drinks</h1>
                <p className="mt-2 text-gray-700">
                    Here are some refreshing juices for you 🍹
                </p>

                {/* Placeholder for drinks grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    
                </div>
            </main>
        </div>
    );
}

export default Drinks;

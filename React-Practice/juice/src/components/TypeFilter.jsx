import React from 'react'

function TypeFilter() {
    return (
        <div className="text-white bg-gray-900 p-6 rounded-2xl shadow-md w-64">
            {/* Title */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
                <h3 className="text-lg font-semibold">Type</h3>
                <button

                    className="text-sm text-amber-400 hover:text-amber-300 transition"
                >
                    Reset
                </button>
            </div>
            {/* Checkboxes */}
            <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2 cursor-pointer hover:text-amber-400 transition">
                    <input type="checkbox" name="check" className="accent-amber-400 w-4 h-4" />
                    <span>Fruit Juice</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:text-amber-400 transition">
                    <input type="checkbox" name="check" className="accent-amber-400 w-4 h-4" />
                    <span>Citrus Drink</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:text-amber-400 transition">
                    <input type="checkbox" name="check" className="accent-amber-400 w-4 h-4" />
                    <span>Vegetable Blend</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:text-amber-400 transition">
                    <input type="checkbox" name="check" className="accent-amber-400 w-4 h-4" />
                    <span>Natural Drink</span>
                </label>
            </div>
        </div>
    )
}

export default TypeFilter

import React from 'react'

function SizeType() {
    return (
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md w-64">
            <div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
                    <h3 className="text-lg font-semibold">Size</h3>
                    <button

                        className="text-sm text-amber-400 hover:text-amber-300 transition"
                    >
                        Reset
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition">
                        <input type="checkbox" name="size" value="250ml" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" />
                        250ml
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition">
                        <input type="checkbox" name="size" value="500ml" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" />
                        500ml
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition">
                        <input type="checkbox" name="size" value="600ml" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" />
                        600ml
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition">
                        <input type="checkbox" name="size" value="1L" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" />
                        1L
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-300 transition">
                        <input type="checkbox" name="size" value="1.5L" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" />
                        1.5L
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SizeType

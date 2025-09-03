import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function PageChange() {
    const { page, totalPages, handlePageChange } = useContext(AppContext);

    return (
        <div className="mt-6">
            <div className="flex items-center gap-4">
                {page > 1 && (
                    <button
                        className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 shadow-md"
                        onClick={() => handlePageChange(page - 1)}
                    >
                        ⬅ Previous
                    </button>
                )}

                <p className="text-gray-200 font-medium">
                    Page <span className="font-bold">{page}</span> of <span className="font-bold">{totalPages}</span>
                </p>

                {page < totalPages && (
                    <button
                        className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 shadow-md"
                        onClick={() => handlePageChange(page + 1)}
                    >
                        Next ➡
                    </button>
                )}
            </div>
        </div>
    );
}

export default PageChange;

import React from "react";

function PageChange({ onNext, onPrevious, disableNext, disablePrevious }) {
    return (
        <div className="fixed bottom-0 bg-blue-700 w-full p-4 shadow-lg">
            <div className="flex justify-between items-center">
                <button
                    onClick={onPrevious}
                    disabled={disablePrevious}
                    className={`px-4 py-2 rounded-md font-medium transition ${disablePrevious
                            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                            : "bg-white text-blue-700 hover:bg-gray-100"
                        }`}
                >
                    Previous
                </button>

                <button
                    onClick={onNext}
                    disabled={disableNext}
                    className={`px-4 py-2 rounded-md font-medium transition ${disableNext
                            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                            : "bg-white text-blue-700 hover:bg-gray-100"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default PageChange;

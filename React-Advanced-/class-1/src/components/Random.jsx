import React from "react";
import Spinner from "./Spinner";
import usegif from "../hook/usegif";

function Random() {
    const { gif, loading, fetchData } = usegif();

    return (
        <div className="w-1/2 h-[450px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 gap-4">
            <h1 className="text-xl font-bold text-gray-800">A Random GIF</h1>

            {loading && <Spinner />}

            <div className="flex items-center justify-center w-full h-[250px] bg-gray-100 rounded-lg overflow-hidden">
                {!loading && gif ? (
                    <img
                        src={gif}
                        alt="Generated GIF"
                        className="max-h-full max-w-full object-contain"
                    />
                ) : (
                    !loading && <p className="text-gray-400">No GIF yet...</p>
                )}
            </div>

            <button
                onClick={() => fetchData()}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Generate
            </button>
        </div>
    );
}

export default Random;

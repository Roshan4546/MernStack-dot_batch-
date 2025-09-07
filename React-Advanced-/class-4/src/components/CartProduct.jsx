import React from 'react';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartProduct = ({ item, itemIndex, remove }) => {
    return (
        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* Product Image */}
            <div className="w-24 h-24 flex-shrink-0 flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="object-contain h-full" />
            </div>

            {/* Product Info */}
            <div className="flex-1 flex flex-col justify-between">
                <h2 className="font-semibold text-lg line-clamp-1">{item.title}</h2>
                <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                <p className="text-gray-800 font-bold mt-2">${item.price}</p>
            </div>

            {/* Delete Button */}
            <button
                onClick={() => (
                    remove(itemIndex)
                    (toast.success("Item removed"))
                )}
                className="text-red-500 hover:text-red-700 transition-colors text-2xl p-1 rounded-full"
            >
                <MdDelete />
            </button>
        </div>
    );
};

export default CartProduct;

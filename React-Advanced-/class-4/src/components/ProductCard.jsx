import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slice/CartSlice';

const ProductCard = ({ post }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart); // get cart from Redux

    // Check if this product is already in the cart
    const isInCart = cartItems.find((item) => item.id === post.id);

    const handleCartToggle = () => {
        if (isInCart) {
            dispatch(remove(post.id));
        } else {
            dispatch(add(post));
        }
    };

    return (
        <div className="border rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition-shadow duration-300">

            {/* Product Image */}
            <div className="w-full h-48 flex justify-center items-center mb-4">
                {/* <img src={post.img} alt={post.name} className="object-contain h-full" /> */}
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-1 mb-4">
                <p className="text-lg font-semibold">{post.name}</p>
                <p className="text-gray-500 text-sm">{post.description}</p>
                <p className="text-gray-600 text-sm">Brand: {post.brand}</p>
            </div>

            {/* Product Details */}
            <div className="flex justify-between items-center text-gray-700 font-medium mb-2">
                <p>${post.price}</p>
                <p>Stock: {post.stock}</p>
            </div>

            {/* Optional Warranty */}
            {post.warranty && (
                <p className="text-gray-400 text-sm mb-2">Warranty: {post.warranty}</p>
            )}

            {/* Add/Remove Cart Button */}
            <button
                onClick={handleCartToggle}
                className={`py-2 px-4 rounded text-white font-semibold transition-colors ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
            >
                {isInCart ? 'Remove Item' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;

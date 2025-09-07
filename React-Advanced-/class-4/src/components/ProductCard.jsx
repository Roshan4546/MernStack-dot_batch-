import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({ post }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const isInCart = cartItems.find((item) => item.id === post.id);

    const handleCartToggle = () => {
        if (isInCart) {
            dispatch(remove(post.id));
            toast.success('Item removed from cart!');
        } else {
            dispatch(add(post));
            toast.success('Item added to cart!');
        }
    };

    return (
        <div className="border rounded-2xl shadow-md p-4 flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl bg-amber-50 hover:border-gray-300">

            {/* Product Image */}
            <div className="w-full h-48 flex justify-center items-center mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="object-contain h-full transition-transform duration-300 hover:scale-110" />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-1 mb-4">
                <p className="text-lg font-semibold truncate">{post.title}</p>
                <p className="text-gray-600 text-sm">Category: {post.category}</p>
            </div>

            {/* Product Details */}
            <div className="flex justify-between items-center text-gray-700 font-medium mb-4">
                <p className="text-lg font-bold">${post.price}</p>
                <p className="text-sm">⭐ {post.rating.rate}</p>
                <p className="text-sm">({post.rating.count})</p>
            </div>

            {/* Optional Warranty */}
            {post.warranty && (
                <p className="text-gray-400 text-sm mb-2">Warranty: {post.warranty}</p>
            )}

            {/* Add/Remove Cart Button */}
            <button
                onClick={handleCartToggle}
                className={`py-2 px-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 
                    ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}
                `}
            >
                {isInCart ? 'Remove Item' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;

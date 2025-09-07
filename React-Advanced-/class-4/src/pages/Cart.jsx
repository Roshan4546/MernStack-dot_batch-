import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { remove } from '../redux/slice/CartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);

    const handleRemove = (index) => {
        const itemId = cart[index].id;
        dispatch(remove(itemId));
    };

    // Calculate total amount considering quantity
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Calculate total number of items
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            {cart.length > 0 ? (
                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6">

                    {/* Left Column: Cart Products */}
                    <div className="flex-1 flex flex-col gap-4">
                        {cart.map((item, index) => (
                            <CartProduct
                                key={item.id}
                                item={item}
                                itemIndex={index}
                                remove={handleRemove} // pass the remove function
                            />
                        ))}
                    </div>

                    {/* Right Column: Cart Summary */}
                    <div className="w-full lg:w-1/3 p-6 border rounded-lg shadow-md flex flex-col gap-4 h-fit sticky top-4">
                        <p className="text-xl font-semibold">Your Cart Summary</p>
                        <p>Total number of items: {totalItems}</p>
                        <p className="text-lg font-bold">Total amount: ${totalAmount.toFixed(2)}</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                            Checkout Now
                        </button>
                    </div>

                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-4">Cart is empty!</h1>
                    <Link to={"/"}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                            Shop Now
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;

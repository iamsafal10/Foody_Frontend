import React from "react";
import { ImCross } from "react-icons/im";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import Success from "../pages/Success";
import { useNavigate } from "react-router-dom";
const Cart = ({ setShowCart }) => {
  const items = useSelector((state) => state.cart.cartItems);
  const totalItems = items.reduce((totQ, item) => totQ + item.quantity, 0);
  const totalCost = items.reduce(
    (totC, item) => totC + item.quantity * item.price,
    0
  );
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full max-w-sm h-screen bg-gray-100 p-4 flex flex-col shadow-xl overflow-hidden">
        {/* Top Section */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mr-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>

            <button className="text-2xl text-gray-500 hover:text-black transition-all">
              <ImCross
                onClick={() => setShowCart(false)}
                className="cursor-pointer text-gray-600 hover:text-red-500 transition-all duration-200 hover:scale-110"
              />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto pr-1 min-h-0">
            {" "}
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                  alt="empty cart"
                  className="w-16 h-16 opacity-80"
                />

                <h2 className="text-2xl font-bold text-gray-700 mt-4">
                  Your Cart is Empty
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                  Add delicious items to your cart 🍕
                </p>
              </div>
            ) : (
              items.map((item) => (
                <ItemCard
                  key={item.id}
                  _id={item._id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10">
          <div className="flex justify-between text-lg font-semibold text-gray-800 mb-5">
            <span>Total Items :</span>

            <span className="text-gray-800">{totalItems}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold text-gray-800 mb-5">
            <span>Total Amount :</span>

            <span className="text-green-500">₹{totalCost}</span>
          </div>

          <button
            onClick={() => {
              setShowCart(false);
              if (items.length > 0) {
                navigate("/success");
              } else {
                navigate("/");
              }
            }}
            className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl text-lg font-semibold transition-all duration-300"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

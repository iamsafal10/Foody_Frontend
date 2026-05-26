import React from "react";
import AppLogo from "../assets/diet.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/CartSlice";
const FoodCard = ({ id, desc, rating, price, title, image }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-72 bg-gray-100 p-4 rounded-2xl">
      <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300">
        {/* Food Image */}
        <div className="flex justify-center overflow-hidden">
          <img
            src={image}
            alt="food"
            className="w-40 h-32 object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mt-3">
          <h2 className="text-xl font-semibold text-gray-800">
            {title.slice(0, 10)}
          </h2>

          <p className="text-green-500 font-bold text-lg">₹{price}</p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 leading-5">
          {desc.slice(0, 50)}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>

            <span className="font-semibold text-gray-700">{rating}</span>
          </div>

          <button
            onClick={() => {
              dispatch(
                addToCart({ id, title, price, desc, image, rating, qty: 1 })
              );
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

import React from "react";
import AppLogo from "../assets/diet.png";
import { setCart } from "../slices/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { getCart } from "../../helper";
import axios from "axios";
axios.defaults.withCredentials = true;
const FoodCard = ({ id, desc, rating, price, title, image, handleToast }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const addToCart = async ({ id, title, image, price, rating, quantity }) => {
    const res = await axios.post(
      `https://foody-backend-hk2y.onrender.com/api/add-to-cart/${user._id}`,
      {
        id,
        name: title,
        image,
        price,
        rating,
        quantity,
      },
      {
        withCredentials: true,
      }
    );

    const data = await res.data;

    toast.success(data.message);

    getCart(user).then((data) => dispatch(setCart(data.cartItems)));
  };
  return (
    <div className="w-72 bg-gray-100 py-4 px-4 rounded-2xl">
      <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300">
        {/* Food Image */}
        <div className="flex justify-center tems-center h-40 overflow-hidden">
          <img
            src={image}
            alt="food"
            className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mt-3">
          <h2 className="text-xl font-semibold text-gray-800 min-h-16">
            {title}
          </h2>

          <p className="text-green-500 font-bold text-lg">₹{price}</p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 leading-5 min-h-12.5">
          {" "}
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
              !user
                ? toast.error("Please login to add to cart")
                : addToCart({ id, image, title, price, rating, quantity: 1 });
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

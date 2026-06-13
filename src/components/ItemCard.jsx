import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { incQty, decQty, removeFromCart } from "../slices/CartSlice";
import { setCart } from "../slices/CartSlice";
import toast from "react-hot-toast";
import { getCart } from "../../helper";
import axios from "axios";
axios.defaults.withCredentials = true;

const ItemCard = ({
  id,
  image,
  title,
  desc,
  rating,
  price,
  quantity,
  handleToast,
  _id,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const removeFromCart = async (id) => {
    const res = await axios.delete(
      `https://foody-backend-hk2y.onrender.com/api/remove-from-cart/${id}`,
      {
        withCredentials: true,
      }
    );

    const data = await res.data;
    toast.success(data.message);
    getCart(user).then((data) => dispatch(setCart(data.cartItems)));
  };
  const incrementQuantity = async (id) => {
    const res = await axios.put(
      `https://foody-backend-hk2y.onrender.com/api/increment-quantity/${id}`,
      {
        withCredentials: true,
      }
    );

    const data = await res.data;
    getCart(user).then((data) => dispatch(setCart(data.cartItems)));
  };
  const decrementQuantity = async (id) => {
    const res = await axios.put(
      `https://foody-backend-hk2y.onrender.com/api/decrement-quantity/${id}`,
      {
        withCredentials: true,
      }
    );

    const data = await res.data;
    getCart(user).then((data) => {
      dispatch(setCart(data.cartItems));
    });
  };
  return (
    <div>
      {/* Cart Item */}

      <div className="bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
        {/* Left */}
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt=""
            className="w-16 h-16 object-contain rounded-full bg-gray-100 p-1"
          />

          <div>
            <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
              {title}
            </h2>

            <p className="text-green-500 font-bold">₹{price}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => decrementQuantity(_id)}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
          >
            -
          </button>

          <span className="font-semibold text-gray-700">{quantity}</span>

          <button
            onClick={() => incrementQuantity(_id)}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
          >
            +
          </button>
          <button className="text-red-500 hover:text-red-700 text-xl transition-all">
            <MdDelete
              onClick={() => {
                removeFromCart(_id);
              }}
              className="text-red-500 text-2xl cursor-pointer hover:text-red-700"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

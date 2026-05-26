import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { incQty, decQty, removeFromCart } from "../slices/CartSlice";
const ItemCard = ({ id, image, title, desc, rating, price, qty }) => {
  const dispatch = useDispatch();
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
              {name}
            </h2>

            <p className="text-green-500 font-bold">₹{price}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              dispatch(
                decQty({
                  id,
                  title,
                  price,
                  desc,
                  image,
                  rating,
                  qty,
                })
              );
            }}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
          >
            -
          </button>

          <span className="font-semibold text-gray-700">{qty}</span>

          <button
            onClick={() => {
              dispatch(
                incQty({
                  id,
                  title,
                  price,
                  desc,
                  image,
                  rating,
                  qty,
                })
              );
            }}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
          >
            +
          </button>
          <button className="text-red-500 hover:text-red-700 text-xl transition-all">
            <MdDelete
              onClick={() => {
                dispatch(
                  removeFromCart({
                    id,
                    title,
                    price,
                    desc,
                    image,
                    rating,
                    qty,
                  })
                );
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

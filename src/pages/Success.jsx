import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../slices/CartSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
axios.defaults.withCredentials = true;
const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clearCart = async () => {
    const res = await axios.get(
      "https://foody-backend-hk2y.onrender.com/api/clear-cart",
      {
        withCredentials: true,
      }
    );
    console.log("cleared cart");
    const data = await res.data;
    toast.success(data.message);
  };
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-green-100 px-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-10 flex flex-col items-center text-center max-w-md"
      >
        {/* Tick Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 180,
          }}
        >
          <FaCheckCircle className="text-green-500 text-8xl drop-shadow-lg" />
        </motion.div>

        {/* Success Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-extrabold text-gray-800 mt-6"
        >
          Order Placed!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-500 text-lg mt-3"
        >
          Your delicious food is on the way 🍕
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={() => {
            // clearCart();
            // dispatch(emptyCart());
            navigate("/");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg transition-all"
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Success;

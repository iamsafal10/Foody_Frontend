import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import Foods from "../components/Foods";
import Cart from "../components/Cart";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <CategoryMenu />
      <Foods />

      {/* Cart Button */}
      {!showCart && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
        >
          <FaShoppingCart />
        </button>
      )}

      {/* Sliding Cart */}
      <div
        className={`
          fixed top-0 right-0 z-40 h-full
          transition-transform duration-300 ease-in-out
          ${showCart ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <Cart setShowCart={setShowCart} />
      </div>
    </div>
  );
};

export default Home;

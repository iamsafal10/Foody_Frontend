import React from "react";
import AppLogo from "../assets/diet.png";

const date = new Date().toUTCString().slice(0, 17);

const Navbar = () => {
  return (
    <nav className="w-full bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-3">
            <img
              src={AppLogo}
              alt="logo"
              className="w-12 h-12 object-contain rounded-xl bg-white p-1 shadow-md"
            />

            <h1 className="text-3xl font-extrabold tracking-wide bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Foody
            </h1>
          </div>

          <p className="text-sm text-slate-400 mt-1 ml-14 tracking-wide">
            {date}
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full sm:w-auto sm:ml-auto sm:mr-4">
          <input
            type="search"
            placeholder="Search delicious food..."
            autoComplete="on"
            className="
              w-full sm:w-96
              px-5 py-3
              rounded-2xl
              bg-slate-800/80
              border border-slate-700
              placeholder:text-slate-400
              text-white
              backdrop-blur-md
              outline-none
              focus:border-orange-400
              focus:ring-2 focus:ring-orange-500/40
              transition-all duration-300
            "
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

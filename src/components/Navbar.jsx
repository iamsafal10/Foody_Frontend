import React from "react";
import AppLogo from "../assets/diet.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../slices/SearchSlice";
const date = new Date().toUTCString().slice(0, 17);
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import NavList from "./Navlist";
import axios from "axios";
import { useEffect } from "react";
import { loginUser, setUser } from "../slices/AuthSlice";
axios.defaults.withCredentials = true;
const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false);
  const auth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.use);
  const getUser = async () => {
    const res = await axios.get("https://foody-backend-hk2y.onrender.com/api/get-user", {
      withCredentials: true,
    });
    const data = await res.data;
    console.log(data);
    dispatch(loginUser);
    dispatch(setUser(data.user));
  };
  useEffect(() => {
    getUser();
  }, []);
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
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
      </div>
      <GiHamburgerMenu
        className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-2xl text-gray-600 cursor-pointer ${
          toggleNav && "hidden"
        } transition-all ease-in-out duration-500`}
        onClick={() => setToggleNav(true)}
      />

      <MdClose
        className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-2xl text-gray-600 cursor-pointer ${
          !toggleNav && "hidden"
        } transition-all ease-in-out duration-500`}
        onClick={() => setToggleNav(false)}
      />
      <NavList toggleNav={toggleNav} setToggleNav={setToggleNav} auth={auth} />
    </nav>
  );
};

export default Navbar;

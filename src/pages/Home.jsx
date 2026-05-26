import React from "react";
import { useState } from "react";
import AppLogo from "../assets/diet.png";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import Foods from "../components/Foods";

const Home = () => {
  return (
    <>
      {/* <img src={AppLogo} /> */}
      <Navbar />
      <CategoryMenu />
      <Foods />
    </>
  );
};

export default Home;

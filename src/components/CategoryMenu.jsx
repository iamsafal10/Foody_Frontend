import React from "react";
const CategoryMenu = () => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-10 mt-6 sm:mt-8 mb-10">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
        Get the best food here
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4">
        <button className="px-4 sm:px-5 py-2 text-sm sm:text-base bg-slate-100 rounded-xl font-medium shadow-sm transition-all duration-200 hover:bg-green-500 hover:text-white hover:cursor-pointer hover:scale-105">
          All
        </button>

        <button className="px-4 sm:px-5 py-2 text-sm sm:text-base bg-slate-100 rounded-xl font-medium shadow-sm transition-all duration-200 hover:bg-green-500 hover:text-white hover:cursor-pointer hover:scale-105">
          Breakfast
        </button>

        <button className="px-4 sm:px-5 py-2 text-sm sm:text-base bg-slate-100 rounded-xl font-medium shadow-sm transition-all duration-200 hover:bg-green-500 hover:text-white hover:cursor-pointer hover:scale-105">
          Lunch
        </button>

        <button className="px-4 sm:px-5 py-2 text-sm sm:text-base bg-slate-100 rounded-xl font-medium shadow-sm transition-all duration-200 hover:bg-green-500 hover:text-white hover:cursor-pointer hover:scale-105">
          Dinner
        </button>

        <button className="px-4 sm:px-5 py-2 text-sm sm:text-base bg-slate-100 rounded-xl font-medium shadow-sm transition-all duration-200 hover:bg-green-500 hover:text-white hover:cursor-pointer hover:scale-105">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;

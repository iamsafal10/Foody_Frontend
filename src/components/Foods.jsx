import React from "react";
import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import FoodData from "../../data/FoodData";
import { useSelector } from "react-redux";

const Foods = () => {
  const selectedCategory = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search);

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    setFoodItems(FoodData);
  }, []);

  const handleToast = (name) => toast.success(`${name} added to cart`);

  const filteredItems = foodItems.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" || selectedCategory === item.category;

    const searchMatch =
      search === "" || item.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="foods flex flex-wrap justify-center gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              desc={item.description}
              rating={item.rating}
              image={item.image}
              handleToast={handleToast}
            />
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center mt-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
              alt="No food found"
              className="w-40 h-40 opacity-80"
            />

            <h2 className="text-3xl font-bold text-gray-700 mt-4">
              No Food Found
            </h2>

            <p className="text-gray-500 mt-2 text-lg">
              Try another search or category 🍕
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Foods;

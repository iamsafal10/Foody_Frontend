import React from "react";
import FoodCard from "./FoodCard";
import { useState, useEffect, useCallback, useRef } from "react";

const Foods = () => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFoodItems(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="foods flex flex-wrap justify-center gap-6">
      {foodItems.map((item) => (
        <FoodCard
          key={item.id}
          id={item.id}
          name={item.title}
          price={item.price}
          desc={item.description}
          rating={item.rating.rate}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Foods;

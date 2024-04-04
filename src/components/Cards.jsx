/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const Cards = ({ item }) => {
  const [isHeartFillted, setIsHeartFillted] = useState(false);
  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
          isHeartFillted ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className=" h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item.id}`}>
        <figure>
          <img src={item.image} alt="" />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item.id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>{item.recipe}</p>
        <div className="card-actions justify-end">
          <h5 className="font-semibold mr-40 mt-4">
            <span className="text-sm text-red ">$</span>
            {item.price}
          </h5>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

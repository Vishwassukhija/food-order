import React from "react";

const categoriesItem = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: "/public/Images/category/img1.png",
  },
  {
    id: 2,
    title: "Break fast",
    des: "(12 Break fast )",
    image: "/public/Images/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(48 Dessert)",
    image: "/public/Images/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(255 Item)",
    image: "/public/Images/category/img4.png",
  },
];
const Categories = () => {
  return (
    <div className="section-container py-16 ">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Categories</h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center mt-12">
        {categoriesItem.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all md:flex-col-2 sm:flex-row mt-6"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.image}
                alt=""
                className="bg-white py-6 px-5 2-72 mx-auto text-center"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
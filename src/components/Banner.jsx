import React from "react";

const Banner = () => {
  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-t from-[#ccd4cf27] FROM-0% to-[#FCFCFC] to-100%  ">
      <div className="py-24  flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug ">
            <span className="text-[#05170bb3]">
              Dive Into Delights Of Delectable{" "}
            </span>{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#170505fa]">
            Where Each Weaves a story of Culinary Mastery and Passionate
            Craftmanship
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
        {/* Images */}
        <div className="md:w-1/2">
          <img
            src="/public/Images/Banner1.png"
            alt=""
            className=" rounded-2xl w-[600px] h-[300px] py-10 "
          />
          <div
            className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4
          "
          >
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/public/Images/b-food1.png"
                alt=""
                className="rounded-2xl"
              />

              <div className="space-y-1">
                <h5 className="font-medium mb-1"> Spicy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/public/Images/b-food1.png"
                alt=""
                className="rounded-2xl"
              />

              <div className="space-y-1">
                <h5 className="font-medium mb-1"> Spicy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

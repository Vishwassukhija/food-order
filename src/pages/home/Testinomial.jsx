import React from "react";
import { FaStar } from "react-icons/fa";

const Testinomial = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className=" md:w-1/2">
          <img
            src="/public/Images/Testinomial/Testinomial3.png"
            alt=""
            className=" w[450px] h-[450px]"
          />
        </div>
        <div className=" md:w-1/2">
          <div className=" text-left md: w-4/5">
            <p className="subtitle">Testinomials</p>
            <h2 className="title">What our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              Lorem klsdjfk;lja jf dkfjl fdjdslkl fldsjfj adsfkl jladslf adslsfj
              sfdas flkadsa fkldfs dfs adskl ;adsklf;kl af a dsajflkdsad jfklasd
              fklsajlfd lkdfsfk;lds sjdjf jsa adsffj askld fdjdslkl
            </blockquote>
            <div className=" flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/public/Images/Testinomial/Testinomial 1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/public/Images/Testinomial/Testinomial 1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/public/Images/Testinomial/Testinomial 1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 bg-neutral text-neutral-content  pt-3 ps-1.5">
                    <span className="font-bold text-center">+99</span>
                  </div>
                </div>
              </div>
              <div className=" space-y-1">
                <h5 className="text-lg font-semibold">Customers Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className=" font-medium">4.9</span>
                  <span className="text-[#807E7E]">(18.6 K Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;

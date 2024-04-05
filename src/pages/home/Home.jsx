import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";
import Testinomial from "./Testinomial";
import OurServices from "./OurServices";

const Home = () => {
  return <div>
    <Banner/>
    <Categories />
    <SpecialDishes />
    <Testinomial />
    <OurServices />
  </div>;
};

export default Home;

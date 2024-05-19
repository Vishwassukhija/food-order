import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [FilteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [SortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  //loading data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/menu");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
        
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  //Filtering Data based on category
  const FilterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  //show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (Option) => {
    setSortOption(Option);
    let SortedItems = [...FilteredItems];

    //logic
    switch (Option) {
      case "A-Z":
        SortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        SortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        SortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        SortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(SortedItems);
    setCurrentPage(1);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FilteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Menu Banner*/}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-t from-[#303333] to-[#FCFCFC] ">
        <div className="py-48 flex flex-col justify-between items-center gap-8">
          <div className="items-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug ">
              <span className="text-[#171616ba]">
                For the Love of Delicious
              </span>{" "}
              <span className="text-green">Food</span>
            </h2>
            <p className="text-xl text-[#0a0101] md:w-4/5 mx-auto">
              Comes with family and joy of mouthwatering food such as Greek
              Salad, Butternut pumpkin, and more for a moderate cost
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Menu shop section */}
      <div className="section-container">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap ">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => FilterItems("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >
              Salad
            </button>
            <button
              onClick={() => FilterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => FilterItems("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => FilterItems("dessert")}
              className={selectedCategory === "desert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => FilterItems("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="w-4 h-4 text-white" />
            </div>

            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={SortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value={"default"}>Default</option>
              <option value={"A-Z"}>A-Z</option>
              <option value={"Z-A"}>Z-A</option>
              <option value={"low-to-high"}>Low-To-High</option>
              <option value={"high-to-low"}>High-To-Low</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-4 gap-8 ">
          {FilteredItems.map((item) => (
            <Cards key={item.id} item={item} className=" sm:-w-16" />
          ))}
        </div>
      </div>

      <div className="">
        {Array.from({
          length: Math.ceil(menu.length / itemsPerPage), // Calculate based on menu length
        }).map((_, index) => {
          return (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-3 px-5 py-3 mt-5 rounded-full${
                currentPage === index + 1
                  ? " bg-green text-white"
                  : " bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

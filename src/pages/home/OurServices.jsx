import React from "react";

const servicesLists = [
  {
    id: 1,
    title: "catering",
    des: "Delight your Guest with Our Flavours and presentation",
    images: "/public/Images/Services/Services1.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "No Deliver your order Properly to your Door",
    images: "/public/Images/Services/Services2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using online Ordering",
    images: "/public/Images/Services/Services3.png",
  },
  {
    id: 4,
    title: "Gift Card",
    des: "Delight your Guest with our Flavours and presentation",
    images: "/public/Images/Services/Services4.png",
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16  ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted dkjidd dsf f di f dfio dsf dsiof dsf sif klds fdsdf d dlfk
              dflk df lfd
            </p>
            <button className="btn bg-green text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        {/* Card Image */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-2 gap-8">
            {servicesLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border"
              >
                <img src={service.images} alt="" className="mx-auto" />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#90BD95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

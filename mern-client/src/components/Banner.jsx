import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <>
      <div className=" px-4 lg:px-24 bg-teal-100 flex  items-center  ">
        <div className="flex w-full flex-col md:flex-row   justify-between items-center   gap-12  py-40 ">
          {/* left side */}
          <div className=" md:w-1/2 space-y-7 h-full   ">
            <h2 className="text-5xl  font-bold  leading-snug text-black ">
              Buy and Sell Your Books <span className="text-blue-700"> for the Best Prices </span>
            </h2>
            <p className="md:w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ex, eos non sunt totam mollitia odit, earum iusto ipsum
              ut eius expedita, eveniet accusantium modi deserunt itaque nisi
              animi. Fugiat.
            </p>

            <div className="">
              <input
                type="search"
                name="search"
                id="search"
                placeholder=" search a book "
                className="py-2 px-2 rounded-s-sm  outline-none placeholder:capitalize"
              />
              <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black   rounded-s-sm   transition-all ease-in  duration-200 ">
                Search
              </button>
            </div>
          </div>
          {/* right side */}
          <div className="">
            <BannerCard/>
                </div>
        </div>
        {/* Banner */}
      </div>
    </>
  );
};

export default Banner;

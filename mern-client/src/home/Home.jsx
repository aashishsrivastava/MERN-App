import React from "react";
import Banner from "../components/Banner";
//! deleted >>> import FavoriteBooks from "./BestBookSeller";
import BestBookSeller from "./BestBookSeller";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";

const Home = () => {
  return (
    <div className="">
      <Banner />
      {/* <div className="">
        <div className="h-screen  ">Home</div>
        <div className="h-screen bg-red-600"></div>
        </div> */}
      {/* <FavoriteBooks /> */}
      {/* FavoriteBooks ka name or export function name BestBookSeller change kiya hai */}
      <BestBookSeller />
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>

    </div>
  );
};

export default Home;

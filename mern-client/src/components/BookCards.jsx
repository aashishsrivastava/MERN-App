import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
  // console.log(books);
  return (
    <>
      <div className="my-16 px-4  lg:px-24 ">
        <h2 className="text-5xl text-center font-bold text-black my-5">
          {headline}
        </h2>

        {/* cards  */}
        <div className="mt-12 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper w-full h-full"
          >
            {/* <SwiperSlide>Slide 1</SwiperSlide> */}
            {/* we will use map operation insted of manul-work */}
            {books.map((books) => (
              <SwiperSlide key={books._id}>
                {/*<SwiperSlide key={book._id}> */}
                {/*{book._id}> SwiperSlide function ke/me book ko books hi likhna pada hai video time-@-02:43:00 lekin video me book hai bs >>>> {books.map((books) => ( >>>>> me (books)=> likha hai isiliye book ki jagah books likhna pada hai */}
                {/* <Link to="/"> */}
                <Link to={`/book/${books._id}`}>
                  <div className=" relative ">
                    <img src={books.image_url} alt="" />
                    <div className=" absolute top-3 right-3  bg-blue-700 hover:bg-black h-7 p-2 rounded">
                      <FaCartShopping className="w-4 h-4 text-white " />
                    </div>
                  </div>
                  <di v>
                    <div>
                      <h3>{books.book_title}</h3>
                      <p>{books.author_name}</p>
                    </div>
                    <div>
                      <p>$10</p>
                    </div>
                  </di>
                </Link>

                {/* Slide 1 */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BookCards;

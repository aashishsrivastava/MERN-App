import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import react icons
import { FaStar } from "react-icons/fa6";

import { Avatar } from "flowbite-react";

import profile1 from "../assets/profile.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <>
      <div className="my-12  px-4 lg:px-24">
        Review
        <h2 className="text-5xl font-bold text-center mb-10  leading-snug">
          Our Customers
        </h2>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="shadow-2xl  bg-white py-8 px-4 md:m-5 rounded-lg border ">
              <div className="space-y-6 ">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border ">
              <div className="space-y-6">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border ">
              <div className="space-y-6">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border ">
              <div className="space-y-6">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border ">
              <div className="space-y-6">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border ">
              <div className="space-y-6">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border ">
              <div className="space-y-6">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border ">
              <div className="space-y-6">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border ">
              <div className="space-y-6">
                <div className="text-amber-500  flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" mt-7 ">
                  {/* text  */}
                  <p className="mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, perferendis hic! Sapiente, illo facilis laboriosam
                    quod laborum autem! Aliquam ex quis natus accusamus
                    provident quia harum ad quas cumque cum.
                  </p>
                  {/* add averter by/from https://flowbite-react.com/ */}
                  <Avatar
                    img={profile1}
                    alt="avatar of Jese"
                    rounded
                    className="mb-5"
                  />
                  <h5 className="text-lg font-medium text-center ">
                    Mark Ping{" "}
                  </h5>
                  <p className="text-base text-center">CEO - ABC Company LLP</p>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Review;

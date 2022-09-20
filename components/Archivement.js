import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Archivement = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // loopfilmdroupwithblank={true}
                speed={3000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Pagination, Navigation, Autoplay]}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}

                className="!h-[28rem] w-full relative !py-5 "
            >


                <SwiperSlide className=" relative overflow-hidden rounded-md shadow-md ">
                    {/* 
                    <div className="w-full h-full absolute bg-[#A08A58]/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center  ">
                        <div className="flex items-center  justify-center flex-col px-4 rounded-b-md bottom-0 absolute w-full  h-3/6 ">
                            <p className=" text-center block text-xl text-white font-bold tracking-wide">PropertyGuru Thailand Property Awards 2021</p>
                            <p className="block text-white text-sm ">Best Mixed-Use Development
                            </p>
                            <p className="block text-white text-sm ">Best Condo Development (Thailand)
                            </p>
                        </div>


                    </div> */}


                    <Image
                        src="/assets/10_LINE_ALBUM_Room Magazine.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top center"
                    />

                    <div className="flex items-center  justify-center flex-col px-4 rounded-b-md bottom-0 absolute w-full  h-2/6 ">
                        <p className=" text-center block text-xl text-white font-semibold tracking-wide">PropertyGuru Thailand Property Awards 2021</p>
                        <p className="block text-white text-sm ">Best Mixed-Use Development
                        </p>
                        <p className="block text-white text-sm ">Best Condo Development (Thailand)
                        </p>
                    </div>




                </SwiperSlide>

                <SwiperSlide className=" relative overflow-hidden rounded-md shadow-md ">

                    {/* <div className="w-full h-full absolute bg-[#A08A58]/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center ">
                        <div className="flex items-center  justify-center flex-col px-4 rounded-b-md bottom-0 absolute w-full  h-3/6 ">
                            <p className="block text-xl text-white font-bold tracking-wide">รางวัลสถาปัตยกรรมดีเด่น ปี 2559</p>
                            <p className="block text-white text-sm">GLASSHOUSE @ SIAM SINDHORN
                            </p>
                        </div>


                    </div> */}


                    <Image
                        src="/assets/OfficeAT-Glasshouse-34.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top center"
                    />

                    <div className="flex items-center  justify-center flex-col px-4 rounded-b-md bottom-0 absolute w-full  h-2/6 ">
                        <p className="block text-xl text-white font-semibold tracking-wide">รางวัลสถาปัตยกรรมดีเด่น ปี 2559</p>
                        <p className="block text-white text-sm">GLASSHOUSE @ SIAM SINDHORN
                        </p>
                    </div>




                </SwiperSlide>

                <SwiperSlide className=" relative overflow-hidden rounded-md shadow-md ">
                    {/* 
                    <div className="w-full h-full absolute bg-[#A08A58]/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center ">
                        <div className="flex items-center  justify-center flex-col px-4 rounded-b-md bottom-0 absolute w-full h-3/6 ">
                            <p className="block text-xl text-white font-bold tracking-wide text-center">IFLA Asia-Pacific Landscape Architecture Awards 2021</p>
                            <p className="block text-white text-sm text-center">Award of Excellence in Culture and Urban Landscape @Sindhorn Village
                            </p>

                        </div>


                    </div> */}


                    <Image
                        src="/assets/08_LINE_ALBUM_Room Magazine.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top center"
                    />

                    <div className="flex items-center  justify-center flex-col px-4 rounded-b-md bottom-0 absolute w-full h-2/6 ">
                        <p className="block text-xl text-white font-semibold tracking-wide text-center">IFLA Asia-Pacific Landscape Architecture Awards 2021</p>
                        <p className="block text-white text-sm text-center">Award of Excellence in Culture and Urban Landscape @Sindhorn Village
                        </p>

                    </div>




                </SwiperSlide>





            </Swiper>
        </>
    );
}

export default Archivement;
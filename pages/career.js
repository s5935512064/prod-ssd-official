import React, { useState, useEffect } from "react";
import Layout from "../components/Layout"
import Head from 'next/head'
import Image from "next/image";
import JobCard from "../components/JobCard";

const Career = () => {

    const [search, setNewSearch] = useState("");

    return (
        <Layout>

            <Head>
                <title>Find a Job | Siam Sindhorn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>

            <div className="h-[65vh] w-full bg-[url('/assets/group-asia.webp')] bg-cover bg-top bg-no-repeat bg-black/30 bg-blend-multiply flex justify-center items-center px-4 md:px-10 xxl:px-0 ">
                <div className="text-center gap-2 flex flex-col">
                    <h1 className="text-2xl md:text-5xl font-semibold text-white drop-shadow uppercase">Come and join with us</h1>
                    <p className="text-white text-sm">It has been quite a journey, and we have only just begun.</p>

                    <form methode="get" action="#" className="relative  my-2">
                        <button aria-label="search" type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <input type="text"
                            value={search}
                            onChange={(e) => setNewSearch(e.target.value)}
                            name="s"
                            id="s"
                            className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white/75  placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out placeholder:text-sm"
                            placeholder="Job Search e.g. Marketing, Design, IT" />
                    </form>
                </div>

            </div>

            <div className="min-h-screen w-full bg-white flex justify-center px-4 md:px-10 xxl:px-0 py-10">
                <div className="max-w-7xl h-full flex flex-col w-full gap-4">

                    <div className="w-full flex justify-between items-center">
                        <div>

                            <h1 className="text-3xl font-semibold">Job Sportlight</h1>
                            <div className="h-2 border-b-4 pt-2 border-[#A08A58] w-24" />
                        </div>

                        {/* <p>View all categories</p> */}
                    </div>

                    <div className="w-full grid grid-cols-4 gap-4">

                        <div id="jobcard" className="h-72 relative rounded drop-shadow overflow-hidden cursor-pointer">
                            <Image
                                src={"/assets/sale.jpg"}
                                alt="career"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                                className="duration-500"
                            />

                            <div className="absolute w-full h-full opacity-0 bg-[#A08A58] hover:opacity-70 duration-300 flex items-center justify-center">
                                <p className="text-white text-3xl">Sale</p>

                            </div>

                        </div>

                        <div id="jobcard" className="h-72 relative rounded drop-shadow overflow-hidden cursor-pointer">
                            <Image
                                src={"/assets/engineer.jpg"}
                                alt="career"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                                className="duration-500"
                            />

                            <div className="absolute w-full h-full opacity-0 bg-[#A08A58] hover:opacity-70 duration-300 flex items-center justify-center">
                                <p className="text-white text-3xl">Engineer</p>

                            </div>

                        </div>

                        <div id="jobcard" className="h-72 relative rounded drop-shadow overflow-hidden cursor-pointer">
                            <Image
                                src={"/assets/programmer.jpg"}
                                alt="career"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                                className="duration-500"
                            />

                            <div className="absolute w-full h-full opacity-0 bg-[#A08A58] hover:opacity-70 duration-300 flex items-center justify-center">
                                <p className="text-white text-3xl">Programmer</p>

                            </div>

                        </div>

                        <div id="jobcard" className="h-72 relative rounded drop-shadow overflow-hidden cursor-pointer">
                            <Image
                                src={"/assets/marketing.jpg"}
                                alt="career"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                                className="duration-500"
                            />

                            <div className="absolute w-full h-full opacity-0 bg-[#A08A58] hover:opacity-70 duration-300 flex items-center justify-center">
                                <p className="text-white text-3xl">Marketing</p>

                            </div>


                        </div>



                    </div>


                    <div className="my-4">

                        <h1 className="text-2xl font-semibold">ตำแหน่งงานที่เปิดรับอยู่</h1>
                        <div className="h-2 border-b-4 pt-2 border-[#A08A58] w-24" />
                    </div>

                    <div className="w-full grid grid-cols-2 gap-8 ">
                        <JobCard />
                        {/* <div className="h-40 bg-white relative rounded drop-shadow flex p-5 gap-4">
                            <button className="w-16 h-6 bg-red-600 absolute text-xs text-white rounded -translate-x-9 -translate-y-4">
                                NEW

                            </button>

                            <div className="shrink-0 w-40 h-full relative scale-90 ">
                                <Image
                                    src="/assets/ssd-logo.png"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className=" cursor-pointer"
                                />
                            </div>

                            <div className="relative flex flex-col justify-between">
                                <p className="font-medium">Digital Marketing Campaign Management & Planning Officer</p>
                                <p className="text-sm text-gray-400">Siam Sindhorn Co.,Ltd.</p>
                                <p className="text-sm text-gray-400">Floor 4 , Sindhorn Building</p>
                                <p className="text-sm text-gray-400">19/9/2022</p>

                                <button className="px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white absolute bottom-0 right-0 hover:scale-105 duration-300">APPLY NOW</button>
                            </div>

                        </div> */}

                        <div className="h-40 bg-white relative rounded drop-shadow flex p-5 gap-4">

                            <div className="shrink-0 w-40 h-full relative scale-90 ">
                                <button className="w-16 h-6 bg-red-600 absolute text-xs text-white rounded -translate-x-9 -translate-y-4">
                                    NEW

                                </button>
                                <Image
                                    src="/assets/velaa-logo.png"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className=" cursor-pointer"
                                />
                            </div>

                            <div className="relative flex flex-col justify-between">
                                <p className="font-medium">Digital Marketing Campaign Management & Planning Officer</p>
                                <p className="text-sm text-gray-400">Siam Sindhorn Co.,Ltd.</p>
                                <p className="text-sm text-gray-400">Floor 4 , Sindhorn Building</p>
                                <p className="text-sm text-gray-400">19/9/2022</p>

                                <button className="px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white absolute bottom-0 right-0 hover:scale-105 duration-300">APPLY NOW</button>
                            </div>

                        </div>
                        <div className="h-40 bg-white relative rounded drop-shadow flex p-5 gap-4">

                            <div className="shrink-0 w-40 h-full relative scale-90 ">
                                <button className="w-16 h-6 bg-red-600 absolute text-xs text-white rounded -translate-x-9 -translate-y-4">
                                    NEW

                                </button>
                                <Image
                                    src="/assets/baan-logo.png"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className=" cursor-pointer"
                                />
                            </div>

                            <div className="relative flex flex-col justify-between">
                                <p className="font-medium">Digital Marketing Campaign Management & Planning Officer</p>
                                <p className="text-sm text-gray-400">Siam Sindhorn Co.,Ltd.</p>
                                <p className="text-sm text-gray-400">Floor 4 , Sindhorn Building</p>
                                <p className="text-sm text-gray-400">19/9/2022</p>

                                <button className="px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white absolute bottom-0 right-0 hover:scale-105 duration-300">APPLY NOW</button>
                            </div>

                        </div>
                        <div className="h-40 bg-white relative rounded drop-shadow flex p-5 gap-4">

                            <div className="shrink-0 w-40 h-full relative scale-90 ">
                                <button className="w-16 h-6 bg-red-600 absolute text-xs text-white rounded -translate-x-9 -translate-y-4">
                                    NEW

                                </button>
                                <Image
                                    src="/assets/Eiffel_B.png"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className=" cursor-pointer"
                                />
                            </div>

                            <div className="relative flex flex-col justify-between">
                                <p className="font-medium">Digital Marketing Campaign Management & Planning Officer</p>
                                <p className="text-sm text-gray-400">Siam Sindhorn Co.,Ltd.</p>
                                <p className="text-sm text-gray-400">Floor 4 , Sindhorn Building</p>
                                <p className="text-sm text-gray-400">19/9/2022</p>

                                <button className="px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white absolute bottom-0 right-0 hover:scale-105 duration-300">APPLY NOW</button>
                            </div>

                        </div>

                        <div className="h-40 bg-white relative rounded drop-shadow flex p-5 gap-4 grayscale">

                            <div className="shrink-0 w-40 h-full relative scale-90 ">
                                <button className="w-16 h-6 bg-red-600 absolute text-xs text-white rounded -translate-x-9 -translate-y-4">
                                    EXPIRE

                                </button>
                                <Image
                                    src="/assets/Eiffel_B.png"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className=" cursor-pointer"
                                />
                            </div>

                            <div className="relative flex flex-col justify-between">
                                <p className="font-medium">Digital Marketing Campaign Management & Planning Officer</p>
                                <p className="text-sm text-gray-400">Siam Sindhorn Co.,Ltd.</p>
                                <p className="text-sm text-gray-400">Floor 4 , Sindhorn Building</p>
                                <p className="text-sm text-gray-400">19/9/2022</p>

                                <button className="px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white absolute bottom-0 right-0 hover:scale-105 duration-300">APPLY NOW</button>
                            </div>

                        </div>
                        <div className="h-40 bg-white relative rounded drop-shadow flex p-5 gap-4 grayscale">

                            <div className="shrink-0 w-40 h-full relative scale-90 ">
                                <button className="w-16 h-6 bg-red-600 absolute text-xs text-white rounded -translate-x-9 -translate-y-4">
                                    EXPIRE

                                </button>
                                <Image
                                    src="/assets/Eiffel_B.png"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className=" cursor-pointer"
                                />
                            </div>

                            <div className="relative flex flex-col justify-between">
                                <p className="font-medium">Digital Marketing Campaign Management & Planning Officer</p>
                                <p className="text-sm text-gray-400">Siam Sindhorn Co.,Ltd.</p>
                                <p className="text-sm text-gray-400">Floor 4 , Sindhorn Building</p>
                                <p className="text-sm text-gray-400">19/9/2022</p>

                                <button className="px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white absolute bottom-0 right-0 hover:scale-105 duration-300">APPLY NOW</button>
                            </div>

                        </div>
                    </div>

                    <div className="w-full flex justify-center my-10 ">
                        <button
                            // onClick={Loadmore}
                            className="inline-flex px-4 py-2 gap-2 load-more "
                        >
                            <svg
                                width={20}
                                height={20}
                                xmlns="http://w3.org/2000/svg"
                                viewBox="0 0 341.333 341.333"
                                fill="currentColor"
                            >
                                <path d="M341.227 149.333V0l-50.133 50.133C260.267 19.2 217.707 0 170.56 0 76.267 0 .107 76.373.107 170.667s76.16 170.667 170.453 170.667c79.467 0 146.027-54.4 164.907-128h-44.373c-17.6 49.707-64.747 85.333-120.533 85.333-70.72 0-128-57.28-128-128s57.28-128 128-128c35.307 0 66.987 14.72 90.133 37.867l-68.8 68.8h149.333z" />
                            </svg>{" "}
                            LOAD MORE
                        </button>
                    </div>



                </div>

            </div>
        </Layout>
    )
}

export default Career
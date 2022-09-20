import React from 'react'
import Layout from "../components/Layout"
import Image from 'next/image'

const Business = () => {
    return (
        <Layout>
            <div className="min-h-screen w-full flex flex-col items-center my-10 mt-20 px-4 md:px-10 xxl:px-0 gap-8">

                <div className="max-w-7xl w-full min-h-[500px] flex flex-col items-center ">

                    <div className="w-full flex justify-between items-center">
                        <div>

                            <h1 className="text-3xl font-medium uppercase text-[#A08A58]">Residence</h1>
                            <div className="h-2 border-b pt-2 border-[#A08A58] w-24" />
                        </div>

                        {/* <p>View all categories</p> */}
                    </div>

                    <div className="w-full grid grid-cols-2 h-[500px] mt-5">
                        <div className="relative w-full h-full bg-[#A08A58] p-2 py-5">
                            <div className="relative w-full h-full translate-x-10 ">
                                <Image
                                    src="/assets/10_LINE_ALBUM_Room Magazine.jpg"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top center"
                                    className=""
                                />
                            </div>

                        </div>

                        <div className="pl-24 flex flex-col justify-evenly gap-2">
                            <div className="flex flex-col gap-2">

                                <h1 className="text-3xl text-[#A08A58] font-medium uppercase">SINDHORN Kempinski </h1>
                                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque adipisci quaerat blanditiis mollitia repellat minima voluptates beatae magni aliquid ratione officia veniam in, illum sed. Ipsum nobis numquam perspiciatis mollitia ipsa exercitationem, laborum blanditiis ex laudantium atque sed tenetur.</p>

                                <button className="my-4 px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white w-fit hover:scale-105 duration-300">EXPLORE MORE</button>
                            </div>

                            <div className="flex flex-wrap gap-2">

                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 hover:scale-125 duration-300 cursor-pointer">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-13.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>

                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/baan-logo.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-05.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-07.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-09.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>

                </div>

                <div className="max-w-7xl w-full min-h-[500px] flex flex-col items-center ">

                    <div className="w-full flex justify-between items-center">
                        <div>

                            <h1 className="text-3xl font-medium uppercase text-[#A08A58]">Hotel</h1>
                            <div className="h-2 border-b pt-2 border-[#A08A58] w-24" />
                        </div>

                        {/* <p>View all categories</p> */}
                    </div>

                    <div className="w-full grid grid-cols-2 h-[500px] mt-5">


                        <div className="pr-24 flex flex-col justify-evenly gap-2">
                            <div className="flex flex-col gap-2">

                                <h1 className="text-3xl text-[#A08A58] font-medium uppercase">SINDHORN Kempinski </h1>
                                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque adipisci quaerat blanditiis mollitia repellat minima voluptates beatae magni aliquid ratione officia veniam in, illum sed. Ipsum nobis numquam perspiciatis mollitia ipsa exercitationem, laborum blanditiis ex laudantium atque sed tenetur.</p>

                                <button className="my-4 px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white w-fit hover:scale-105 duration-300">EXPLORE MORE</button>
                            </div>

                            <div className="flex flex-wrap gap-2">

                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 hover:scale-125 duration-300 cursor-pointer">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-13.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>

                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/baan-logo.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-05.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-07.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-09.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                            </div>


                        </div>

                        <div className="relative w-full h-full bg-[#A08A58] p-2 py-5">
                            <div className="relative w-full h-full -translate-x-10 ">
                                <Image
                                    src="/assets/10_LINE_ALBUM_Room Magazine.jpg"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top center"
                                    className=""
                                />
                            </div>

                        </div>

                    </div>

                </div>


                <div className="max-w-7xl w-full min-h-[500px] flex flex-col items-center ">

                    <div className="w-full grid grid-cols-2 gap-4">
                        <div>
                            <div className="w-full flex justify-between items-center">
                                <div>

                                    <h1 className="text-3xl font-medium uppercase text-[#A08A58]">Office</h1>
                                    <div className="h-2 border-b pt-2 border-[#A08A58] w-24" />
                                </div>

                                {/* <p>View all categories</p> */}
                            </div>

                            <div className="w-full grid grid-cols-1 min-h-[500px] mt-5">
                                <div className="relative w-full    py-5 h-[500px]">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/assets/10_LINE_ALBUM_Room Magazine.jpg"
                                            alt=""
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="top center"
                                            className=""
                                        />
                                    </div>

                                </div>

                                <div className="flex flex-col justify-evenly gap-2">
                                    <div className="flex flex-col gap-2">

                                        <h1 className="text-3xl text-[#A08A58] font-medium uppercase">SINDHORN Kempinski </h1>
                                        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque adipisci quaerat blanditiis mollitia repellat minima voluptates beatae magni aliquid ratione officia veniam in, illum sed. Ipsum nobis numquam perspiciatis mollitia ipsa exercitationem, laborum blanditiis ex laudantium atque sed tenetur.</p>

                                        <button className="my-4 px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white w-fit hover:scale-105 duration-300">EXPLORE MORE</button>
                                    </div>

                                    <div className="flex flex-wrap gap-2">

                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 hover:scale-125 duration-300 cursor-pointer">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/All Logo_SSD-13.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>

                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/baan-logo.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>


                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/All Logo_SSD-05.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>


                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/All Logo_SSD-07.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>


                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/All Logo_SSD-09.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>


                                    </div>


                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="w-full flex justify-between items-center">
                                <div>

                                    <h1 className="text-3xl font-medium uppercase text-[#A08A58]">Office</h1>
                                    <div className="h-2 border-b pt-2 border-[#A08A58] w-24" />
                                </div>

                                {/* <p>View all categories</p> */}
                            </div>

                            <div className="w-full grid grid-cols-1 min-h-[500px] mt-5">
                                <div className="relative w-full    py-5 h-[500px]">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/assets/10_LINE_ALBUM_Room Magazine.jpg"
                                            alt=""
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="top center"
                                            className=""
                                        />
                                    </div>

                                </div>

                                <div className="flex flex-col justify-evenly gap-2">
                                    <div className="flex flex-col gap-2">

                                        <h1 className="text-3xl text-[#A08A58] font-medium uppercase">SINDHORN Kempinski </h1>
                                        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque adipisci quaerat blanditiis mollitia repellat minima voluptates beatae magni aliquid ratione officia veniam in, illum sed. Ipsum nobis numquam perspiciatis mollitia ipsa exercitationem, laborum blanditiis ex laudantium atque sed tenetur.</p>

                                        <button className="my-4 px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white w-fit hover:scale-105 duration-300">EXPLORE MORE</button>
                                    </div>

                                    <div className="flex flex-wrap gap-2">

                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 hover:scale-125 duration-300 cursor-pointer">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/All Logo_SSD-13.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>

                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/baan-logo.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>


                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/All Logo_SSD-05.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>


                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/All Logo_SSD-07.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>


                                        <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                            <div className="w-full h-full relative">

                                                <Image
                                                    src="/assets/All Logo_SSD-09.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className=" cursor-pointer"
                                                />
                                            </div>

                                        </div>


                                    </div>


                                </div>

                            </div>
                        </div>


                    </div>


                </div>

                <div className="max-w-7xl w-full min-h-[500px] flex flex-col items-center ">

                    <div className="w-full flex justify-between items-center">
                        <div>

                            <h1 className="text-3xl font-medium uppercase text-[#A08A58]">Residence</h1>
                            <div className="h-2 border-b pt-2 border-[#A08A58] w-24" />
                        </div>

                        {/* <p>View all categories</p> */}
                    </div>

                    <div className="w-full grid grid-cols-2 h-[500px] mt-5">
                        <div className="relative w-full h-full bg-[#A08A58] p-2 py-5">
                            <div className="relative w-full h-full translate-x-10 ">
                                <Image
                                    src="/assets/10_LINE_ALBUM_Room Magazine.jpg"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top center"
                                    className=""
                                />
                            </div>

                        </div>

                        <div className="pl-24 flex flex-col justify-evenly gap-2">
                            <div className="flex flex-col gap-2">

                                <h1 className="text-3xl text-[#A08A58] font-medium uppercase">SINDHORN Kempinski </h1>
                                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque adipisci quaerat blanditiis mollitia repellat minima voluptates beatae magni aliquid ratione officia veniam in, illum sed. Ipsum nobis numquam perspiciatis mollitia ipsa exercitationem, laborum blanditiis ex laudantium atque sed tenetur.</p>

                                <button className="my-4 px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white w-fit hover:scale-105 duration-300">EXPLORE MORE</button>
                            </div>

                            <div className="flex flex-wrap gap-2">

                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 hover:scale-125 duration-300 cursor-pointer">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-13.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>

                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/baan-logo.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-05.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-07.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-09.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>

                </div>

                <div className="max-w-7xl w-full min-h-[500px] flex flex-col items-center ">

                    <div className="w-full flex justify-between items-center">
                        <div>

                            <h1 className="text-3xl font-medium uppercase text-[#A08A58]">Hotel</h1>
                            <div className="h-2 border-b pt-2 border-[#A08A58] w-24" />
                        </div>

                        {/* <p>View all categories</p> */}
                    </div>

                    <div className="w-full grid grid-cols-2 h-[500px] mt-5">


                        <div className="pr-24 flex flex-col justify-evenly gap-2">
                            <div className="flex flex-col gap-2">

                                <h1 className="text-3xl text-[#A08A58] font-medium uppercase">SINDHORN Kempinski </h1>
                                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque adipisci quaerat blanditiis mollitia repellat minima voluptates beatae magni aliquid ratione officia veniam in, illum sed. Ipsum nobis numquam perspiciatis mollitia ipsa exercitationem, laborum blanditiis ex laudantium atque sed tenetur.</p>

                                <button className="my-4 px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white w-fit hover:scale-105 duration-300">EXPLORE MORE</button>
                            </div>

                            <div className="flex flex-wrap gap-2">

                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 hover:scale-125 duration-300 cursor-pointer">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-13.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>

                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-4 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/baan-logo.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-05.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-07.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                                <div className="w-20 h-20  rounded-full shadow-md relative overflow-hidden p-2 opacity-50 hover:scale-125 duration-300 cursor-pointer hover:opacity-100">
                                    <div className="w-full h-full relative">

                                        <Image
                                            src="/assets/All Logo_SSD-09.png"
                                            alt="logo"
                                            layout="fill"
                                            objectFit="contain"
                                            className=" cursor-pointer"
                                        />
                                    </div>

                                </div>


                            </div>


                        </div>

                        <div className="relative w-full h-full bg-[#A08A58] p-2 py-5">
                            <div className="relative w-full h-full -translate-x-10 ">
                                <Image
                                    src="/assets/10_LINE_ALBUM_Room Magazine.jpg"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top center"
                                    className=""
                                />
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </Layout>
    )
}

export default Business
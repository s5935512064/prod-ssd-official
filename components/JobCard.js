import React, { useState, useEffect, useRef, Fragment } from "react";
import Image from "next/image"
import { Dialog, Transition } from '@headlessui/react'
const JobCard = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        // console.log(props);
        setIsOpen(true)
    }
    return (
        <>
            <div className="h-40 bg-white relative rounded drop-shadow flex p-5 gap-4">
                <button className="w-16 h-6 bg-red-600 absolute text-xs text-white rounded -translate-x-6 -translate-y-2">
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

                    <button onClick={openModal} className="px-3 py-2 bg-[#A08A58] rounded-3xl text-xs text-white absolute bottom-0 right-0 hover:scale-105 duration-300">APPLY NOW</button>
                </div>

            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center relative ">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <Dialog.Panel className="md:max-h-[85vh] h-full max-w-[850px] transform overflow-hidden  overflow-y-scroll rounded-2xl bg-white p-6 md:p-10  text-left align-middle shadow-xl transition-all relative scrollbar-hide">

                                    <div className="absolute  flex justify-end right-5 top-5">
                                        <button onClick={closeModal} className="z-50">
                                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
                                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                            </svg>
                                        </button>

                                    </div>

                                    <div className="w-full h-full relative">

                                        <Dialog.Title
                                            as="h3"
                                            className=" text-2xl md:text-3xl font-bold  uppercase text-center md:text-left  "
                                        >
                                            Digital Marketing Campaign Management & Planning Officer
                                        </Dialog.Title>
                                        <p className="text-sm">- January 24, 2022</p>

                                        <h1 className="mt-4">Job Summary</h1>
                                        <p className="text-sm font-light">The position is mainly responsible for design, initiate, and develop the campaign planning and execute as per planned to ensure that the campaigns work effectively.

                                        </p>

                                        <h1 className="mt-4">Job Descriptions</h1>
                                        <ul className="text-sm font-light list-disc list-outside pl-4">
                                            <li>
                                                Plan, define and develop customer journeys as part of digital marketing campaigns; including identify tracking & monitoring on key metrics on an on-going basis
                                            </li>
                                            <li>
                                                Accountable in the continuous enhancement & KPI deliverables of digital marketing campaigns and digital channels: website, application, and social media
                                            </li>
                                            <li>
                                                Plan & actively manage the digital marketing budget for given areas of responsibility. Recommend increases / decreases in spend where appropriate to take advantage of opportunities occurred
                                            </li>
                                            <li>
                                                Report regularly on the effectiveness of digital marketing activities including actionable recommendation to stakeholders and managements
                                            </li>
                                            <li>
                                                React quickly to results & formulate action plans to optimize & grow initiatives and channels where positive impact identified

                                            </li>
                                        </ul>

                                        <h1 className="mt-4">Qualifications</h1>
                                        <ul className="text-sm font-light list-disc list-outside pl-4">
                                            <li>
                                                Minimum of 3 years of direct experiences in digital marketing, campaigns automation, or digital acquisition & engagement, with minimum of 3-year experiences in supervisory role
                                            </li>
                                            <li>
                                                Experience in tech start-up or e-commerce company is preferable.
                                            </li>
                                            <li>
                                                Experience and familiar with analyzing big data and statistical models, enterprise Digital Marketing solution, Marketing Automation, or Marketing Technology would be a plus
                                            </li>
                                            <li>
                                                Good analytical, strategic thinking & planning, presenting, and interpersonal skills
                                            </li>
                                            <li>
                                                Demonstrate the effective communication over multi-departments and adaptive planning during the dynamic environment

                                            </li>
                                        </ul>

                                    </div>

                                    <form id="createVenderForm" className="max-w-7xl w-full p-2 md:p-5 ">
                                        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2  gap-2">

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="name" className="block text-sm shrink-0 text-gray-600 ">Name :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input type="text" name="name" id="name" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                </div>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="phone" className="block text-sm shrink-0 text-gray-600 ">Phone :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input type="tel" name="phone" id="phone" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                </div>
                                            </div>
                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="phone" className="block text-sm shrink-0 text-gray-600 ">Email :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input type="tel" name="phone" id="phone" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                </div>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="phone" className="block text-sm shrink-0 text-gray-600 ">Expect Salary :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input type="tel" name="phone" id="phone" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                </div>
                                            </div>


                                        </div>





                                        <div className="my-4 flex w-full justify-around gap-3 relative col-span-2">
                                            <button type="submit" className="w-fit px-6 py-2 text-white bg-[#A08A58] shadow-md rounded-lg disabled:opacity-25 text-sm">APPLY NOW</button>

                                        </div>

                                    </form>




                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>


        </>
    )
}

export default JobCard
import Navbar from "../components/Navbar";
import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll, scroller } from 'react-scroll'
import { useRouter } from "next/router";

const Privacy = () => {
    const router = useRouter();
    const { locale } = router;
    return (
        <>
            < Navbar />

            <div className="w-full h-full relative flex justify-center pt-28">

                <div className="max-w-7xl w-full h-full px-5 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                    <div className="flex-col flex gap-2 md:sticky md:top-20  h-fit  ">
                        <ul className="gap-1 flex flex-col">
                            <Link
                                activeClass="active"
                                to="unit1"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">1.</span><span className="table-cell">
                                    {locale === "en" ? "Definition" : "คำนิยาม"}
                                </span></li>
                            </Link>


                            <Link
                                activeClass="active"
                                to="unit2"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">2.</span><span className="table-cell">

                                    {locale === "en" ? "Collection of Personal Data" : "ข้อมูลส่วนบุคคลประเภทใดบ้างที่บริษัทเก็บรวบรวม"}
                                </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit3"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">3.</span><span className="table-cell">
                                    {locale === "en" ? "Collection of Personal Data" : "วิธีการเก็บรวบรวมข้อมูลส่วนบุคคล"}
                                </span></li>
                            </Link>


                            <Link
                                activeClass="active"
                                to="unit4"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">4.</span><span className="table-cell">
                                    {locale === "en" ? "Purpose of Personal Data Processing" : "วัตถุประสงค์ในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล "}
                                </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit5"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">5.</span><span className="table-cell">
                                    {locale === "en" ? "To Whom Personal Data is Disclosed" : "ผู้ที่อาจได้รับการเปิดเผยข้อมูลส่วนบุคคลของท่าน"}
                                </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit6"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">6.</span><span className="table-cell">
                                    {locale === "en" ? "Retention Period" : "ระยะเวลาในการเก็บข้อมูลส่วนบุคคล"}
                                </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit7"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">7.</span><span className="table-cell">
                                    {locale === "en" ? "Security Measures" : "มาตรการรักษาความปลอดภัยของข้อมูล"}
                                </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit7a"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">8.</span><span className="table-cell">
                                    {locale === "en" ? "Cross-Border Transfer" : "การโอนข้ามพรมแดน"}
                                </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit8"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">9.</span><span className="table-cell">
                                    {locale === "en" ? "Cookies" : "วิธีการใช้คุกกี้"}
                                </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit9"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">10.</span><span className="table-cell">
                                    {locale === "en" ? "Security Camera (CCTV)" : "กล้องวงจรปิด"}
                                </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit10"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">11.</span><span className="table-cell">
                                    {locale === "en" ? "Minor" : "ผู้เยาว์"}
                                </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit11"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">12.</span><span className="table-cell">
                                    {locale === "en" ? "Collection of Personal Data before PDPA Becomes Fully Effective" : "ข้อมูลส่วนบุคคลที่รวบรวมก่อนการมีผลบังคับใช้ของ PDPA"}
                                </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit12"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">13.</span><span className="table-cell">
                                    {locale === "en" ? "Data Subjects' Rights" : "สิทธิของเจ้าของข้อมูล"}
                                </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit13"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">14.</span><span className="table-cell">
                                    {locale === "en" ? "Exceptions to the Confidentiality of Personal Data" : "ข้อยกเว้นการดูแลรักษาข้อมูลส่วนบุคคล"}
                                </span></li>
                            </Link>


                            <Link
                                activeClass="active"
                                to="unit14"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">15.</span><span className="table-cell">
                                    {locale === "en" ? "Amendment to the Privacy Notice" : "การปรับปรุงแก้ไขรายละเอียดเกี่ยวกับนโยบายความเป็นส่วนตัว"}
                                </span></li>
                            </Link>


                            <Link
                                activeClass="active"
                                to="unit15"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">16.</span><span className="table-cell">
                                    {locale === "en" ? "Miscellaneous" : "เบ็ดเตล็ด"}
                                </span></li>
                            </Link>



                            <Link
                                activeClass="active"
                                to="unit16"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">17.</span><span className="table-cell">
                                    {locale === "en" ? "Contact Us" : "ช่องทางการติดต่อ"}
                                </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit17"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"><span className="table-cell">
                                    {locale === "en" ? "Websites and Contact Details" : "รายละเอียดเว็บไซต์ และช่องทางการติดต่อของบริษัท"}
                                </span></li>
                            </Link>

                        </ul>



                    </div>

                    <div className="md:col-span-3 w-full h-full relative  text-[#7b7c80] md:pl-5 pb-28 ">
                        <h1 className=" whitespace-pre-line font-bold text-2xl md:text-4xl  text-[#82603f] mb-5 text-center">
                            {locale === "en" ? "Privacy Notice \n Siam Sindhorn Co., Ltd., and its group companies" : "นโยบายความเป็นส่วนตัว \n ของกลุ่มบริษัท สยามสินธร จำกัดและบริษัทในเครือ"}
                        </h1>
                        <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                            {locale === "en" ? "Siam Sindhorn Co., Ltd. and its group companies including (without limitation) Sindhorn Kempin Co., Ltd.,  Sindhorn Maa-Lai Co., Ltd.,  Sindhorn Co., Ltd.,  Superior Cleaning Services Co., Ltd.,  Sindhorn Food Market Co., Ltd.,  Sindhorn Saneh Jaan Co., Ltd.,  Eiffel Cafe Co., Ltd.,  Sindhorn Management Co., Ltd.,  Sindhorn Residence Co., Ltd.,  Boriharnsubsin Co., Ltd.,  Siamsindhorn Land Co., Ltd., " : "บริษัท สยามสินธร จำกัด และบริษัทในเครือ ซึ่งรวมถึง (แต่ไม่จำกัดเพียง) บริษัท สินธร เคมปิน จำกัด บริษัท สินธร มาลัย จำกัด บริษัท สินธร จำกัด บริษัท ซูพีเรีย คลีนนิ่ง เซอร์วิสเซส จำกัด บริษัท สินธร ฟู้ด มาร์เก็ต จำกัด บริษัท สินธร เสน่ห์จันทน์ จำกัด บริษัท ไอเฟล คาเฟ่ จำกัด บริษัท สินธร แมเนจเมนท์ จำกัด บริษัท สินธร เรสซิเดนซ์ จำกัด บริษัท บริหารทรัพย์สิน จำกัด บริษัท สยามสินธร แลนด์ จำกัด "}


                            ({locale === "en" ? "collectively," : ""}
                            &quot;{locale === "en" ? "Company" : "บริษัท"}&quot;)
                            {locale === "en" ? " recognize the importance of protecting the personal data.  Therefore, Company has developed this “Privacy Notice” that covers how Company collects, uses, and discloses your personal data including how Company appropriately manages and secures the personal data. This Privacy Notice will apply to any persons who contact with the Company or those whose personal data is held by the Company which collected through both online and offline channels such as on-site visiting, browsing Company's websites, communicating on any applications, social media, or Company's employee.  Company would like to thank you for your trust and please be assured that Company commits to treat all personal data with security and confidentiality in order to provide the best service for you." : " ได้ตระหนักถึงความสำคัญของการปกป้องข้อมูลส่วนบุคคล โดยบริษัทได้จัดให้มี “นโยบายความเป็นส่วนตัว” เพื่อให้ท่านได้ทราบถึงนโยบายของบริษัทเกี่ยวกับการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล และวิธีการจัดการ รวมถึงมาตรการรักษาความปลอดภัยของข้อมูลส่วนบุคคลอย่างเหมาะสม ซึ่งนโยบายความเป็นส่วนตัวนี้จะนำไปใช้กับทุกท่านที่มีความเกี่ยวข้องกับบริษัทหรือท่านที่บริษัทครอบครองข้อมูลส่วนบุคคลอยู่ ไม่ว่าจะเป็นข้อมูลส่วนบุคคลที่ท่านได้ให้ไว้ผ่านช่องทางของบริษัท ทั้ง Offline และ Online เช่น การเยี่ยมชมโครงการ การเข้าเว็บไซต์ต่างๆ ของบริษัทและโครงการต่างๆของบริษัท แอปพลิเคชัน โซเชียลมีเดีย หรือผ่านตัวบุคคล เป็นต้น บริษัทขอขอบคุณที่ท่านให้ความไว้วางใจ และขอให้ท่านมั่นใจได้ว่า บริษัทจะดูแลข้อมูลส่วนบุคคลของท่านด้วยความระมัดระวังและอย่างเหมาะสม เพื่อมอบการบริการอย่างดีที่สุดสำหรับท่าน"}
                        </p>
                        <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                            {locale === "en" ? "This Privacy Notice applies to the website " : "นโยบายความเป็นส่วนตัวนี้ ครอบคลุมถึงเว็บไซต์ "}<a href="https://siamsindhorn.com" target="_blank" rel="noopener noreferrer" className="text-[#82603f]">https://siamsindhorn.com</a>

                            {locale === "en" ? "and other websites owned or operated by Company  and its group companies including any applications, social media, online messaging services, membership points, marketing campaign, and any other activities that collect your personal data.  However, please read this Privacy Notice in conjunction with the terms and conditions of the particular service that you use including the Privacy Policy that may be notified and published on Company's website or at the time that Company collects your personal data.  Therefore, the Company would like to inform you about our Privacy Notice as follows." : " และเว็บไซต์ต่าง ๆ ของบริษัทและโครงการในเครือ รวมถึงแอปพลิเคชัน ช่องทางสื่อสังคมออนไลน์ ช่องทางการสื่อสารออนไลน์ บริการแลกเปลี่ยนคะแนนสะสมและบัตรสมาชิก กิจกรรม ตลอดจนสถานที่อื่นๆ ที่มีการเก็บรวมรวมข้อมูลส่วนบุคคลของท่าน ทั้งนี้ กรุณาอ่านนโยบายความเป็นส่วนตัวนี้ควบคู่กับข้อตกลงและเงื่อนไขสำหรับการใช้บริการที่ท่านใช้ รวมถึงนโยบายคุ้มครองข้อมูลส่วนบุคคลที่บริษัทอาจจะแจ้งเพิ่มเติมบนเว็บไซต์ของบริษัท หรือ ณ เวลาที่บริษัทได้รวบรวมข้อมูลของท่าน และเพื่อให้ท่านได้ทราบ บริษัทขอแจ้งนโยบายความเป็นส่วนตัว ดังนี้"}

                        </p>



                        <section id="unit1">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "1.	Definition" : "1. คำนิยาม"}
                            </h1>
                            <p className=" break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2"> <span className="font-normal">
                                &quot;{locale === "en" ? "Personal Data" : "ข้อมูลส่วนบุคคล"}&quot;</span>

                                {locale === "en" ? " means any data relating to an individual which can identify such individual, directly or indirectly excluding the data of a deceased individual. There are 2 types of Personal Data which are:" : " หมายถึง ข้อมูลเกี่ยวกับบุคคล ซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ ไม่ว่าทางตรงหรือทางอ้อม แต่ไม่รวมถึงข้อมูลของผู้ถึงแก่กรรม แบ่งออกเป็น 2 ประเภท คือ"}
                            </p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">1.1</span><span className="table-cell">

                                    {locale === "en" ? "General Personal Data such as name, address, email, and identification number." : "ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล ที่อยู่ Email หมายเลขบัตรประจำตัวประชาชน เป็นต้น"}
                                </span></li>
                                <li> <span className="w-10 table-cell">1.2</span><span className="table-cell">

                                    {locale === "en" ? "Sensitive Personal Data which are personal data that requires additional protection such as race, ethnicity, political opinions, health data, disability, labor union information, religion, genetic information, and facial recognition." : "ข้อมูลส่วนบุคคลที่อ่อนไหว เช่น ข้อมูลที่ต้องได้รับการคุ้มครองเป็นพิเศษ ได้แก่ ข้อมูลส่วนบุคคลเกี่ยวกับเชื้อชาติ ความคิดเห็นทางการเมือง เผ่าพันธุ์ ข้อมูลสุขภาพ ความพิการ ข้อมูลสหภาพแรงงาน ศาสนา ข้อมูลพันธุกรรม และข้อมูลการจดจำใบหน้า เป็นต้น"}
                                </span></li>

                            </ul>

                            <p className=" break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2"> <span className="font-normal">
                                &quot;{locale === "en" ? "Cookies" : "คุกกี้ (Cookies)"}&quot;</span>

                                {locale === "en" ? " means small pieces of information or text issued from website to your computer or electronic device connected to the internet when you visit or use the website." : " หมายถึง ข้อมูลขนาดเล็กที่ได้ส่งจากเว็บไซต์ไปยังเครื่องคอมพิวเตอร์ หรืออุปกรณ์อิเล็กทรอนิกส์ที่เชื่อมต่อกับอินเตอร์เน็ต เพื่อเก็บข้อมูลส่วนบุคคล ในขณะเยี่ยมชม หรือใช้งานเว็บไซต์"}

                            </p>

                            <p className=" break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2"> <span className="font-normal">&quot;Log&quot; </span>

                                {locale === "en" ? "means a record of communication of any computer system; showing an origin, beginning, destination, routing, date, time, volume, period of time, type of services, or any other mean related to the use of computer, website, or application." : "หมายถึง ข้อมูลที่เกี่ยวกับการติดต่อสื่อสารของระบบคอมพิวเตอร์ แสดงถึงแหล่งกำเนิด ต้นทาง ปลายทาง เส้นทาง วันที่ เวลา ปริมาณ ระยะเวลา ชนิดของบริการ หรืออื่นๆ ที่เกี่ยวข้องกับการใช้งานของระบบคอมพิวเตอร์ เว็บไซต์ หรือแอปพลิเคชัน"}
                            </p>
                        </section>


                        <section id="unit2">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "2.	Collection of Personal Data" : "2. ข้อมูลส่วนบุคคลประเภทใดบ้างที่บริษัทเก็บรวบรวม"}

                            </h1>
                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">2.1</span><span className="table-cell">
                                    {locale === "en" ? "Company may, directly or indirectly, collect the Personal Data of you through the following:" : "บริษัทจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่าน ไม่ว่าจะโดยทางตรงหรือทางอ้อม ประกอบด้วย"}
                                </span></li>

                                <li> <span className="w-10 table-cell">
                                    {locale === "en" ? "(a)" : "(ก)"}
                                </span><span className="table-cell"><span className="font-normal break-all">
                                    {locale === "en" ? "Identity Data:" : "ข้อมูลส่วนตัว"}
                                </span>

                                        {locale === "en" ? " such as name; last name; gender; age; date of birth; marital status; address; occupational; office address; zip code; email; details on government-issued identification card; identification number; passport number; photo; credit card information/financial information; salary wages; vehicle and license plate data; and any other identity data that you provided to Company." : " เช่น ชื่อ นามสกุล เพศ อายุ วันเกิด สถานภาพทางการสมรส สถานที่พำนัก อาชีพ ตำแหน่งงาน สถานที่ทำงาน รหัสไปรษณีย์ อีเมล ข้อมูลบนบัตรที่ออกให้โดยรัฐ เช่น เลขบัตรประจำตัวประชาชน เลขหนังสือเดินทาง รูปถ่าย ข้อมูลบัตรเครดิต/ข้อมูลทางธนาคาร รายได้ส่วนบุคคล ข้อมูลยานพาหนะ ข้อมูลป้ายทะเบียน และข้อมูลส่วนตัวอื่นๆ ที่ท่านได้มอบให้แก่บริษัท เป็นต้น"}
                                    </span></li>

                                <li> <span className="w-10 table-cell">
                                    {locale === "en" ? "(b)" : "(ข)"}
                                </span><span className="table-cell"><span className="font-normal break-all">
                                    {locale === "en" ? "Contact Details:" : "ข้อมูลเพื่อการติดต่อ"}
                                </span>
                                        {locale === "en" ? " such as phone number; postal address; email address; Line ID; Facebook, WhatsApp, WeChat and Instagram account and any other details with the similar nature; and other contact details." : " เช่น หมายเลขโทรศัพท์ ที่อยู่ทางไปรษณีย์ อีเมล (e-mail address) ไลน์ไอดี (Line ID) WhatsApp WeChat บัญชีผู้ใช้ Facebook และ Instagram หรือแอปพลิเคชันส่งข้อความอื่นใดในลักษณะเดียวกัน และข้อมูลเพื่อการติดต่ออื่นๆ เป็นต้น"}
                                    </span></li>

                                <li> <span className="w-10 table-cell">
                                    {locale === "en" ? "(c)	" : "(ค)"}
                                </span><span className="table-cell"><span className="font-normal break-all">
                                    {locale === "en" ? "Membership Data:" : "ข้อมูลสมาชิก"}
                                </span>
                                        {locale === "en" ? " such as gender; age; nationality; date of birth; marital status; interest; preference; interested products and services; hobby; social network preference; purchase and service history; and response." : " เช่น เพศ อายุ สัญชาติ วันเกิด สถานะภาพการสมรส สิ่งที่ชอบ ความสนใจ รูปแบบผลิตภัณฑ์และการให้บริการที่สนใจ งานอดิเรก กิจกรรม Social Network ที่ใช้ประจำ ประวัติการซื้อสินค้าและบริการ และการตอบรับ เป็นต้น"}
                                    </span></li>


                                <li> <span className="w-10 table-cell">
                                    {locale === "en" ? "(d)" : "(ง)"}</span>
                                    <span className="table-cell"><span className="font-normal break-all">
                                        {locale === "en" ? "Decision Making Details:" : "ข้อมูลในการตัดสินใจ"}</span>
                                        {locale === "en" ? " such as reasons in choosing any products and services; budgeting; details of visiting any products and services." : " เช่น เหตุผลในการตัดสินใจเลือกซื้อผลิตภัณฑ์ และบริการ งบประมาณ ข้อมูลการเข้าชมผลิตภัณฑ์ และการบริการ เป็นต้น"}
                                    </span></li>

                                <li> <span className="w-10 table-cell">
                                    {locale === "en" ? "(e)" : "(จ)"}
                                </span><span className="table-cell"><span className="font-normal break-all">

                                    {locale === "en" ? "Feedback Data Provided to Company by You:" : "ข้อเสนอแนะที่ท่านให้กับบริษัท"}
                                </span>

                                        {locale === "en" ? " such as data provided through the questionnaire; data collected through conversations or surveys; data provided in order to join promotional campaigns; exhibitions or any other activities related to Company's business." : " เช่น ข้อมูลในการกรอกแบบฟอร์ม หรือข้อมูลจากการตอบคำถามระหว่างการสนทนา หรือในการทำแบบสำรวจ หรือข้อมูลเพื่อเข้าร่วมโปรโมชั่น งานแสดงสินค้า หรือกิจกรรมใดๆ ที่เกี่ยวข้องกับธุรกิจของบริษัท เป็นต้น"}

                                    </span></li>


                                <li> <span className="w-10 table-cell">

                                    {locale === "en" ? "(f)" : "(ฉ)"}

                                </span><span className="table-cell"><span className="font-normal break-all">

                                    {locale === "en" ? "Behavioral Activities on Websites and Applications: Company may use cookies as a tool to collect Personal Data" : "ข้อมูลเกี่ยวกับพฤติกรรมการสืบค้นข้อมูลในเว็บไซต์และการใช้งานแอปพลิเคชัน โดยบริษัทมีสิทธิใช้คุกกี้ (Cookies) เป็นเครื่องมือในการรวบรวมข้อมูลส่วนบุคคล"}
                                </span>

                                        {locale === "en" ? " such as IP addresses; web browser; visited web page; visiting time; websites that refers to Company's website; mobile operator; model and system of the electronic devices." : " เช่น หมายเลขไอพี (IP Address) ชนิดของเว็บเบราว์เซอร์ (Web browser) ที่ใช้ในการเข้าถึง หน้าเว็บเพจ (Web page) ที่เยี่ยมชม ระยะเวลาที่เยี่ยมชม เว็บไซต์ที่อ้างถึงเว็บของบริษัท ข้อมูลเครือข่ายโทรศัพท์ ข้อมูลรุ่นและระบบของเครื่องมืออุปกรณ์ เป็นต้น"}


                                    </span></li>

                                <li> <span className="w-10 table-cell">
                                    {locale === "en" ? "(g)" : "(ช)"}

                                </span><span className="table-cell"><span className="font-normal break-all">

                                    {locale === "en" ? "Sensitive Data:" : "ข้อมูลส่วนบุคคลที่อ่อนไหว"}

                                </span>
                                        {locale === "en" ? " such as race; religion; dietary information; political opinions; biological information; fingerprint; facial recognition; person identity information (biometrics); eye recognition; health data; weight; height; allergy; medical records; and criminal records." : " เช่น เชื้อชาติ ศาสนา ข้อมูลโภชนาการ ความคิดเห็นทางการเมือง ข้อมูลทางชีวภาพ ลายนิ้วมือ ระบบจดจำใบหน้า ข้อมูลอัตลักษณ์บุคคล (Biometrics) ใบหน้า ข้อมูลจากการจดจำม่านตา ข้อมูลสุขภาพ น้ำหนัก ส่วนสูง ประวัติอาการแพ้ ประวัติทางการแพทย์ และประวัติอาชญากรรม เป็นต้น"}
                                    </span></li>

                                <li> <span className="w-10 table-cell">
                                    {locale === "en" ? "(h)" : " (ซ)"}

                                </span><span className="table-cell"><span className="font-normal break-all">

                                    {locale === "en" ? "Financial Data:" : "ข้อมูลทางการเงิน"}

                                </span>

                                        {locale === "en" ? " such as credit or debit card details; bank account details; source of fund; property records." : " เช่น ข้อมูลบัตรเครดิตหรือบัตรเดบิต รายละเอียดบัญชีธนาคาร ข้อมูลที่มาของทุน รายการทรัพย์สิน เป็นต้น"}

                                    </span></li>

                                <li> <span className="w-10 table-cell">
                                    {locale === "en" ? "(i)" : " (ฌ)"}

                                </span><span className="table-cell"><span className="font-normal break-all">

                                    {locale === "en" ? "Employee Data:" : "ข้อมูลพนักงาน"}

                                </span>

                                        {locale === "en" ? " such as social security data; tax data; transcript record; employment record; salary rate; working performance; working time and leave." : " เช่น ข้อมูลประกันสังคม ข้อมูลภาษี ประวัติการศึกษา ประวัติการทำงาน อัตราเงินเดือน ผลการปฏิบัติงาน ข้อมูลเวลาการทำงานและการลา เป็นต้น"}

                                    </span></li>
                                <li> <span className="w-10 table-cell">

                                    {locale === "en" ? "(j)" : " (ญ)"}

                                </span><span className="table-cell"><span className="font-normal break-all">

                                    {locale === "en" ? "Security Data:" : "ข้อมูลเพื่อการรักษาความปลอดภัย"}

                                </span>
                                        {locale === "en" ? " such as security camera (CCTV); vehicle and license plate data; and entry log." : " เช่น ข้อมูลจากกล้องวงจรปิด (CCTV) ข้อมูลยานพาหนะ ข้อมูลป้ายทะเบียน และข้อมูลวันเวลาที่เข้าออกสถานที่ของบริษัท เป็นต้น"}

                                    </span></li>
                                <li> <span className="w-10 table-cell">

                                    {locale === "en" ? "(k)" : "(ฎ)"}

                                </span><span className="table-cell"><span className="font-normal break-all">

                                    {locale === "en" ? "Stakeholder Data:" : "ข้อมูลผู้มีส่วนได้ส่วนเสีย"}

                                </span>

                                        {locale === "en" ? " such as shareholding structure; details in power of attorney; share certificate details; debenture." : " เช่น ข้อมูลสัดส่วนการถือหุ้น ข้อมูลในหนังสือมอบฉันทะ ใบหุ้น หุ้นกู้ เป็นต้น"}
                                    </span></li>
                            </ul>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                                {locale === "en" ? "If you would like to use any services or product of Company or doing business with Company, Company will need the Customer' Personal Data in order to provide such services or products, enter into contract with the Customers, perform any obligations, or comply with any applicable laws.  If you do not provide the Personal Data to Company, Company will not be able to provide such products or services, enter into contract with or perform any obligations with you and it might result to a breach of a contract with Company by you, or breach of applicable laws." : "หากท่านต้องการซื้อสินค้าหรือใช้บริการใดๆ ของบริษัท ทำงานร่วมกับบริษัท หรือมีความสัมพันธ์ทางธุรกิจใดๆ กับ บริษัท บริษัทจะต้องใช้ข้อมูลส่วนบุคคลของท่าน เพื่อจำหน่ายสินค้าหรือให้บริการดังกล่าว ทำข้อตกลงกับท่าน ปฏิบัติตามภาระผูกพันใดๆ ที่มีไว้กับท่าน หรือปฏิบัติตามกฎหมายที่บังคับใช้ หากท่านไม่ให้ข้อมูลส่วนบุคคลแก่บริษัท บริษัทจะไม่สามารถจำหน่ายสินค้าหรือให้บริการดังกล่าว ทำข้อตกลงใดๆ กับท่าน ปฏิบัติตามภาระผูกพันใดๆ ที่มีไว้กับท่าน และอาจส่งผลให้มีการละเมิดสัญญาระหว่างท่านกับบริษัท หรือการละเมิดกฎหมายที่บังคับใช้"}
                            </p>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                                {locale === "en" ? "If you provide the Personal Data about other persons to Company, the Customers affirm that this Privacy Notice have been reviewed by such persons and that such persons have given their consent regarding the processing of their Personal Data (if required). You have to present the documents evidencing that the above actions have been carried out as may be requested by Company." : "หากท่านให้ข้อมูลส่วนบุคคลที่เกี่ยวกับบุคคลอื่นแก่บริษัท  ท่านให้คำรับรองว่าบุคคลดังกล่าวได้รับทราบถึงนโยบายความเป็นส่วนตัวนี้ และบุคคลดังกล่าวได้ให้ความยินยอมในการประมวลผลข้อมูลส่วนบุคคลของตน (ถ้าจำเป็น)  ทั้งนี้ ในกรณีที่บริษัทร้องขอ ท่านจะต้องสามารถแสดงเอกสารที่ยืนยันว่าได้แจ้งให้บุคคลดังกล่าวรับทราบถึงนโยบายความเป็นส่วนตัวฉบับนี้ และได้ดำเนินการขอความยินยอมดังกล่าวข้างต้น (ถ้ามี) เป็นที่เรียบร้อยแล้ว"}
                            </p>


                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">2.2</span><span className="table-cell">
                                    {locale === "en" ? "Company will only collect your Personal Data as necessary or for the purpose of collection and in accordance with the laws." : " บริษัทจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่านเท่าที่จำเป็น หรือเพื่อประโยชน์ตามวัตถุประสงค์ในการเก็บรวบรวม และเป็นไปตามที่กฎหมายกำหนดเท่านั้น"}

                                </span></li>
                                <li> <span className="w-10 table-cell">2.3</span><span className="table-cell">

                                    {locale === "en" ? "Company may collect your Personal Data by converting it to an anonymous data. In case, our websites are connected or linked to third-party advertisement, the Privacy Notice of the third-party websites will be applied, and Company is not affiliated in any way." : "บริษัทอาจเก็บข้อมูลของท่านโดยแปลงเป็นข้อมูลไม่ระบุตัวตน ในกรณีที่มีการเชื่อมต่อเว็บไซต์ หรือโฆษณาอื่นที่ไม่ใช่ของบริษัท นโยบายความเป็นส่วนตัวจะเป็นไปตามที่เว็บไซต์นั้นๆ กำหนด โดยบริษัทไม่มีส่วนเกี่ยวข้องแต่อย่างใด"} </span></li>
                            </ul>
                        </section>



                        <section id="unit3">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "3.	Collection of Personal Data" : "3. วิธีการเก็บรวบรวมข้อมูลส่วนบุคคล"}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company may collect the Personal Data through you, other sources, from Company's group company, business partners, or communications both online and offline as follows:" : "บริษัทจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่านที่บริษัทได้รับจากท่าน หรือแหล่งข้อมูลอื่นๆ หรือจากบริษัทในเครือ บริษัทย่อย พันธมิตรทางธุรกิจ หรือการสื่อสารระหว่างบริษัทเหล่านั้นกับท่าน ทั้งวิธีการ Offline และ Online เช่น"}


                            </p>



                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">3.1</span><span className="table-cell">
                                    {locale === "en" ? "Company's channels such as documents (both hard copies and electronic form), phone call, direct communication, Company's event, Company's products and services, job applications, or any other transaction with Company." : "ผ่านช่องทางของบริษัท เช่น เอกสาร ทั้งสื่อสิ่งพิมพ์และสื่ออิเล็กทรอนิกส์ ทางโทรศัพท์ ทางวาจา การเข้าร่วมกิจกรรม การซื้อสินค้าและบริการ การสมัครเข้าทำงาน หรือการเข้าทำธุรกรรมใดๆ กับบริษัท"}

                                </span></li>
                                <li> <span className="w-10 table-cell">3.2</span><span className="table-cell">

                                    {locale === "en" ? "Website or online platform such as surveys, promotional survey, subscription for promotional campaign, or inquiry. Company may collect your browsing behavior log from its websites and/or applications." : "ผ่านเว็บไซต์ หรือแพลตฟอร์มออนไลน์ เช่น การทำแบบสำรวจ การกรอกข้อมูลเพื่อรับข้อเสนอโปรโมชั่น การกดติดตามเพื่อรับข้อมูลส่งเสริมการขาย หรือติดต่อบริษัท โดยบริษัทจะมีการเก็บ log ในการใช้งานของท่านจากบนเว็บไซต์ และ/หรือ แอปพลิเคชัน"}
                                </span></li>
                                <li> <span className="w-10 table-cell">3.3</span><span className="table-cell">

                                    {locale === "en" ? "Third-party channel such as agent, supplier, other services provider, or business partner such as Facebook, WeChat, Google, Line, WhatsApp, Instagram." : "ช่องทางของบุคคลที่สาม เช่น ตัวแทน คู่ค้า หรือผู้ให้บริการอื่น หรือพันธมิตรทางธุรกิจ เช่น Facebook, WeChat, Google, Line, WhatsApp, Instagram"}
                                </span></li>
                            </ul>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company may also collect your Personal Data from other sources such as your family member or relatives, reference person, marketing agencies, recruitment agencies, corporate customers, vendors or stakeholders and other sources publicly available in offline and online databases." : "บริษัทอาจรวบรวมข้อมูลส่วนบุคคลจากแหล่งอื่นเช่นกัน เช่น จากสมาชิกในครอบครัวหรือบุคคลที่เกี่ยวข้องของท่าน บุคคลอ้างอิง บริษัทการตลาด ตัวแทนจัดหางาน ลูกค้าองค์กร ผู้ขาย หรือผู้มีส่วนได้เสีย และแหล่งข้อมูลอื่นๆ ที่เปิดเผยต่อสาธารณะในฐานข้อมูล Offline และ Online"}
                            </p>
                        </section>

                        <section id="unit4">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "4.	Purpose of Personal Data Processing" : "4. วัตถุประสงค์ในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล"}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company may collect, use, and disclose your Personal Data to the extent necessary; as required by law, for the purposes and legal basis stated hereafter, including any purposes stated in the Privacy Notice, Privacy Policy of the Company, other purposes that you gave consent to the Company from time to time, and any other purposes as permitted or required by the Personal Data Protection Act B.E. 2562 (“PDPA”) and/or applicable laws." : "  บริษัทอาจเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของท่านเท่าที่จำเป็น ตามที่กฎหมายกำหนด เพื่อวัตถุประสงค์ และพื้นฐานที่ถูกต้องตามกฎหมายที่ระบุไว้ต่อไปนี้ รวมถึงวัตถุประสงค์ใดๆ และพื้นฐานทางกฎหมายที่ระบุไว้ในนโยบายความเป็นส่วนตัว นโยบายคุ้มครองข้อมูลส่วนบุคคล วัตถุประสงค์อื่นใดที่ท่านให้ความยินยอมแก่บริษัทเป็นครั้งคราว และวัตถุประสงค์อื่นใดตามที่ได้รับอนุญาตหรือจำเป็นตาม พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (“PDPA”) และ/หรือกฎหมายที่บังคับใช้"}

                            </p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">4.1</span><span className="table-cell">

                                    {locale === "en" ? "To operate normal business of Company such as preparing a marketing plan, analyzing data and marketing, processing survey, research and development of products and services, evaluating business operation and expansion, or creating products and/or services that might interested you." : "เพื่อการดำเนินธุรกิจของบริษัท เช่น จัดทำแผนการตลาด วิเคราะห์ข้อมูลและการวิจัยตลาด ประมวลผลข้อมูลในการสำรวจความคิดเห็นของท่าน การปรับปรุงและพัฒนาสินค้าและการให้บริการ การพิจารณาการดำเนินงานและขยายธุรกิจของบริษัท หรือเพื่อเรียนรู้เกี่ยวกับสินค้าและ/หรือบริการที่ท่านอาจสนใจ"}
                                </span></li>

                                <li> <span className="w-10 table-cell">4.2</span><span className="table-cell">

                                    {locale === "en" ? "To communicate and notify any information relating to Company's project, product and service and to present projects that might interested you, including offering special promotion and marketing campaign of projects, products and services.  In case of an online booking, company may collect and use Personal Data as necessity to issue reservation documents." : "เพื่อติดต่อสื่อสาร แจ้งข้อมูลข่าวสารต่างๆ ที่เกี่ยวข้องกับโครงการ สินค้าและการบริการของบริษัท ประชาสัมพันธ์ และนำเสนอโครงการที่ท่านอาจจะสนใจ รวมถึงข้อเสนอเกี่ยวกับโครงการ สินค้าและการให้บริการ และโปรโมชั่นต่างๆ ในการส่งเสริมกิจกรรมทางการตลาด หรือกรณีมีการจองออนไลน์ (Online Booking) บริษัทจะทำการจัดเก็บและใช้ข้อมูลที่จำเป็นในการออกเอกสารสำคัญสำหรับการทำรายการจอง"}
                                </span></li>

                                <li> <span className="w-10 table-cell">4.3</span><span className="table-cell">
                                    {locale === "en" ? "To maintain relationship between Company and you such as providing a complimentary birthday gift or organizing a birthday party in accordance with your preference." : "เพื่อรักษาความสัมพันธ์ระหว่างบริษัทและท่าน เช่น การให้ของขวัญหรือจัดงานเลี้ยงวันเกิดตามความต้องการของท่าน"}
                                </span></li>

                                <li> <span className="w-10 table-cell">4.4</span><span className="table-cell">
                                    {locale === "en" ? "To conduct targeted and/or direct marketing such as to offer sales, updates and promotions of products and services pursuant to your preference and lifestyle, including the events that you might be interested in attending." : "เพื่อดำเนินการตามเป้าหมายและ/หรือการตลาดทางตรง เช่น เพื่อเสนอขาย อัปเดต และส่งเสริมการขายสินค้าและบริการตามความชอบและไลฟ์สไตล์ของท่าน รวมถึงงานกิจกรรมที่ท่านอาจสนใจเข้าร่วม"}
                                </span></li>

                                <li><span className="w-10 table-cell">4.5</span><span className="table-cell">

                                    {locale === "en" ? "To take photos or video footages of you at sale galleries and publish or advertise such photos or video footages on Company's website and applications or other platforms." : "เพื่อถ่ายภาพหรือวิดีโอของท่านใน Sales Gallery และเผยแพร่หรือโฆษณาภาพและ/หรือวิดีโอดังกล่าวบนเว็บไซต์และแอปพลิเคชันของบริษัทหรือแพลตฟอร์มอื่นๆ"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.6</span><span className="table-cell">

                                    {locale === "en" ? "To provide meals and/or other facilities pursuant to your food allergy or religion." : "เพื่อจัดหาอาหารและ/หรือสิ่งอำนวยความสะดวกอื่นๆ อันเนื่องมาจากข้อมูลการแพ้อาหารหรือศาสนาของท่าน"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.7</span><span className="table-cell">

                                    {locale === "en" ? "To evaluate the suitability of you for the position considering your Sensitive Data such as criminal record and health data." : "เพื่อประเมินความเหมาะสมของท่านในการเข้าทำงานกับบริษัท โดยพิจารณาจากข้อมูลที่ละเอียดอ่อน เช่น ประวัติอาชญากรรมและข้อมูลด้านสุขภาพ เป็นต้น"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.8</span><span className="table-cell">

                                    {locale === "en" ? "To collect your Sensitive Data as necessary such as your identification card (which contains your religion and/or blood type) for verification of your identity before continuing the transaction." : "เพื่อรวบรวมข้อมูลส่วนบุคคลที่ละเอียดอ่อนของคุณตามความจำเป็น เช่น บัตรประจำตัวของคุณ (ซึ่งมีศาสนาและ/หรือกรุ๊ปเลือด) เพื่อยืนยันตัวตนของท่านก่อนทำธุรกรรมต่อไป"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.9</span><span className="table-cell">

                                    {locale === "en" ? "To comply with legal requirements such as Personal Data Protection Act B.E. 2562 (“PDPA”), Revenue Code, Public Limited Companies Act B.E. 2535, Securities and Exchange Act B.E. 2535, Social Security Act B.E. 2533, Hotel Act B.E. 2547, Accounting Act B.E. 2543, Computer-Related Crime Act B.E. 2550, and Immigration Act B.E. 2522" : "เพื่อให้เป็นไปตามข้อกำหนดของกฎหมาย เช่น PDPA ประมวลกฎหมายแพ่งและพาณิชย์ ประมวลรัษฎากร พระราชบัญญัติบริษัทมหาชนจำกัด พ.ศ. 2535 และพระราชบัญญัติหลักทรัพย์และตลาดหลักทรัพย์ พ.ศ. 2535 พระราชบัญญัติคุ้มครองแรงงาน พ.ศ. 2541 พระราชบัญญัติประกันสังคม พ.ศ. 2533 พระราชบัญญัติโรงแรม พ.ศ. 2547 พระราชบัญญัติการบัญชี พ.ศ. 2543 พระราชบัญญัติว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ พ.ศ. 2550 และพระราชบัญญัติคนเข้าเมือง พ.ศ. 2522 เป็นต้น"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.10</span> <span className="table-cell">

                                    {locale === "en" ? "To comply with court orders and/or order from governmental authorities." : "เพื่อปฏิบัติตามคำสั่งศาลและ/หรือคำสั่งของทางราชการ"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.11</span> <span className="table-cell">

                                    {locale === "en" ? "To conduct financial audit of Company and its group companies as required by law." : "เพื่อการตรวจสอบทางการเงินของบริษัทและบริษัทในเครือ ตามที่กฎหมายกำหนด"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.12</span> <span className="table-cell">

                                    {locale === "en" ? "To review, evaluate and asses you (as a candidate) for the positions with Company, including to communicate with and interview them such as employee and salesperson." : "เพื่อตรวจสอบและประเมินความรู้ความสามารถของท่าน ซึ่งอาจเป็นผู้ได้รับคัดเลือกเข้าทำงานกับบริษัท รวมถึงเพื่อการติดต่อสื่อสารและการสัมภาษณ์ เช่น พนักงานทั่วไปของบริษัท และพนักงานฝ่ายขาย เป็นต้น"}

                                </span></li>
                                <li><span className="w-10 table-cell">4.13</span> <span className="table-cell">

                                    {locale === "en" ? "To enter into a contract and fulfil the obligations and requirements under such contract." : "เพื่อการเข้าทำข้อตกลงใดๆ และปฏิบัติตามหน้าที่และภาระผูกพันตามข้อตกลงนั้น"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.14</span> <span className="table-cell">

                                    {locale === "en" ? "To offer products and services, research and development of both existing and future projects and services of Company, including customer relationship after such sales and services." : "เพื่อการจำหน่ายสินค้าและการให้บริการ การปรับปรุงและพัฒนาโครงการและการให้บริการของบริษัท ทั้งในปัจจุบันและที่จะมีขึ้นในอนาคต รวมถึงการให้บริการลูกค้าสัมพันธ์หลังการจำหน่ายสินค้าและการให้บริการดังกล่าว"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.15</span> <span className="table-cell">
                                    {locale === "en" ? "To provide personalized products and services" : "เพื่อเสนอจำหน่ายสินค้าและการให้บริการแบบเฉพาะเจาะจงกับความต้องการของท่าน"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.16</span> <span className="table-cell">

                                    {locale === "en" ? "To process your payments, refund, and issue invoices and receipts." : "เพื่อทำหรือดำเนินการชำระเงิน คืนเงิน หรือออกใบแจ้งหนี้และใบเสร็จรับเงิน"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.17</span> <span className="table-cell">
                                    {locale === "en" ? "To response your request regarding projects which you are interested to acquire." : "เพื่อตอบสนองต่อคำขอของท่านเกี่ยวกับข้อมูลโครงการของบริษัทที่ท่านสนใจ"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.18</span> <span className="table-cell">
                                    {locale === "en" ? "To administer and protect Company's business security" : "เพื่อบริหารจัดการและรักษาความปลอดภัยของธุรกิจของบริษัท"}</span></li>
                                <li><span className="w-10 table-cell">4.19</span> <span className="table-cell ">
                                    {locale === "en" ? "To authenticate and verify in order to proceed your request including to proceed any transaction related to projects, or products and services." : "เพื่อตรวจสอบความถูกต้องและยืนยันตัวตน เพื่อดำเนินการตามความประสงค์ของท่านที่ได้แจ้งไว้กับบริษัท รวมถึงดำเนินธุรกรรมต่างๆ ที่เกี่ยวข้องกับโครงการ หรือสินค้าและบริการของบริษัท"}

                                </span></li>
                                <li><span className="w-10 table-cell">4.20</span> <span className="table-cell">
                                    {locale === "en" ? "To prevent any loss, crime, fraud, or any unlawful act." : "เพื่อป้องกันการสูญเสีย อาชญากรรม การฉ้อฉล หรือการกระทำที่ผิดกฎหมายใดๆ"} </span></li>
                                <li><span className="w-10 table-cell">4.21</span> <span className="table-cell">

                                    {locale === "en" ? "To conduct an investigation of anti-money laundering and transaction failure." : "เพื่อดำเนินการสอบสวนการต่อต้านการฟอกเงินและความล้มเหลวในการทำธุรกรรม"}</span></li>
                                <li><span className="w-10 table-cell">4.22</span> <span className="table-cell">
                                    {locale === "en" ? "To conduct internal audit of business." : "เพื่อดำเนินการตรวจสอบภายในของธุรกิจ"}</span></li>
                                <li><span className="w-10 table-cell">4.23</span> <span className="table-cell">
                                    {locale === "en" ? "To proceed with debt collections." : "เพื่อดำเนินการทวงถามหนี้"}</span></li>
                                <li><span className="w-10 table-cell">4.24</span> <span className="table-cell">

                                    {locale === "en" ? "To administer and solve technical problem on the Company's websites and applications and to improve Company's business." : "เพื่อบริหารจัดการและแก้ไขปัญหาทางเทคนิคบนเว็บไซต์และแอปพลิเคชันของบริษัท และเพื่อปรับปรุงธุรกิจบริษัท"}</span></li>
                                <li><span className="w-10 table-cell">4.25</span> <span className="table-cell">

                                    {locale === "en" ? "To connect data between Company and its group companies for ordinary business operation." : "เพื่อเชื่อมโยงข้อมูลระหว่างบริษัทและบริษัทในเครือในการดำเนินธุรกิจตามปกติ"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.26</span> <span className="table-cell">

                                    {locale === "en" ? "To allow advisors, service providers, vendors, suppliers, contractors, sub-contractors to provide and supply Company with services and products." : "เพื่อให้ที่ปรึกษา ผู้ให้บริการ คู่ค้า ซัพพลายเออร์ ผู้รับเหมา ผู้รับเหมาช่วง สามารถจัดหาสินค้าและบริการให้กับบริษัท"} </span></li>
                                <li><span className="w-10 table-cell">4.27</span> <span className="table-cell">

                                    {locale === "en" ? "To conduct, manage, and improve business operation and provide a good corporate governance." : "ดำเนินการ บริหารจัดการ และปรับปรุงการดำเนินธุรกิจตามปกติ และจัดให้มีการบริหารจัดการเพื่อการกำกับดูแลกิจการที่ดี"}</span></li>
                                <li><span className="w-10 table-cell">4.28</span> <span className="table-cell">

                                    {locale === "en" ? "To search and evaluate performance of director, employee, salesperson or any other person joining with Company." : "เพื่อสรรหาและประเมินศักยภาพของกรรมการ พนักงานทั่วไป พนักงานขาย หรือบุคคลอื่นๆ เพื่อร่วมงานกับบริษัท"}</span></li>
                                <li><span className="w-10 table-cell">4.29</span> <span className="table-cell">
                                    {locale === "en" ? "To offer existing and future job positions." : "เพื่อการสรรหาตำแหน่งงานที่ว่างในปัจจุบันและอนาคต"} </span></li>
                                <li><span className="w-10 table-cell">4.30</span> <span className="table-cell">

                                    {locale === "en" ? "To communicate with reference person which you have provided to Company such as former employer for background check before entering into employment agreement." : "เพื่อสื่อสารกับข้อมูลอ้างอิงที่ท่านให้ไว้กับบริษัท เช่น อดีตนายจ้าง เพื่อตรวจสอบประวัติก่อนทำข้อตกลงการจ้างงานใดๆ กับบริษัท"}</span></li>
                                <li><span className="w-10 table-cell">4.31</span> <span className="table-cell">

                                    {locale === "en" ? "To contact your related person for any emergency case." : "เพื่อติดต่อบุคคลที่เกี่ยวข้องในกรณีฉุกเฉิน"}
                                </span></li>
                                <li><span className="w-10 table-cell">4.32</span> <span className="table-cell">

                                    {locale === "en" ? "To enter into contract or communicate with corporate clients, supplier or any stakeholders by communicating through director or employee." : "เข้าทำสัญญาหรือสื่อสารกับลูกค้าองค์กร คู่ค้า หรือผู้มีส่วนได้เสียโดยการผ่านตัวแทน เช่น กรรมการหรือพนักงาน เป็นต้น"} </span></li>
                                <li><span className="w-10 table-cell">4.33</span> <span className="table-cell">

                                    {locale === "en" ? "To take photos or video footages of you at any events launching by Company and publish or advertise such photos or video footages on Company's website and applications or other platforms." : "เพื่อถ่ายภาพหรือวิดีโอของท่านสำหรับกิจกรรมใดๆ ที่จัดขึ้นโดยบริษัท และเผยแพร่ หรือโฆษณาภาพหรือวิดีโอดังกล่าวบนเว็บไซต์และแอปพลิเคชันของบริษัทหรือแพลตฟอร์มอื่นๆ"}</span></li>
                                <li><span className="w-10 table-cell">4.34</span> <span className="table-cell">
                                    {locale === "en" ? "To share your Personal Data for the purpose of merger and acquisition, business reorganization, insolvency, rehabilitation and similar proceedings of Company." : "เพื่อแบ่งปันข้อมูลส่วนบุคคลของท่านตามความจำเป็นเพื่อวัตถุประสงค์ในการควบรวมกิจการ การปรับโครงสร้างองค์กรธุรกิจ การล้มละลาย การฟื้นฟู และการดำเนินการที่คล้ายคลึงกันบริษัท"}</span></li>
                                <li><span className="w-10 table-cell">4.35</span> <span className="table-cell">

                                    {locale === "en" ? "To evaluate any risks arising from an investment." : "เพื่อประเมินความเสี่ยงที่อาจเกิดขึ้นจากการลงทุน"}</span></li>
                                <li><span className="w-10 table-cell">4.36</span> <span className="table-cell">
                                    {locale === "en" ? "To collect Personal Data of the witness in agreements." : "เพื่อรวบรวมข้อมูลส่วนบุคคลของพยานเพื่อเป็นหลักฐานในสัญญา"} </span></li>
                                <li><span className="w-10 table-cell">4.37</span> <span className="table-cell">

                                    {locale === "en" ? "To prepare documents relating to historical or archive for public interest or statistic research." : "เพื่อจัดเตรียมเอกสารทางประวัติศาสตร์หรือจดหมายเหตุเพื่อประโยชน์สาธารณะหรือเพื่อวัตถุประสงค์ที่เกี่ยวข้องกับการวิจัยหรือสถิติ"}</span></li>
                                <li><span className="w-10 table-cell">4.38</span> <span className="table-cell">

                                    {locale === "en" ? "To prevent or suspend a danger to life, body, or health of a person." : "เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล"} </span></li>
                                <li><span className="w-10 table-cell">4.39</span> <span className="table-cell">

                                    {locale === "en" ? "To proceed public work or as a result of the exercise of official authority." : "เพื่อดำเนินงานสาธารณะหรือเป็นผลมาจากการใช้อำนาจหน้าที่ของทางการ"}

                                </span></li>

                            </ul>
                        </section>


                        <section id="unit5">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "5.	To Whom Personal Data is Disclosed" : "5. ผู้ที่อาจได้รับการเปิดเผยข้อมูลส่วนบุคคลของท่าน"}
                            </h1>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">5.1</span><span className="table-cell">
                                    {locale === "en" ? "Within group companies." : "บริษัทในเครือ"}
                                </span></li>

                                <li> <span className="w-10 table-cell">5.2</span><span className="table-cell">

                                    {locale === "en" ? "Company and its group companies' employee." : "พนักงานของบริษัท และบริษัทในเครือ"}
                                </span></li>

                                <li> <span className="w-10 table-cell">5.3</span><span className="table-cell">
                                    {locale === "en" ? "Stakeholder of the Company." : "ผู้มีส่วนได้เสียของบริษัท"}
                                </span></li>

                                <li> <span className="w-10 table-cell">5.4</span><span className="table-cell">

                                    {locale === "en" ? "Agents, agencies, contractor, service providers who provide any services to Company and required to use necessary Personal Data, advisors such as lawyer, auditors, or business advisor." : "ตัวแทน นายหน้า ผู้รับเหมา ผู้ให้บริการ คู่สัญญาของบริษัทที่มีหน้าที่ดำเนินการให้บริการใดที่จำเป็นต่อการใช้ข้อมูลส่วนบุคคล ที่ปรึกษาด้านต่างๆ เช่น ผู้ให้คำปรึกษาด้านกฎหมาย ผู้สอบบัญชี ที่ปรึกษาการทางธุรกิจ"}
                                </span></li>

                                <li><span className="w-10 table-cell">5.5</span><span className="table-cell">
                                    {locale === "en" ? "Financial Institution, third-party credit facilities institution." : "สถาบันการเงิน องค์กรด้านสินเชื่อที่เป็นกลุ่มบุคคลภายนอก"}
                                </span></li>
                                <li><span className="w-10 table-cell">5.6</span><span className="table-cell">

                                    {locale === "en" ? "Governmental authority or administrative agency or any person which Company has to disclose Personal Data under any laws, regulations, or order related to the Company or under any agreements that the Company has made with government agencies or any other persons." : "หน่วยงานภาครัฐ หรือหน่วยงานกำกับดูแล หรือบุคคลใดที่บริษัทต้องเปิดเผยข้อมูลภายใต้กฎหมาย ระเบียบ คำสั่งที่เกี่ยวข้องกับบริษัท หรือตามข้อตกลงที่บริษัทมีต่อหน่วยงานภาครัฐ หรือบุคคลอื่นใด"}
                                </span></li>

                            </ul>
                        </section>



                        <section id="unit6">

                            <h1 className="text-lg  mb-2">

                                {locale === "en" ? "6.	Retention Period" : "6. ระยะเวลาในการเก็บข้อมูลส่วนบุคคล"}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                                {locale === "en" ? "Company will retain your Personal Data for no longer than necessary and within 10 years following the termination of contractual relationship between Company and you. Nevertheless, Company may continue to retain the Personal Data as long as: \n(a) It is permitted by the PDPA and/or any applicable laws;\n(b) Company is under certain contracts with you;\n(c) Company is under legal obligation to retain the Personal Data;\n(d) The consent granted to Company has not been revoked; or \n(e) It is deemed necessary to complete the objectives of this Privacy Notice and Privacy Policy (if any)." : "บริษัทจะเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้ไม่เกิน 10 ปี หลังจากการติดต่อครั้งสุดท้ายหรือการสิ้นสุดของสัญญาระหว่างบริษัทกับท่าน อย่างไรก็ตาม บริษัทอาจยังคงเก็บรักษาข้อมูลส่วนบุคคลของท่านตราบเท่าที่:\n (ก) ได้รับอนุญาตจาก PDPA และ/หรือกฎหมายที่บังคับใช้ \n(ข) บริษัทอยู่ภายใต้ข้อตกลงบางประการกับท่าน \n(ค) บริษัทอยู่ภายใต้ภาระผูกพันทางกฎหมายเกี่ยวกับการเก็บรักษาข้อมูลส่วนบุคคล \n(ง) ความยินยอมที่ท่านให้ไว้กับบริษัทยังไม่ถูกเพิกถอน หรือ\n(จ) เพื่อให้เป็นไปตามวัตถุประสงค์ของนโยบายความเป็นส่วนตัวนี้และนโยบายข้อมูลส่วนบุคคล (ถ้ามี)"}
                            </p>
                        </section>


                        <section id="unit7">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "7.	Security Measures" : "7. มาตรการรักษาความปลอดภัยของข้อมูล"}

                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company is associated with you for some purposes. Therefore, Company has collected your Personal Data. In addition, Company ensures that its employees and its business operations shall comply with this Privacy Notice, Privacy Policy (if any), PDPA, and other applicable laws for the purpose of privacy and security, and shall avoid unauthorized or unlawful action for the purpose of preventing violation of the laws and reducing the risks that may be arisen from the punishment as prescribed in the PDPA and applicable laws." : "บริษัทได้มีความเกี่ยวข้องกับท่านเพื่อวัตถุประสงค์หลายประการ ดังนั้น บริษัทจึงได้มีการเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้ นอกจากนี้ บริษัทรับรองว่าบุคลากร การดำเนินธุรกิจ และการปฏิบัติงานของบริษัท จะต้องปฏิบัติตามนโยบายความเป็นส่วนตัว นโยบายคุ้มครองข้อมูลส่วนบุคคล (ถ้ามี)  PDPA และกฎหมายที่เกี่ยวข้องอื่นๆ เพื่อปกป้องความเป็นส่วนตัวและความปลอดภัยของท่าน รวมถึงเพื่อหลีกเลี่ยงการกระทำที่ไม่ได้รับอนุญาตหรือผิดกฎหมาย เพื่อป้องกันการละเมิดกฎหมาย และเพื่อลดความเสี่ยงที่อาจเกิดขึ้นจากการลงโทษที่กำหนดโดย PDPA และกฎหมายที่บังคับใช้"}

                            </p>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company recognizes the importance of security of your Personal Data.  Thus, Company has prepared a data storage system, policies, and security measures of your Personal Data that are appropriate and standardized." : "ทั้งนี้ บริษัทตระหนักถึงความสำคัญของการรักษาความปลอดภัยของข้อมูลส่วนบุคคลของท่าน  ดังนั้น บริษัทได้จัดเตรียมระบบเก็บฐานข้อมูล นโยบาย และมาตรการรักษาความปลอดภัยของข้อมูลส่วนบุคคลของท่านอย่างเหมาะสมและได้มาตรฐาน"}
                            </p>
                        </section>




                        <section id="unit7a">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "8.	Cross-Border Transfer" : "8. การโอนข้ามพรมแดน"}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Because of the nature of the hospitality business, the Company may disclose or transfer Personal Data to Company's counterparties located overseas, in which the destination countries may or may not have the same equivalent level of protection for Personal Data protection standards. The Company takes steps and measures to ensure that the Personal Data is securely transferred and that the receiving parties have in place an appropriate level of protection standards or omissions as allowed or required by PDPA and other applicable laws." : " เนื่องจากลักษณะทางธุรกิจของอุตสาหกรรมบริการต้อนรับในปัจจุบัน บริษัทอาจเปิดเผยหรือถ่ายโอนข้อมูลส่วนบุคคลที่เกี่ยวข้องกับเจ้าของข้อมูลส่วนบุคคลไปยังคู่สัญญาในต่างประเทศ ซึ่งประเทศปลายทางอาจมีหรือไม่มีการปกป้องข้อมูลส่วนบุคคลในระดับเดียวกับมาตรฐาน ในทุกกรณี บริษัทดำเนินการตามขั้นตอนและมาตรการเพื่อให้แน่ใจว่าข้อมูลส่วนบุคคลได้รับการถ่ายโอนอย่างปลอดภัย ผู้รับข้อมูลมีระดับมาตรฐานการป้องกันที่เหมาะสม หรือการละเว้นตามที่กำหนดหรืออนุญาตโดย PDPA และกฎหมายอื่นที่ใช้บังคับ"}

                            </p>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "In case where the destination countries do not have the appropriate level of protection for Personal Data, the Company will ensure that such transfer is made with an appropriate level of protection as required by PDPA and other applicable laws." : "ในกรณีที่ประเทศปลายทางไม่มีมาตรฐานการปกป้องข้อมูลในระดับที่เพียงพอ บริษัทจะดำเนินการให้แน่ใจว่าการถ่ายโอนข้อมูลส่วนบุคคลของคุณจะเป็นไปตาม PDPA และกฎหมายอื่นที่ใช้บังคับ"}
                            </p>
                        </section>



                        <section id="unit8">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "9.	Cookies" : "9. วิธีการใช้คุกกี้ "}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company may collect and use cookies including any other technology in similar nature when you are visiting websites, applications or using any services of Company for the purpose of identifying and differentiating users who visits Company's websites and applications and tracking of personal preferences. Your Personal Data will be automatically collected through cookies. Cookies do not cause any harmful effects to your computer or sending any virus." : "บริษัทอาจเก็บรวบรวม และใช้คุกกี้ รวมถึงเทคโนโลยีในลักษณะเดียวกัน เมื่อท่านเข้าเยี่ยมชมเว็บไซต์ แอปพลิเคชัน หรือใช้บริการของบริษัท ซึ่งนำมาใช้เพื่อระบุและแยกแยะผู้ใช้ที่เข้าชมเว็บไซต์และแอปพลิเคชันของบริษัท และติดตามการตั้งค่าส่วนบุคคล ซึ่งข้อมูลของท่านจะถูกเก็บรวบรวมโดยอัตโนมัติโดยคุกกี้ คุกกี้เหล่านี้ไม่ก่อให้เกิดผลร้ายใดๆ ต่อคอมพิวเตอร์หรือส่งไวรัสใดๆ"}
                            </p>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                                {locale === "en" ? "Collection of cookies and similar technologies help Company's websites to remember you, such as remembering your name, account, password, or previous preferences. Cookies also help Company's websites remember your preferences and improve how Company's websites present the projects and/or services to you as well as helping Company to provide the best experiences through online channels or direct communications." : "การเก็บรวบรวมคุกกี้ และเทคโนโลยีในลักษณะเดียวกันดังกล่าว จะช่วยให้เว็บไซต์ของบริษัทสามารถจดจำท่าน เช่น การจดจำชื่อ บัญชี รหัสผ่าน หรือความสนใจก่อนหน้านี้ เป็นต้น ทราบถึงความชื่นชอบของท่าน และปรับปรุงวิธีการที่บริษัทจะนำเสนอโครงการ และ/หรือบริการให้แก่ท่าน รวมถึงช่วยให้บริษัทสามารถมอบประสบการณ์ผ่านช่องทางออนไลน์ หรือการติดต่อสื่อสารกับท่านได้ดียิ่งขึ้น"}
                            </p>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                                {locale === "en" ? "In case you, as a Data Subject, do not agree to the use cookies in automatically collecting your Personal Data while browsing the websites and applications of Company, you can choose to not accept the cookies by setting on your browser." : "ในกรณีที่ท่านในฐานะเจ้าของข้อมูล ไม่เห็นด้วยกับการใช้คุกกี้ในการรวบรวมข้อมูลโดยอัตโนมัติขณะเรียกดูเว็บไซต์และแอปพลิเคชันของบริษัท ท่านสามารถเลือกที่จะไม่ยอมรับคุกกี้ได้โดยไปที่การตั้งค่าในหน้าเว็บไซต์ของการตั้งค่าคุกกี้ในแต่ละเว็บไซต์ของบริษัทที่ท่านเรียกดู"}

                            </p>
                        </section>

                        <section id="unit9">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "10.	Security Camera (CCTV)" : "10. กล้องวงจรปิด"}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company uses security camera (CCTV) to record photos or video footages of visitors and vehicles inside and around Company and other Company's properties for the purpose of security, prevention, and detection of crime. The CCTVs detect entrances, lobbies, balconies, indoor and outdoor carpark, fences, and areas within Company's properties which anyone can access 24 hours a day. The CCTVs may contain sound recordings. Nevertheless, Company ensures that recorded photos or video footages shall be accessible by an authorized person only." : "บริษัทใช้กล้องวงจรปิดเพื่อบันทึกภาพหรือภาพเคลื่อนไหวของผู้มาติดต่อ และยานพาหนะภายในและรอบๆ ที่ตั้งบริษัทและโครงการของบริษัท เพื่อความปลอดภัย รวมถึงการป้องกันและการตรวจจับอาชญากรรม กล้องวงจรปิดของบริษัท จะตรวจจับทางเข้า ล็อบบี้ ระเบียง ลานจอดรถภายในและนอกอาคาร รั้วรอบอาคาร และพื้นที่ภายในขอบเขตของบริษัทและโครงการของบริษัท ซึ่งประชาชนเข้าถึงได้ตลอด 24 ชม. ระบบเฝ้าระวังอาจมีการบันทึกเสียง บริษัทรับรองว่าบันทึกจากกล้องวงจรปิดจะถูกตรวจสอบโดยผู้มีอำนาจของบริษัทเท่านั้น"}

                            </p>
                        </section>

                        <section id="unit10">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "11.	Minor" : "11. ผู้เยาว์"}

                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                                {locale === "en" ? "Minor means all individuals aged under 20 years old.  Since Company is unable to identify age of the Data Subject who is browsing websites or applications of Company, Parent of a minor; who provide minor's Personal Data to our websites or applications, may request Company to delete such minor's Personal Data (if any). When Company has acknowledged that such Data Subject is a minor and is not competent to act on his/her behalf according to Thai Civil and Commercial Code; if required by PDPA, Company may obtain parental consent for minor as soon as possible." : "ผู้เยาว์ หมายถึง บุคคลใดๆ ที่มีอายุต่ำกว่า 20 ปีบริบูรณ์ บริษัทอาจไม่ทราบอายุของเจ้าของข้อมูลที่กำลังเข้าชมเว็บไซต์หรือแอปพลิเคชันของบริษัท ผู้ปกครองของผู้เยาว์ที่มอบข้อมูลส่วนบุคคลผ่านเว็บไซต์หรือแอปพลิเคชันของบริษัท อาจขอให้บริษัท ลบข้อมูลส่วนบุคคลของผู้เยาว์ดังกล่าว (ถ้ามี) หากบริษัททราบว่า เจ้าของข้อมูลเป็นผู้เยาว์และผู้เยาว์ดังกล่าวไม่สามารถกระทำการตามลำพังตามประมวลกฎหมายแพ่งและพาณิชย์ได้ หาก PDPA กำหนดให้บริษัทต้องขอความยินยอม บริษัทจะดำเนินการขอความยินยอมจากผู้ปกครองโดยไม่ชักช้า"}
                            </p>
                        </section>

                        <section id="unit11">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "12.	Collection of Personal Data before PDPA Becomes Fully Effective" : "12. ข้อมูลส่วนบุคคลที่รวบรวมก่อนการมีผลบังคับใช้ของ PDPA"}

                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company shall have right to continue collecting and using your Personal Data; which have been collected before PDPA becomes fully effective, within the scope of the original purposes. If you do not wish the Company to continue using your Personal Data, you may withdraw your consent at any time by contacting Company or Data Protection Officer as detailed in Clause 17 below." : "บริษัทมีสิทธิดำเนินการรวบรวมและใช้ข้อมูลส่วนบุคคลของท่านซึ่งได้รวบรวมไว้ก่อนที่ PDPA จะมีผลบังคับใช้ตามวัตถุประสงค์เดิมต่อไป หากท่านไม่ประสงค์ให้บริษัทเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลของท่านต่อไป ท่านสามารถเพิกถอนความยินยอมของท่านได้ทุกเมื่อโดยติดต่อบริษัท หรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลตามรายละเอียดในข้อ 17"}</p>
                        </section>

                        <section id="unit12">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "13.	Data Subjects' Rights" : "13. สิทธิของเจ้าของข้อมูล "}

                            </h1>
                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">13.1</span><span className="table-cell">
                                    {locale === "en" ? "Access : You may have the right to access or request a copy of the Personal Data, which Company is collecting, using, or disclosing about the Customers, including to disclose the acquisition of the Data Subjects' Personal Data which Company obtained without consent. For your own privacy and security, Company may require you to prove their identity before providing the requested Personal Data." : "สิทธิในการเข้าถึงข้อมูล ท่านมีสิทธิเข้าถึงข้อมูล หรือขอรับสำเนาของข้อมูลส่วนบุคคล ของท่านซึ่งบริษัทได้เก็บรวบรวม ใช้ หรือเปิดเผย รวมถึงขอให้เปิดเผยถึงการได้มาของข้อมูลส่วนบุคคลดังกล่าวที่ท่านไม่ได้ให้ความยินยอม  ทั้งนี้ เพื่อเป็นการคุ้มครองความเป็นส่วนตัวและความปลอดภัย  บริษัทอาจร้องขอให้ท่านยืนยันตัวตนก่อนดำเนินการตามคำขอ"}

                                </span></li>

                                <li> <span className="w-10 table-cell">13.2</span><span className="table-cell">

                                    {locale === "en" ? "Data Portability : You may have the right to obtain Personal Data of them, which Company holds, in a structured, electronic format, and to send or transfer such Personal Data to another data controller, where this is (a) your Personal Data, and (b) if Company is collecting, using or disclosing such Personal Data on the basis of your consent or to perform a contract with you." : "  สิทธิในการขอให้โอนข้อมูลส่วนบุคคล ท่านมีสิทธิในการโอนย้ายข้อมูลส่วนบุคคลของตน (ซึ่งบริษัทได้เก็บรวบรวมเอาไว้ ไม่ว่าในรูปแบบเอกสารสิ่งพิมพ์ หรืออิเล็กทรอนิกส์) ไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นได้  ในกรณีที่ (ก) เป็นข้อมูลส่วนบุคคลของท่าน และ (ข) บริษัทเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลนั้นด้วยฐานความยินยอม หรือฐานสัญญา"}
                                </span></li>

                                <li> <span className="w-10 table-cell">13.3</span><span className="table-cell">

                                    {locale === "en" ? "Rectification : You may have the right to rectify incomplete, inaccurate, misleading, or not up-to-date Personal Data which Company collects, uses, or discloses." : "สิทธิในการขอแก้ไขหรือปรับปรุงข้อมูลส่วนบุคคลให้ถูกต้อง ท่านอาจมีสิทธิที่จะขอแก้ไขหรือปรับปรุงข้อมูลส่วนบุคคลของท่านที่ไม่ถูกต้อง ไม่ครบถ้วนสมบูรณ์ ก่อให้เกิดความเข้าใจผิด หรือไม่เป็นปัจจุบัน"}
                                </span></li>

                                <li> <span className="w-10 table-cell">13.4</span><span className="table-cell">

                                    {locale === "en" ? "Withdraw Consent : For the purposes of consent, which you have given to Company for the collecting, using or disclosing of your Personal Data, you have the right to withdraw such consent at any time." : " สิทธิในการขอถอนความยินยอม ท่านมีสิทธิขอถอนความยินยอมเมื่อใดก็ได้   โดยเป็นไปตามวัตถุประสงค์ที่ท่านได้ให้ความยินยอมไว้กับบริษัทในการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล"}
                                </span></li>

                                <li><span className="w-10 table-cell">13.5</span><span className="table-cell">

                                    {locale === "en" ? "Objection : You may have the right to object the collection, use, and disclosure of the Personal Data in certain circumstances, including the case where Personal Data is being processed under the basis of public interest and legitimate interest or for the purposes of direct marketing and/or scientific, historical or statistic research. " : "สิทธิในการโต้แย้งคัดค้านการดำเนินการใดๆ ท่านมีสิทธิที่จะคัดค้านการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลได้ในบางกรณี ซึ่งรวมถึงกรณีการประมวลผลข้อมูลส่วนบุคคลซึ่งเป็นไปตามฐานประโยชน์สาธารณะ และฐานผลประโยชน์โดยชอบด้วยกฎหมาย หรือเพื่อวัตถุประสงค์ในการทำการตลาดแบบตรงและ/หรือ การวิจัยทางวิทยาศาสตร์ ประวัติศาสตร์ หรือสถิติ"}

                                </span></li>
                                <li><span className="w-10 table-cell">13.6</span><span className="table-cell">

                                    {locale === "en" ? "Restriction : You may have the right to restrict the processing of the Personal Data in circumstances where you have contested the accuracy of the Personal Data, for the period enabling Company to verify its accuracy." : "สิทธิในการระงับการใช้ข้อมูลส่วนบุคคล ท่านอาจมีสิทธิขอให้บริษัทระงับการใช้ข้อมูลส่วนบุคคลเป็นการชั่วคราวได้ในบางกรณี เช่น ท่านได้โต้แย้งเกี่ยวกับความถูกต้องของข้อมูลส่วนบุคคล หรือ บริษัทอยู่ระหว่างการตรวจสอบความถูกต้องของข้อมูลส่วนบุคคล"}

                                </span></li>
                                <li><span className="w-10 table-cell">13.7</span><span className="table-cell">

                                    {locale === "en" ? "Deletion (right to be forgotten) : You may have the right to request that Company delete or de-identify Personal Data which Company collects, uses or discloses about you, unless Company is not obligated to do so, or if Company needs to retain such Personal Data in order to comply with a legal obligation or to establish, exercise, or defend legal claims." : "สิทธิในการขอให้ลบ หรือทำลายข้อมูลส่วนบุคคล ท่านอาจมีสิทธิขอให้บริษัทลบ ทำลายข้อมูลส่วนบุคคล (ที่บริษัทได้เก็บรวบรวม ใช้ หรือเปิดเผย) เหรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวบุคคลได้ เว้นแต่บริษัทจะมีเหตุอันชอบธรรมด้วยกฎหมายในการปฏิเสธคำขอของท่านหรือบริษัทจำเป็นต้องเก็บรวบรวมข้อมูลส่วนบุคคลดังกล่าว เพื่อปฏิบัติตามหน้าที่ตามกฎหมาย หรือเพื่อที่จะก่อตั้ง ดำเนินการ หรือปกป้องสิทธิในการดำเนินคดีตามกฎหมาย"}


                                </span></li>
                                <li><span className="w-10 table-cell">13.8</span><span className="table-cell">

                                    {locale === "en" ? "File a complaint : You have the right to file a complaint with the Personal Data Protection Committee, if you believe that there is violation of the PDPA." : " สิทธิในการร้องเรียนต่อคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล ท่านมีสิทธิที่จะยื่นคำร้องต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล ในกรณีที่ท่านมีเหตุอันควรเชื่อได้ว่ามีการละเมิดข้อกำหนดตาม PDPA"}

                                </span></li>

                            </ul>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                                {locale === "en" ? "You may exercise these rights by change your privacy preference, unsubscribe, or contact Company or Data Protection Officer as detailed in Clause 17 below." : "  ท่านอาจใช้สิทธิดังกล่าวข้างต้นโดยเปลี่ยนการตั้งค่าความเป็นส่วนตัว ยกเลิกการสมัคร หรือติดต่อบริษัท หรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลตามรายละเอียดในข้อ 17"}
                            </p>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">


                                {locale === "en" ? "Your request to delete or anonymize the Personal Data, or request to restrict or objection to the processing of the Personal Data could mean that Company is unable to perform its obligations under an existing contract with you, unable to offer you products or services and/or acts on your request." : " คำขอลบหรือปกปิดข้อมูลส่วนบุคคลของท่าน หรือร้องขอให้จำกัดหรือคัดค้านการประมวลผลข้อมูลส่วนบุคคล อาจส่งผลให้บริษัท ไม่สามารถปฏิบัติหน้าที่ตามสัญญาที่มีอยู่ ไม่สามารถจำหน่ายสินค้าหรือให้บริการ และ/หรือดำเนินการตามคำขอของท่านได้"}
                            </p>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "In the event that your withdrawal of consent will affect you in any manner, Company or the Data Protection Office will inform you, as a case maybe, of the consequences of such withdrawal of consent accordingly." : "  หากการเพิกถอนความยินยอมของท่านมีผลกระทบต่อท่านในทางใดก็ตาม บริษัทหรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลจะแจ้งให้ท่านทราบถึงผลกระทบของการเพิกถอนความยินยอมดังกล่าว"}

                            </p>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base text-justify mb-2 ml-4">
                                {locale === "en" ? "For your privacy and security, Company may refuse to comply with the request if: \n(a)	The person submitting the request does not have evidence to verify that he/she is the data subject or does not have the authority to submit such request; \n (b)	The request is not reasonable such as the person submitting the request does not have the rights under the PDPA or does not have Personal Data in Company's possession;\n (c)	The request is excessive or vexatious such as the request unreasonably repeats a previous request from the same person; or\n (d)	Company has compelling legitimate grounds to reject such request as required or permitted by the PDPA and/or any applicable laws. " : "เพื่อความปลอดภัยของท่าน บริษัทอาจปฏิเสธที่จะปฏิบัติตามคำขอหาก \n(ก) บุคคลที่ส่งคำขอไม่มีหลักฐานยืนยันว่าตนเป็นเจ้าของข้อมูลหรือไม่มีอำนาจในการส่งคำขอดังกล่าว\n(ข) คำขอนั้นไม่สมเหตุสมผล เช่น บุคคลที่ส่งคำขอไม่มีสิทธิภายใต้ PDPA หรือไม่มีข้อมูลส่วนบุคคลที่บริษัทครอบครอง\n(ค) คำขอนั้นเป็นการก่อการรบกวน เช่น คำขอซ้ำกับคำขอก่อนหน้าจากบุคคลเดียวกันโดยไม่มีเหตุผล\n(ง) บริษัทมีเหตุผลที่ถูกต้องตามกฎหมายที่จะปฏิเสธคำขอดังกล่าวตามที่ PDPA และ/หรือกฎหมายที่บังคับใช้ใดๆ กำหนดหรืออนุญาต"}
                            </p>
                        </section>


                        <section id="unit13">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "14.	Exceptions to the Confidentiality of Personal Data" : "14. ข้อยกเว้นการดูแลรักษาข้อมูลส่วนบุคคล"}

                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">

                                {locale === "en" ? "Any of the following cases shall not be deemed an offense to the Privacy Notice" : "ในกรณีต่อไปนี้ไม่ถือว่าเป็นการกระทำที่ฝ่าฝืนต่อนโยบายความเป็นส่วนตัว"}
                            </p>
                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">14.1</span><span className="table-cell">
                                    {locale === "en" ? "The Personal Data that has been disclosed to the public at the time you disclose such Personal Data to the Company or that is publicly disclosed which is not the fault of the Company or its group companies" : "ข้อมูลที่เป็นความลับนั้น ได้ถูกเปิดเผยต่อสาธารณะแล้วตั้งแต่เวลาที่ท่านได้เปิดเผยข้อมูลให้บริษัท หรือถูกเปิดเผยต่อสาธารณะโดยมิใช่ความผิดของบริษัท"}
                                </span></li>

                                <li> <span className="w-10 table-cell">14.2</span><span className="table-cell">

                                    {locale === "en" ? "The Personal Data has been disclosed in accordance with your consent or permission by any other means or" : "การเปิดเผยข้อมูลโดยได้รับความยินยอมจากท่านไม่ว่าเป็นลายลักษณ์อักษร หรือการอนุญาตโดยวิธีการอื่นใด"}
                                </span></li>

                                <li> <span className="w-10 table-cell">14.3</span><span className="table-cell">

                                    {locale === "en" ? "The Personal Data has been disclosed as it is necessary or required by laws, order, rules, regulations, court orders, or governmental agency, or other necessities. " : " การเปิดเผยข้อมูลตามความจำเป็น เนื่องจากกระทำตามกฎหมาย คำสั่ง กฎ ข้อบังคับ คำสั่งศาล คำพิพากษา หรือหน่วยงานของรัฐ หรือตามความจำเป็นอื่นใด "}

                                </span></li>
                            </ul>

                        </section>

                        <section id="unit14">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "15.	Amendment to the Privacy Notice" : "15. การปรับปรุงแก้ไขรายละเอียดเกี่ยวกับนโยบายความเป็นส่วนตัว"}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Company reserves the right to review and amend this Privacy Notice; either whole or in part, without prior notice.  In this regards, any amendment will be applied when Company has published amended Privacy Notice on our website " : "บริษัทขอสงวนสิทธิในการปรับปรุงแก้ไขรายละเอียดเกี่ยวกับนโยบายความเป็นส่วนตัวทั้งหมดหรือบางส่วน โดยไม่ต้องแจ้งให้ท่านทราบ ทั้งนี้ การแก้ไขเปลี่ยนแปลงใดๆ จะมีผลทันทีเมื่อบริษัทเผยแพร่นโยบายความเป็นส่วนตัวที่แก้ไขดังกล่าวทาง "}

                                <a href="https://siamsindhorn.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#82603f]">https://siamsindhorn.com/privacy</a> </p>
                        </section>


                        <section id="unit15">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "16. Miscellaneous" : " 16. เบ็ดเตล็ด "}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "The Privacy Notice and Privacy Policy of the Company shall be governed and interpreted under PDPA and the applicable law of Thailand. This Privacy Notice and Privacy Policy has been made in both Thai and English. In case there is any controversy, the Thai version shall prevail." : "นโยบายความเป็นส่วนตัวและนโยบายคุ้มครองข้อมูลส่วนบุคคลอยู่ภายใต้และจะถูกตีความตาม PDPA และกฎหมายของประเทศไทย นโยบายความเป็นส่วนตัวและนโยบายคุ้มครองข้อมูลส่วนบุคคลนี้จัดทำขึ้นเป็นภาษาไทยและภาษาอังกฤษ ในกรณีที่มีความไม่สอดคล้องกันระหว่างฉบับภาษาไทยและภาษาอังกฤษ ให้ถือเอาฉบับภาษาไทยเป็นหลัก"}
                            </p>
                        </section>

                        <section id="unit16">
                            <h1 className="text-lg  mb-2">
                                {locale === "en" ? "17. Contact Us" : " 17. ช่องทางการติดต่อ  "}
                            </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">
                                {locale === "en" ? "Regarding all queries or awareness with respect to the Personal Data arising from this Privacy Notice, or the activities of Company, including to the exercise of any right as set out in this Privacy Notice, please contact Data Protection Officer of Company at the below address" : "            หากท่านมีความประสงค์ที่จะใช้สิทธิเกี่ยวกับข้อมูลส่วนบุคคลของท่าน หรือมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้ สามารถติดต่อได้ที่"}
                            </p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-28 table-cell">
                                    {locale === "en" ? "Attention" : "เรียน"}
                                </span><span className="table-cell">
                                        {locale === "en" ? "Data Protection Officer" : "เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล"}
                                    </span></li>

                                <li> <span className="w-28 table-cell">
                                    {locale === "en" ? "Address" : "ที่อยู่"}
                                </span><span className="table-cell whitespace-pre-line">
                                        {locale === "en" ? "Siam Sindhorn Co., Ltd. \n 130-132 Sindhorn Building Tower 1, 4th Floor, \nWireless Road, Lumpini, Pathumwan, Bangkok 10330" : "บริษัท สยามสินธร จำกัด \n 130-132 อาคารสินธร ทาวเวอร์ 1 ชั้น 4 \n ถนนวิทยุ แขวงลุมพินี เขตปทุมวัน กรุงเทพมหานคร 10330"}

                                    </span></li>

                                <li> <span className="w-28 table-cell">
                                    {locale === "en" ? "Tel" : "โทร"}
                                </span><span className="table-cell">02-263-2500</span></li>
                                <li> <span className="w-28 table-cell">
                                    {locale === "en" ? "Email" : "อีเมล"}


                                </span><span className="table-cell text-[#82603f]">
                                        <a href="mailto:personaldata@siamsindhorn.com" target="_blank" rel="noopener noreferrer">
                                            personaldata@siamsindhorn.com
                                        </a>
                                    </span></li>
                                <li className="w-full flex justify-end"> <span className="italic w-full text-right">

                                    {locale === "en" ? "Last edited on 23 June 2022" : "    ปรับปรุงล่าสุด ณ วันที่ 23 มิถุนายน 2565"}


                                </span></li>

                            </ul>
                        </section>

                        <section id="unit17">
                            <h1 className="text-lg  my-2">
                                {locale === "en" ? "Annex 1. Websites and Contact Details" : "เอกสารแนบท้าย 1. รายละเอียดเว็บไซต์ และช่องทางการติดต่อของบริษัท"}
                            </h1>
                            <p className="break-words whitespace-pre-line text-sm sm:text-base text-justify mb-2">
                                {locale === "en" ? "Websites owned or controlled by Siam Sindhorn Co., Ltd. " : "เว็บไซต์ของกลุ่มบริษัท สยามสินธร จำกัด"}

                            </p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">1.</span><span className="table-cell">https://siamsindhorn.com</span></li>
                                <li> <span className="w-10 table-cell">2.</span><span className="table-cell">https://sindhornvillage.com</span></li>
                                <li> <span className="w-10 table-cell">3.</span><span className="table-cell">https://sindhorntonson.com   </span></li>
                                <li> <span className="w-10 table-cell">4.</span><span className="table-cell">https://sindhornlumpini.com </span></li>
                                <li> <span className="w-10 table-cell">5.</span><span className="table-cell">https://sindhornresidence.com</span></li>
                                <li> <span className="w-10 table-cell">6.</span><span className="table-cell">https://theresidencesatsindhornkempinski.com </span></li>
                                <li> <span className="w-10 table-cell">7.</span><span className="table-cell">https://baansindhorn.com </span></li>
                                <li> <span className="w-10 table-cell">8.</span><span className="table-cell">https://sindhornbuilding.com</span></li>
                                <li> <span className="w-10 table-cell">9.</span><span className="table-cell">https://theoldsiam.co.th</span></li>

                                <li> <span className="w-10 table-cell">10.</span><span className="table-cell">https://sanehjaan.com</span></li>
                                <li> <span className="w-10 table-cell">11.</span><span className="table-cell">https://polofootballpark.com</span></li>
                                <li> <span className="w-10 table-cell">12.</span><span className="table-cell">https://eiffelbakery.com </span></li>

                            </ul>

                            <p className="break-words whitespace-pre-line  text-sm sm:text-base  text-justify mb-2">LINE Official Account</p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-10 table-cell">1.</span><span className="table-cell">Sindhorn Village</span></li>
                                <li> <span className="w-10 table-cell">2.</span><span className="table-cell">Sindhorn Food court</span></li>
                                <li> <span className="w-10 table-cell">3.</span><span className="table-cell">Sindhorn Building</span></li>
                                <li> <span className="w-10 table-cell">4.</span><span className="table-cell">Velaa Langsuan</span></li>
                                <li> <span className="w-10 table-cell">5.</span><span className="table-cell">The Old Siam BC</span></li>
                                <li> <span className="w-10 table-cell">6.</span><span className="table-cell">The Old Siam Plaza</span></li>

                                <li> <span className="w-10 table-cell">7.</span><span className="table-cell">Cafe Eiffel</span></li>
                                <li> <span className="w-10 table-cell">8.</span><span className="table-cell">Polo Football Park</span></li>


                            </ul>
                        </section>


                    </div>
                </div>

            </div>
        </>
    );
}

export default Privacy;




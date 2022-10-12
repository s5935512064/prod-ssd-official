import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

<<<<<<< Updated upstream
=======
const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "200%" },
}

const variantText = {
    open: { opacity: 1, y: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75, delay: 0.5 } },
    closed: { opacity: 0, y: "50%", transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.80 } },
}


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 3
        }
    }
}

const menu = [
    { id: 1, name: "company", nameTH: "", href: "/" },
    { id: 2, name: "business", nameTH: "", href: "/business" },
    { id: 3, name: "contact", nameTH: "", href: "/contact" },
    { id: 4, name: "career", nameTH: "", href: "/career" },
]


// const Navbar = () => {

//     const router = useRouter();
//     const { locale } = router;
//     const [navbarOpen, setNavbarOpen] = useState(false);
//     const [navbarOffset, setNavbarOffset] = useState(false);
//     const [hover, setHover] = useState(false);

//     const handleMouseIn = () => {
//         setHover(true);
//     };

//     const handleMouseOut = () => {
//         setHover(false);
//     };

//     // const handleMouseOut = () => setTimeout(() => setHover(false), 2000);

//     const handleToggle = () => {
//         setNavbarOpen(!navbarOpen);
//     };


//     const changeLanguage = (e) => {
//         const locale = e.target.value;
//         router.push(router.pathname, router.asPath, { locale, scroll: false });
//     };

//     useEffect(() => {
//         var prevScrollpos = window.pageYOffset;
//         const navbar = document.querySelector("#navbar");
//         window.onscroll = function () {
//             var currentScrollPos = window.pageYOffset;
//             // if (prevScrollpos > currentScrollPos) {
//             //     navbar.style.top = "0";

//             // } else {
//             //     navbar.style.top = "-64px";
//             // }

//             if (window.pageYOffset >= 100) {
//                 setNavbarOffset(true);
//             }
//             else {
//                 setNavbarOffset(false);
//             }
//             prevScrollpos = currentScrollPos;
//         }
//     })

//     return (
//         <>
//             <div className="z-20 fixed top-0 w-full flex justify-center h-14 items-center px-5 md:px-10 border-b shadow-sm bg-white">
//                 <div className="max-w-7xl h-full w-full inline-flex justify-center items-center  relative">
//                     {/* <div className="absolute left-0 ">
//                         <div
//                             id="menu"
//                             className={navbarOpen ? "menu open " : "menu  "}
//                         >
//                             <span className=""></span>

//                             <button
//                                 id="hamburgerBtn"
//                                 className="menu-link"
//                                 onClick={handleToggle}
//                             >
//                                 <span className="menu-icon">
//                                     <span className="menu-line menu-line-1"></span>
//                                     <span className="menu-line menu-line-2"></span>
//                                     <span className="menu-line menu-line-3"></span>
//                                 </span>
//                             </button>
//                         </div>

//                     </div> */}


//                     <div className="absolute left-0  h-14">
//                         <Link href={"/"}>

//                             <div className="w-36 h-full relative" >
//                                 <Image
//                                     src="/assets/ssd-logo.png"
//                                     alt="logo"
//                                     layout="fill"
//                                     objectFit="contain"
//                                     className=" cursor-pointer"
//                                 />

//                             </div>
//                         </Link>
//                     </div>

//                     <div className="hidden md:block">
//                         <ul className="inline-flex gap-4 items-center">

//                             {menu.map((item, index) => (
//                                 <Link key={index} href={item.href}>
//                                     <li className={classNames(router.pathname === item.href ? "text-[#A08A58]  border border-[#A08A58] " : "text-gray-400  ", "py-1 px-3 hover:bg-[#A08A58] hover:text-white text-sm  duration-300 cursor-pointer w-24 text-center uppercase rounded-3xl tracking-wide ")}>{item.name}</li>
//                                 </Link>
//                             ))}
//                             {/* <li className=" ">Company</li>
//                             <li className="w-24 text-center rounded-3xl py-1 px-3 hover:bg-[#A08A58] hover:text-white duration-300 cursor-pointer">Bussiness</li>
//                             <li className="w-24 text-center rounded-3xl py-1 px-3 hover:bg-[#A08A58] hover:text-white duration-300 cursor-pointer">Contact</li>
//                             <li className="w-24 text-center rounded-3xl py-1 px-3 hover:bg-[#A08A58] hover:text-white duration-300 cursor-pointer">Career</li> */}

//                         </ul>
//                     </div>

//                     <div className="absolute right-0 divide-x-2 inline-flex gap-2 text-sm text-gray-700">
//                         <p className="text-gray-300 text-xs">TH</p>
//                         <p className="pl-2  font-medium text-[#A08A58]">EN</p>

//                     </div>
//                     {/* <Link href={locale === "en" ? "/en" : "/"}>

//                         <div className="w-36 h-full relative left-0 " >

//                             <Image
//                                 src="/assets/ssd-logo.png"
//                                 alt="logo"
//                                 layout="fill"
//                                 objectFit="contain"
//                                 className="hover:animate-pulse cursor-pointer"
//                             />

//                         </div>
//                     </Link> */}

//                     {/* <div className="flex gap-3">
//                         <Link href={locale === "en" ? "/en/privacy" : "/privacy"}>
//                             <button className="text-sm uppercase font-semibold">Privacy</button>
//                         </Link>

//                         <div className=" flex justify-end items-center ml-3">
//                             <div className="w-8 h-8 relative mr-1">
//                                 <Image
//                                     src={locale === "en" ? "/assets/en.svg" : "/assets/th.svg"}
//                                     alt="flag"
//                                     layout="fill"
//                                     objectFit="contain"
//                                     className="w-8 h-8" />

//                             </div>

//                             <select
//                                 name="changeLocal"
//                                 onChange={changeLanguage}
//                                 defaultValue={locale}
//                                 className=" text-shadow-sm bg-transparent  font-medium text-md"
//                             >
//                                 <option className="text-black rounded-none" value="en">
//                                     English
//                                 </option>
//                                 <option className="text-black rounded-none" value="th">
//                                     ภาษาไทย
//                                 </option>
//                             </select>
//                         </div>
//                     </div> */}
//                 </div>

//             </div>
//         </>
//     );
// }

>>>>>>> Stashed changes
const Navbar = () => {

    const router = useRouter();
    const { locale } = router;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale, scroll: false });
    };

    return (
        <>
            <div className="z-20 fixed top-0 w-full flex justify-center h-14 items-center px-5 md:px-10 border-b shadow-sm bg-white">
                <div className="h-full w-full inline-flex justify-between items-center  relative">
                    <Link href={locale === "en" ? "/en" : "/"}>

                        <div className="w-36 h-full relative left-0 " >

                            <Image
                                src="/assets/ssd-logo.png"
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                                className="hover:animate-pulse cursor-pointer"
                            />

                        </div>
                    </Link>

                    <div className="flex gap-3">
                        <Link href={locale === "en" ? "/en/privacy" : "/privacy"}>
                            <button className="text-sm uppercase font-semibold">Privacy</button>
                        </Link>
                        {/* <button className="text-sm">MENU</button> */}

                        <div className=" flex justify-end items-center ml-3">
                            <div className="w-8 h-8 relative mr-1">
                                <Image
                                    src={locale === "en" ? "/assets/en.svg" : "/assets/th.svg"}
                                    alt="flag"
                                    layout="fill"
                                    objectFit="contain"
                                    className="w-8 h-8" />

                            </div>

                            <select
                                name="changeLocal"
                                onChange={changeLanguage}
                                defaultValue={locale}
                                className=" text-shadow-sm bg-transparent  font-medium text-md"
                            >
                                <option className="text-black rounded-none" value="en">
                                    English
                                </option>
                                <option className="text-black rounded-none" value="th">
                                    ภาษาไทย
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar;
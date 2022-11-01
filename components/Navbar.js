import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {

    const router = useRouter();
    const { locale } = router;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale, scroll: false });
    };

    return (
        <>
            <div className="z-20 fixed top-0 w-full flex justify-center h-14 items-center px-5 md:px-10 text-white shadow-sm bg-white/0 xxl:px-0 py-1">
                <div className="h-full w-full inline-flex justify-between items-center  relative !text-sm">
                    <Link href={locale === "en" ? "/en" : "/"}>

                        <div className="w-36 h-full relative left-0 shrink-0" >

                            <Image
                                src="/assets/ssd-logo.png"
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                                className="hover:animate-pulse cursor-pointer"
                            />

                        </div>
                    </Link>

                    <div className="flex flex-col sm:flex-row items-center justify-start">

                        <Link href={locale === "en" ? "/en/privacy" : "/privacy"}>
                            <button className="text-sm uppercase">Privacy Policy</button>
                        </Link>
                        {/* <button className="text-sm">MENU</button> */}

                        <div className=" flex justify-end items-center ml-3">
                            <div className="w-8 h-8 relative">
                                <Image
                                    src={locale === "en" ? "/assets/en.svg" : "/assets/th.svg"}
                                    alt="flag"
                                    layout="fill"
                                    objectFit="contain"
                                />

                            </div>

                            <select
                                name="changeLocal"
                                onChange={changeLanguage}
                                defaultValue={locale}
                                className=" text-shadow-sm bg-transparent "
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
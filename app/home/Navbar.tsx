"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimate } from "framer-motion";

export default function Navbar() {
  const [scope, animate] = useAnimate();
  const pathname = usePathname();
  const [showHamberMenuItems, setShowHamberMenuItems] = React.useState(false);
  const [showSpecificItems, setShowSpecificItems] = React.useState(true);

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
  ];
  const showMenu = async () => {
    if (showHamberMenuItems === false) {
      setShowSpecificItems(!showSpecificItems);
      await animate(scope.current, { height: "110dvh" }, { duration: 0.2 });
      await setShowHamberMenuItems(!showHamberMenuItems);
    } else if (showHamberMenuItems === true) {
      await setShowHamberMenuItems(!showHamberMenuItems);
      await animate(scope.current, { height: "0dvh" }, { duration: 0.2 });
      await setShowSpecificItems(!showSpecificItems);
    }
  };

  return (
    <>
      <div className="w-full fixed z-[1000] backdrop-blur-[6px] bg-white/40">
        <div className=" w-full  z-[999]  flex flex-col justify-center items-center sm:py-[1rem] md:pt-[2rem] md:pb-[1rem] text-[1rem] font-semibold">
          <div className="flex justify-between items-center responsive-container">
            {/* logo */}
            <Link href={"/"}>
              <p
                className={`${
                  showSpecificItems === true
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }  rounded-full  p-[10px] cursor-pointer`}
              >
                SW
              </p>
            </Link>

            {/* menu items */}
            {/* <div className="sm:hidden md:block">
              <ul className="flex sm:gap-x-[5dvw] xl:gap-x-[5rem]">
                {menuItems.map((data, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={data.link}
                        className={`${
                          pathname === data.link && "text-zinc-500"
                        }`}
                      >
                        {data.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div> */}

            {/* <div>
              <Button className="sm:hidden md:block rounded-full">
                Get Started
              </Button>
            </div> */}

            {/* hamburger menu icon*/}
            <div
              className="flex flex-col justify-center items-center gap-y-[5px] sm:flex md:flex cursor-pointer w-[40px] h-[30px]"
              onClick={showMenu}
            >
              <div
                className={`h-[4px] rounded-full transition-all duration-500 w-[40px] ${
                  showSpecificItems === true
                    ? "rotate-0 bg-black"
                    : "rotate-[45deg] bg-white"
                }`}
              ></div>
              <div
                className={`h-[4px] rounded-full transition-all duration-500 w-[40px] ${
                  showSpecificItems === true
                    ? "rotate-0 bg-black mt-0"
                    : "rotate-[-45deg] bg-white mt-[-9px]"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* hamber menu items */}
        <div className="flex justify-center items-center w-full absolute mt-[-120px] z-[-900] backdrop-blur-[4px]  bg-black">
          <motion.div
            ref={scope}
            initial={{ height: "0dvh" }}
            className="responsive-container  w-full flex flex-col justify-start items-center text-center font-bold sm:text-[1.5rem] md:text-[3rem]"
          >
            <ul
              className={`${
                showHamberMenuItems === true ? "flex" : "hidden"
              } flex-col gap-[1.5rem] text-white pt-[9rem]`}
              onClick={showMenu}
            >
              {menuItems.map((data, index) => {
                return (
                  <li key={index}>
                    <Link href={data.link}>{data.name}</Link>
                  </li>
                );
              })}
              <li>
                <Button className="rounded-full sm:px-[2.3rem] sm:py-[2rem] md:px-[3.3rem] md:py-[3rem]  sm:text-[1.5rem] md:text-[2.5rem] font-bold">
                  <Link href={"/contact"}>
                  Book a call
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}

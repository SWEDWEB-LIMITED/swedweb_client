import Image from "next/image";
import React from "react";
import About from "./About";
import Services from "./Services";
import RecentProjects from "./RecentProjects";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="responsive-container sm:text-[3rem] lg:text-[4rem] xl:text-[6rem] 2xl:text-[7rem] font-bold">
        {/* heading text for lg to 2xl  */}
        <div className="uppercase sm:hidden lg:flex flex-col lg:gap-y-[1.5rem] xl:gap-0 ">
          {/* heading text line 1 */}
          <div className="flex w-full justify-center items-center gap-[2rem]">
            <Image
              alt="home hero image"
              src="/2.jpg"
              width={140}
              height={83}
              className="rounded-xl"
              priority={true}
            />

            <h1 className=" ">Let Us Bring Your</h1>
          </div>
          {/* heading text line 2 */}
          <div className="flex w-full justify-center items-center gap-[2rem]">
            <h1 className="text-zinc-500">Ideas </h1>
            <Image
              alt="home hero image"
              src="/1.jpg"
              width={140}
              height={83}
              className="rounded-xl"
            />
            <h1> to Vibrant</h1>
          </div>
          {/* heading text line 3 */}
          <div className="flex w-full justify-center items-center gap-[2rem]">
            <p className="font-normal text-base normal-case sm:mt-0 lg:mt-[1.5rem] xl:mt-0 lg:w-[25rem] xl:w-[30rem] 2xl:w-[36rem]">
              Infusing every pixel with creativity, innovation, and expert
              craftsmanship, we sculpt dynamic web solutions that embody your
              vision, empowering your online presence to stand out in the
              digital landscape.
            </p>

            <h1>
              Digital <span className="text-zinc-500">Life</span>{" "}
            </h1>
          </div>
        </div>

        <div className="sm:flex flex-col items-center justify-center gap-6 lg:hidden text-center">
          <h1 className="md:w-[35rem] ">Let Us Bring Your Ideas to Vibrant</h1>
          <p className="font-normal text-base normal-case md:w-[35rem]">
            Infusing every pixel with creativity, innovation, and expert
            craftsmanship, we sculpt dynamic web solutions that embody your
            vision, empowering your online presence to stand out in the digital
            landscape.
          </p>
        </div>
      </div>

      {/* other section for home page */}
      <div className="responsive-container flex flex-col justify-center items-center gap-[10rem] mt-[10rem]">
        {/* about section */}
        <About />
        <Services/>
        <RecentProjects/>
        <Testimonial/>
        <Contact/>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

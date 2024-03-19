import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function page() {

  return (
    <>
      <p className="text-center sm:text-[1.8rem] md:text-[2.8rem] font-bold">
        Check out our recent projects
      </p>

      {/* 1st project */}
      <div className="relative responsive-container flex sm:flex-col lg:flex-row justify-center sm:items-center lg:items-start sm:gap-x-0 lg:gap-x-[8rem] xl:gap-x-[12rem] gap-y-[5rem]  mt-[3rem]">
        <div className="relative rounded-lg overflow-hidden shadow-lg group max-w-[600px] max-h-[700px] top-0 bottom-0 sm:block lg:sticky">
          <div className="absolute w-full bg-black/40 h-full opacity-0 transition-all ease-linear duration-300 group-hover:opacity-100 flex justify-center items-center">
            <Button className="rounded-full hidden group-hover:block transition-all duration-1000">
              <Link href={"https://gnestaindiska.se/"} target="_blank">
                Visit
              </Link>
            </Button>
          </div>

          <Image
            className="w-[100%] h-auto block"
            src="/projects2.png"
            alt="Sunset in the mountains"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col sm:w-[17rem] md:w-[19rem] lg:w-[22rem] xl:w-[25rem]">
          <p className="font-semibold text-[2rem]">Genesta Indisca</p>
          <p>
            A swish resturant in the heart of the mountains of Sweden. Offering
            various dishes and drinks. Now they are only a few steps away from
            opening on online.
          </p>

          <p className="font-semibold text-[1.5rem] mt-8">
            Problem our client facing
          </p>
          <p>
            Our client main problem is react out as many people as possiable and
            take order. He wants to have a website so that he can take order
            online and have a better customer service.
          </p>

          <p className="font-semibold text-[1.5rem] mt-8">Target customer</p>
          <p>
            By researching we found out that the main target customer is people
            who are in the mountains and want to have a swish resturant.
          </p>

          <p className="font-semibold text-[1.5rem] mt-8">Design system</p>
          <p>
            We used the design system of the company log and it's menu color
            palates. We use the same color palates for the website.
          </p>
          <div className="w-full flex flex-row flex-wrap mt-3 justify-center gap-4">
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-white border h-[3rem] w-full"></div>
              <p>#FFFFFF</p>
            </div>
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-[#222222] h-[3rem] w-full"></div>
              <p>#222222</p>
            </div>
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-[#FFAA36] h-[3rem] w-full"></div>
              <p>#FFAA36</p>
            </div>
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-[#FF9304] h-[3rem] w-full"></div>
              <p>#FF9304</p>
            </div>
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-[#DC2626] h-[3rem] w-full"></div>
              <p>#DC2626</p>
            </div>
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-[#731A12] h-[3rem] w-full"></div>
              <p>#731A12</p>
            </div>
          </div>

          <p className="font-semibold text-[1.5rem] mt-8">Typography</p>
          <p>
            For typography we choose poppins font for it's beauty and it's wide
            range of characters. This font is perfact match for engaging and
            stylish design.
          </p>
          <div className="w-full flex flex-row gap-8 flex-wrap mt-3 justify-center items-center">
            <div className=" w-[25%] flex gap-4 justify-center items-center">
              <p className="bold text-[60px]">A</p>
              <p>60px</p>
            </div>
            <div className=" w-[25%] flex gap-4 justify-center items-center">
              <p className="bold text-[36px]">A</p>
              <p>36px</p>
            </div>
            <div className=" w-[25%] flex gap-4 justify-center items-center">
              <p className="bold text-[24px]">A</p>
              <p>24px</p>
            </div>
            <div className=" w-[25%] flex gap-4 justify-center items-center">
              <p className="text-[20px]">A</p>
              <p>20px</p>
            </div>
            <div className=" w-[25%] flex gap-4 justify-center items-center">
              <p className="text-[16px]">A</p>
              <p>16px</p>
            </div>
          </div>

          <p className="font-semibold text-[1.5rem] mt-8">Problem approch</p>
          <p>
            To solve this problem we firstly made a wireframe of the website.
            Then we made a prototype of the website. After that we made a design
            system and then we made the website. We chosse cheerfull color
            palates and we use the same color palates for the website.
          </p>
        </div>
      </div>

      <div className="mt-[5rem]"></div>
    </>
  );
}

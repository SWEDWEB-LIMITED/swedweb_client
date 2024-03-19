import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function page() {
  const member = [
    {
      name: "Jasica",
      image: "peopleface.jpg",
      description: "Web developer",
    },
    {
      name: "Moland",
      image: "peopleface.jpg",
      description: "Web developer",
    },
    {
      name: "Yonoso ba",
      image: "peopleface.jpg",
      description: "Founder & Co-Founder",
    },
  ];





  return (
    <>

<p className="text-center sm:text-[1.8rem] md:text-[2.8rem] font-bold">Check out our recent projects</p>

{/* 1st project */}
      <div className="relative responsive-container flex sm:flex-col lg:flex-row justify-center sm:items-center lg:items-start sm:gap-x-0 lg:gap-x-[8rem] xl:gap-x-[12rem] gap-y-[5rem]  mt-[3rem]">

        <div className="relative rounded-lg overflow-hidden shadow-lg group max-w-[600px] max-h-[700px] top-0 bottom-0 sm:block lg:sticky">
          <div className="absolute w-full bg-black/40 h-full opacity-0 transition-all ease-linear duration-300 group-hover:opacity-100 flex justify-center items-center">
            <Button className="rounded-full hidden group-hover:block transition-all duration-1000">
              Visit
            </Button>
          </div>

          <Image
            className="w-[100%] h-auto block"
            src="/projects.png"
            alt="Sunset in the mountains"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col sm:w-[17rem] md:w-[19rem] lg:w-[22rem] xl:w-[25rem]">
          <p className="font-semibold text-[2rem]">Astered agency</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt a
            sequi asperiores? Incidunt, tenetur inventore. Assumenda qui nam
            earum suscipit.
          </p>

          <p className="font-semibold text-[1.5rem] mt-8">
            Problem our client facing
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
            reiciendis nobis magnam aliquid facilis, quas deserunt neque nam
            veniam, dolores autem ut! Nihil praesentium labore minima pariatur
            fugit.
          </p>

          <p className="font-semibold text-[1.5rem] mt-8">Target customer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
            reiciendis nobis magnam aliquid facilis, quas deserunt neque nam
            veniam, dolores autem ut! Nihil praesentium labore minima pariatur
            fugit.
          </p>

          <p className="font-semibold text-[1.5rem] mt-8">Design system</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
            reiciendis nobis magnam aliquid facilis.
          </p>
          <div className="w-full flex flex-row flex-wrap mt-3 justify-center gap-4">
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-purple-300 h-[3rem] w-full"></div>
              <p>#778f55</p>
            </div>
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-orange-300 h-[3rem] w-full"></div>
              <p>#778f55</p>
            </div>
            <div className=" w-[25%] flex flex-col justify-center items-center">
              <div className="bg-blue-300 h-[3rem] w-full"></div>
              <p>#778f55</p>
            </div>
          </div>

          <p className="font-semibold text-[1.5rem] mt-8">Typography</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus deleniti nesciunt ipsa quasi.
          </p>
          <div className="w-full flex flex-row gap-8 flex-wrap mt-3 justify-center items-center">
            <div className=" w-[25%] flex gap-4 justify-center items-center">
              <p className="bold text-[5rem]">A</p>
              <p>24px</p>
            </div>
            <div className=" w-[25%] flex gap-4 justify-center items-center">
              <p className="bold text-[3rem]">A</p>
              <p>24px</p>
            </div>
          </div>

          <p className="font-semibold text-[1.5rem] mt-8">Problem approch</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
            reiciendis nobis magnam aliquid facilis.
          </p>

          <p className="font-semibold text-[1.5rem] mt-8">Success mission</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
            reiciendis nobis magnam aliquid facilis.
          </p>
        </div>
      </div>


{/* 2nd project */}
<div className="relative responsive-container flex sm:flex-col lg:flex-row justify-center sm:items-center lg:items-start sm:gap-x-0 lg:gap-x-[8rem] xl:gap-x-[12rem] gap-y-[5rem]  mt-[3rem]">

<div className="relative rounded-lg overflow-hidden shadow-lg group max-w-[600px] max-h-[700px] top-0 bottom-0 sm:block lg:sticky">
  <div className="absolute w-full bg-black/40 h-full opacity-0 transition-all ease-linear duration-300 group-hover:opacity-100 flex justify-center items-center">
    <Button className="rounded-full hidden group-hover:block transition-all duration-1000">
      Visit
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
  <p className="font-semibold text-[2rem]">Genesta indisca</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt a
    sequi asperiores? Incidunt, tenetur inventore. Assumenda qui nam
    earum suscipit.
  </p>

  <p className="font-semibold text-[1.5rem] mt-8">
    Problem our client facing
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
    consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
    reiciendis nobis magnam aliquid facilis, quas deserunt neque nam
    veniam, dolores autem ut! Nihil praesentium labore minima pariatur
    fugit.
  </p>

  <p className="font-semibold text-[1.5rem] mt-8">Target customer</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
    consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
    reiciendis nobis magnam aliquid facilis, quas deserunt neque nam
    veniam, dolores autem ut! Nihil praesentium labore minima pariatur
    fugit.
  </p>

  <p className="font-semibold text-[1.5rem] mt-8">Design system</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
    consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
    reiciendis nobis magnam aliquid facilis.
  </p>
  <div className="w-full flex flex-row flex-wrap mt-3 justify-center gap-4">
    <div className=" w-[25%] flex flex-col justify-center items-center">
      <div className="bg-purple-300 h-[3rem] w-full"></div>
      <p>#778f55</p>
    </div>
    <div className=" w-[25%] flex flex-col justify-center items-center">
      <div className="bg-orange-300 h-[3rem] w-full"></div>
      <p>#778f55</p>
    </div>
    <div className=" w-[25%] flex flex-col justify-center items-center">
      <div className="bg-blue-300 h-[3rem] w-full"></div>
      <p>#778f55</p>
    </div>
  </div>

  <p className="font-semibold text-[1.5rem] mt-8">Typography</p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus deleniti nesciunt ipsa quasi.
  </p>
  <div className="w-full flex flex-row gap-8 flex-wrap mt-3 justify-center items-center">
    <div className=" w-[25%] flex gap-4 justify-center items-center">
      <p className="bold text-[5rem]">A</p>
      <p>24px</p>
    </div>
    <div className=" w-[25%] flex gap-4 justify-center items-center">
      <p className="bold text-[3rem]">A</p>
      <p>24px</p>
    </div>
  </div>

  <p className="font-semibold text-[1.5rem] mt-8">Problem approch</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
    consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
    reiciendis nobis magnam aliquid facilis.
  </p>

  <p className="font-semibold text-[1.5rem] mt-8">Success mission</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
    consectetur vel exercitationem. Ipsam laboriosam doloribus molestiae
    reiciendis nobis magnam aliquid facilis.
  </p>
</div>
</div>

<div className="mt-[5rem]"></div>
    </>
  );
}

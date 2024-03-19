import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

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
      {/* 1st section */}
      <div className="w-full bg-black text-white  flex flex-col justify-center items-center py-[10rem]">
        <div className="responsive-container">
          <p className="uppercase font-semibold sm:text-xs md:text-base">
            Globally build a strong digital <br /> presence that people will
            love
          </p>

          <div className="">
            <p className="font-bold sm:text-[1.5rem] md:text-[3.5rem] lg:text-[5rem] 2xl:text-[7rem]">
              Excellence Defines Us.
            </p>
            <Image
              alt="meeting png"
              src={"/meeting.jpg"}
              width={500}
              height={500}
              className="rounded-xl w-full sm:mt-4"
              priority={true}
            />
          </div>
        </div>

        <hr className="w-full border-zinc-700 border mt-[5rem]" />

        <div className="responsive-container flex justify-between mt-4">
          <Link href={"/contact"}>
            <Button className="rounded-full bg-white text-black text-sm hover:bg-white flex justify-center items-center group ">
              Book a call
              <span className="rounded-full bg-black ml-2 group-hover:ml-4 transition-all duration-300 ease-linear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  transform="rotate(-90)"
                >
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m17 13l-5 5m0 0l-5-5m5 5V6"
                  ></path>
                </svg>
              </span>
            </Button>
          </Link>
          <p className="text-sm text-white">Scroll to explore</p>
        </div>
      </div>

      {/* about us */}
      <hr className="w-full border-zinc-400 border mt-[5rem]" />
      <div className="responsive-container grid sm:grid-cols-1 lg:grid-cols-3">
        <p className="font-medium text-2xl">About us</p>
        <section className="col-span-2 sm:text-[1.25rem] sm:mt-7 lg:mt-0 lg:text-[2.8rem] font-medium">
          <p className="">
            Swedweb is a design and devlopment company with an adaptive approach
            to solve problem
          </p>
          <p className="mt-[3rem]">
            We help companise and business to build their digital products, app
            & site to build a strong digital presence that people will love
          </p>
        </section>
      </div>

      {/* number section */}
      <section className="responsive-container grid sm:grid-cols-1 lg:grid-cols-3 mt-[5rem]">
        <p className="font-medium text-2xl">In number</p>
        <div className="col-span-2 grid sm:grid-cols-1 sm:mt-[2rem] lg:mt-0 md:grid-cols-3 gap-x-[5rem]">
          <div>
            <p className="h-[5rem]">Projects we completed along the way</p>
            <p className="font-bold text-[5rem]">2+</p>
          </div>

          <div>
            <p className="h-[5rem]">
              Globally taking our services from all over the world
            </p>
            <p className="font-bold text-[5rem]">2+</p>
          </div>

          <div>
            <p className="h-[5rem]">
              Our global team comprises experts from around the world
            </p>
            <p className="font-bold text-[5rem]">2+</p>
          </div>
        </div>
      </section>

      {/* team member section */}
      <section className="responsive-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[5rem] gap-4 mb-[4rem]">
        {member.map((data, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <Image
                    src={`/${data.image}`}
                    width={200}
                    height={200}
                    alt={data.description}
                    className="w-full"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-[1.5rem]">{data.name}</p>
                <p className="">{data.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* testimonial section */}

      <section className="w-full bg-black text-white flex justify-center items-center py-[10rem]">
        <div className="responsive-container">
          <p className="font-semibold">Testimonial</p>

          <p className="sm:text-[1.5rem] md:text-[3rem] font-bold mt-[3rem]">
            "l am happy with the process and the result they deliver for all of
            their work. TopNotch Agency have worked us up to the top for key
            search terms and are making sure we stay there. Amazing team"
          </p>
          <div className="mt-[3rem] flex gap-4">
            <Image
              src={"/face1.png"}
              width={50}
              height={50}
              alt={"peopleface.jpg"}
            />
            <div>
              <p className="font-semibold">Domika</p>
              <p className="text-sm">SEO of genski</p>
            </div>
          </div>
        </div>
      </section>

      {/*  Interested to work with us */}
      <div className="w-full  flex flex-col justify-center items-center py-[5rem]">
        <hr className="w-full border-zinc-400 border my-[5rem]" />
        <p className="text-center font-semibold text-[2rem]">
          Interested to work with us
        </p>
        <Button className="rounded-full border bg-black text-white text-md flex justify-center items-center group mt-4">
          Book a call
          <span className="rounded-full bg-white ml-2 group-hover:ml-4 transition-all duration-300 ease-linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              transform="rotate(-90)"
            >
              <path
                fill="none"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m17 13l-5 5m0 0l-5-5m5 5V6"
              ></path>
            </svg>
          </span>
        </Button>

        <hr className="w-full border-zinc-400 border my-[5rem]" />
      </div>
    </>
  );
}

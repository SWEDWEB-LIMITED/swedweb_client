import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div>
        <h4 className="sm:text-[2rem] lg:text-[4rem] font-bold text-center">
          Quality & Style Define Our design and development Work Approach
        </h4>
        <div className="flex sm:flex-col lg:flex-row justify-center items-center sm:gap-8 lg:gap-6 xl:gap-[10rem] ">
          <Image
            alt="home hero image"
            src="/2.jpg"
            width={200}
            height={200}
            className="rounded-xl w-auto sm:h-[11rem] md:h-[18rem] lg:h-[20rem] mt-[4rem]"
          />
          <div className="flex flex-col">
            <p className="sm:w-full lg:w-[25rem] sm:text-center lg:text-start">
              Swedweb is your trusted partner with experience, successfully
              delivering projects of various scales. Explore our comprehensive
              services to accelerate your business growth today.
            </p>
            <Button className="mt-[3rem] rounded-full">
              Let's Talk{" "}
              <span className="ml-[0.5rem]">
                <Image src={"/arrow.svg"} width={18} height={12} alt="svg" />
              </span>{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

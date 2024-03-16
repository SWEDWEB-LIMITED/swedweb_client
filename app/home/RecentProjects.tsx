import Image from "next/image";

export default function RecentProjects() {
  return (
    <div className="w-full">
      <h4 className="sm:text-[2rem] lg:text-[4rem] sm:text-center lg:text-start font-bold ">
        Our Recent Projects
      </h4>
      <div className="w-full sm:flex lg:block sm:justify-center sm:items-center lg:justify-normal lg:items-start mt-4">
        <p className="sm:w-full md:w-[25rem] lg:w-[25rem] sm:text-center lg:text-start">
          Carefully Crafted in Close Collaboration with Client Needs, We Proudly
          Showcase Our Collective Success Stories and Achievements
        </p>
      </div>

      <div className="mt-6 font-semibold cursor-pointer flex sm:justify-center lg:justify-end items-center">
        <p>View all</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          transform="rotate(-90)"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            d="m17 13l-5 5m0 0l-5-5m5 5V6"
          ></path>
        </svg>
      </div>
      {/* grid card */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 place-items-center mt-[5rem]">
        <Card img="projects.png" />
        <Card img="projects2.png" />
        <Card img="projects.png" />
      </div>
    </div>
  );
}

const Card = ({ img }: { img: string }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group">
      <div className="absolute w-full bg-black/40 h-0 transition-all ease-linear duration-300 group-hover:h-full"></div>

      <Image
        className="max-w-sm h-[50rem]"
        src={`/${img}`}
        alt="Sunset in the mountains"
        width={500}
        height={500}
      />
    </div>
  );
};

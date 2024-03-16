import Card from "./Card";

export default function Services() {
  return (
    <>
      <div className="w-full">
        <h4 className="sm:text-[2rem] lg:text-[4rem] sm:text-center lg:text-start font-bold ">
          Service We Provide
        </h4>
        <div className="w-full sm:flex lg:block sm:justify-center sm:items-center lg:justify-normal lg:items-start mt-4">
          <p className="sm:w-full md:w-[25rem] lg:w-[25rem] sm:text-center lg:text-start">
            We build product close to our herat. We make your idea to reality
            and make your dream sucessful with awesome experince.
          </p>
        </div>

        <Card />
      </div>
    </>
  );
}

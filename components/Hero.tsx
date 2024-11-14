import Image from "next/image";
import { Button } from "./ui/button";
import { CirclePlay } from "lucide-react";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* TODO: Replace with Elderly image  */}
      <div className="hero-map" />

      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="assets/landing/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        {/* TODO: Change later */}
        <h1 className="bold-52 lg:bold-88">Lorem ipsum imperatur</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque, nunc nec. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed pellentesque, nunc nec.
        </p>
        {/* Reviews */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="assets/landing/star.svg"
                alt="star"
                width={20}
                height={20}
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            20
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button className=" text-white bg-blue-700  p-7 text-18-bold">
            Buy Product
          </Button>
          <Button className="p-7 text-18-bold">
            <CirclePlay color="#1d4ed8" />
            How does it work?
          </Button>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 ">
          {/* Location */}
          {/* TODO: Replace i */}
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                src="assets/landing/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Den Haag, The Netherlands</p>

            {/* Distance */}
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">173.28 km</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">20 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
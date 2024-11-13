import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* TODO: REPLACE */}
        <Image
          src="/assets/landing/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-700">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            {/* TODO: Selling */}
            Lorem ipsum imperatur
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aliquam eum vel et ad quod est, sit tempora provident labore,
            commodi eligendi quo adipisci omnis. Quo repellat vitae molestias
            earum!
          </p>
        </div>
      </div>

      {/* TODO: Replace with meldkamer image */}
      <div className="flexCenter max-container relative w-full">
        <Image
          src="/assets/landing/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/assets/landing/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full gap-1">
                {/* TODO: Destination */}
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-blue-700"> 28 min</p>
              </div>
              {/* TODO: Location */}
              <p className="bold-20 mt-2">Eindhoven</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Lorem ipsum</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Lorem</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

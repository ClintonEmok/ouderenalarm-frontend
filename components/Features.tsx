import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex flex-col lg:flex-row lg:justify-end lg:items-start">
        <div className="flex justify-center lg:justify-end flex-1 lg:min-h-[900px]">
          <Image
            src="/assets/landing/black.jpeg"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex flex-col items-center lg:items-start w-full lg:w-[60%] text-center lg:text-left">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex flex-col items-center lg:items-start w-full text-center lg:text-left">
      <div className="rounded-full p-4 lg:p-7 bg-primary-500">
        <Image src={icon} alt={title} width={38} height={38} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;

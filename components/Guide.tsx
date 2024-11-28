import React from "react";

interface GuideProps {
  header: string;
  subheader: string;
  description: string;
  flip?: boolean;
}

const Guide = ({
  header,
  subheader,
  description,
  flip = false,
}: GuideProps) => {
  return (
    <section
      className={`flex flex-col items-center text-center ${
        flip ? "lg:flex-col-reverse" : "lg:flex-col"
      }`}
    >
      <div
        className={`padding-container max-container w-full pb-24 lg:flex lg:items-center ${
          flip ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Left Column */}
        <div className="flex-1 lg:items-end text-center lg:text-left">
          <p
            className={`uppercase regular-18 mb-3 xl:max-w-[560px] text-blue-700 ${
              flip ? "lg:text-right" : "lg:text-left"
            }`}
          >
            {header}
          </p>
          <h2
            className={`bold-40 lg:bold-64 xl:max-w-[560px] ${
              flip ? "lg:text-right" : "lg:text-left"
            }`}
          >
            {subheader}
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex-1 text-center lg:text-left">
          <p
            className={`regular-16 text-gray-30 xl:max-w-[520px] ${
              flip ? "lg:text-left" : "lg:text-right"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;

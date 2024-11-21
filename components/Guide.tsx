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
      className={`flexCenter ${
        flip ? "lg:flex-col-reverse" : "lg:flex-col"
      } flex-col`}
    >
      <div
        className={`padding-container max-container w-full pb-24 lg:flex lg:items-center ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} "flex-col"`}
      >
        {/* Left Column */}
        <div className="flex-1 items-end">
          <div className="">
            <p
              className={`uppercase regular-18 -mt-1 mb-3 xl:max-w-[560px] text-blue-700 ${flip ? "text-right" : "text-left"}`}
            >
              {header}
            </p>
          </div>
          <h2
            className={`bold-40 lg:bold-64 xl:max-w-[560px] ${flip ? "text-right" : "text-left"}`}
          >
            {subheader}
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <p
            className={`regular-16 text-gray-30 xl:max-w-[520px] ${flip ? "text-left" : "text-right"}`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;

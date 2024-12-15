import Image from "next/image";
import React from "react";

const PortalShowcase = () => {
  return (
    <div className="flex flex-col items-center bg-white text-center gap-10">
      {/* Headline */}
      <h2 className="bold-32 xl:bold-40 mb-4 px-4 max-w-[1000px] ">
        Ouderen alarm belooft dat u en uw naasten zich nooit meer ongerust
        hoeven te voelen!
      </h2>

      {/* Wrapper Div */}
      <div className="relative flex justify-center items-center w-full">
        {/* Blue Background Div */}
        <div className="w-full h-[20vh] bg-gradient-to-r from-[#43A3FA] to-[#286094] absolute"></div>

        {/* Black-Bordered Div */}
        <div className="w-[90%] md:w-[70%] h-[40vh] max-w-[700px] bg-white border-4 border-black rounded-lg relative z-10 flex items-center justify-center">
          <Image src={"/assets/product/portal.png"} fill alt="portaal" />
        </div>
      </div>
    </div>
  );
};

export default PortalShowcase;

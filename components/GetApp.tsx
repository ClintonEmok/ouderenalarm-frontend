import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Apple } from "lucide-react";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] pt-5">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Ik wil het 14 dagen gratis testen!
          </h2>
          <p className="regular-16 text-gray-10">
            {/* Test het ouderen alarm eerst 14 dagen gratis, en besluit daarna of u
            het langer wilt gaan gebruiken. */}
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button className="bg-primary-500 text-white font-bold p-7 text-18-bold">
              <Apple />
              App Store
            </Button>

            <Button className="bg-primary-500 text-white font-bold p-7 text-18-bold">
              <Apple />
              Play Store
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/assets/landing/multi.jpeg"
            alt="phones"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;

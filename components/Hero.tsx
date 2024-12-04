import Image from "next/image";
import { Button } from "./ui/button";
import { CirclePlay } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* TODO: Replace with Elderly image  */}
      {/* <div className="hero-map" /> */}

      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* TODO: Change later */}
        <h1 className="bold-40 lg:bold-64">
          Binnen 30 seconde hulp, Verminder overlijdensrisico, Blijf veilig
          thuiswonen.
        </h1>
        <p className="regular-24 mt-6 text-gray-30 xl:max-w-[520px]">
          Doe de GRATIS test hieronder en ontdek in 30 seconden of ons
          noodoproepsysteem een oplossing voor uw veiligheid is
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
        <div className="flex flex-col w-full gap-3 sm:flex-row text-white">
          <Button className=" text-white bg-primary-500 p-7 text-18-bold">
            Doe de GRATIS veiligheidstest
          </Button>
          <Button className="p-7 text-lg text-black" asChild>
            <Link href="#Working">
              <CirclePlay color="#1d4ed8" />
              Hoe werkt het?
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

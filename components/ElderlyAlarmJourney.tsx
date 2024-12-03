import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const ElderlyAlarmJourney = () => {
  const steps = [
    {
      id: 1,
      title: "Start je gratis risico test:",
      description:
        "Zet de eerste stap naar het begrijpen van je veiligheidsrisico’s en ontdek of Ouderen alarm iets voor jou is.",
      cta: "Start gratis risico test",
    },
    {
      id: 2,
      title: "Gratis kennismakingsgesprek:",
      description:
        "Plan een gratis kennismakingsgesprek in met een van onze veiligheidsexperts om je leefsituatie wat beter te begrijpen en je veiligheidsreis zo goed mogelijk te starten.",
      cta: "Claim gratis kennismakingsgesprek",
    },
    {
      id: 3,
      title: "Test het 14 dagen Gratis:",
      description:
        "Test het ouderen alarm eerst 14 dagen gratis, en besluit daarna of u het langer wilt gaan gebruiken.",
      cta: "Ik wil het 14 dagen gratis testen!",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Header Section */}
        <h2 className="bold-32 lg:bold-40 mb-4 text-green-600">
          Jouw ouderen alarm avontuur start hier:
        </h2>
        <p className="text-gray-700 text-lg mb-12 regular-16">
          Wilt u 1 van de 27 ouderen zijn die dit betrouwbare ouderen alarm 100%
          GRATIS mag testen?
        </p>
        <div className="mb-8 max-w-2xl">
          {/* Image */}
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/landing/box-cropped.jpeg" // Replace with the actual path to your image
              alt="Ouderen Alarm"
              width={600} // Adjust the width based on your requirements
              height={300} // Adjust the height based on your requirements
            />
          </div>
          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-left font-bold">
            Ons exclusieve senioren alarm verandert zoveel levens. Elke dag weer
            vertrouwen 30 nieuwe senioren op onze betrouwbare service, en
            inmiddels helpen we al meer dan 25.000 tevreden ouderen.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-left font-bold">
            De waarheid is dat medische experts ons apparaat het meest
            betrouwbare senioren alarm vinden van Nederland,
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-left font-bold">
            En daarom bieden we{" "}
            <span className="font-bold">VOOR HET EERST</span> 250 senioren de
            mogelijkheid om ons exclusieve senioren alarm 14 dagen GRATIS te
            testen.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-left font-bold">
            Ja dat klopt, je kunt met 0 euro testen of dit senioren alarm
            voldoet aan uw verwachtingen!
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border hover:border-blue-700"
            >
              {/* Icon */}
              <div className="bg-primary-500 text-green-600 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-2xl">
                {/* {step.icon} */}
                <Check size={48} color="#fff" strokeWidth={3} />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <a
          href="#"
          className="bg-primary-500 text-white py-3  px-8 font-bold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Ik wil het 14 dagen gratis testen!
        </a>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mt-4 font-semibold">
          Plan een gesprek met ons. Ontdek hoe u uw veiligheidssituatie kunt
          verbeteren en met een gerust hart kunt leven.
        </p>
      </div>
    </section>
  );
};

export default ElderlyAlarmJourney;

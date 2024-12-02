import { MoveDown } from "lucide-react";
import Image from "next/image";

export default function ElderAlarm() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-8">
          Dit is hoe ons betrouwbare{" "}
          <span className="text-blue-600">"ouderen alarm"</span> binnen het
          gouden uur uw leven redt!
        </h1>
        <div className="flex flex-col gap-4">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <p className="font-bold mb-2">
                Sla gemakkelijk alarm met 1 druk op de knop
              </p>
              <p className="text-gray-600">
                Na een harde val slaan de slimme sensors in het exclusieve
                apparaat zelfs automatisch alarm!
                <br />
                <br />
                Wanneer u het alarm af laat gaan zal het direct tegen u zeggen:
              </p>
              <p className="italic font-semibold mt-2">
                “Blijf rustig u wordt binnen 30 seconden geholpen”
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <Image
                width={256}
                height={256}
                src="/assets/landing/journey-2.jpeg" // Replace with the appropriate path
                alt="Person using alarm"
                className="w-full rounded-lg shadow p-1"
              />
              <MoveDown className="mt-4 w-6 h-6 md:w-12 md:h-12 lg:w-24 lg:h-24 text-gray-500" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <p className="font-bold mb-2">
                Veiligheidsexperts nemen contact op
              </p>
              <p className="text-gray-600">
                De 24/7 beschikbare veiligheidsexperts zullen binnen 30 seconden
                contact met u opnemen.
                <br />
                <br />
                Met de ingebouwde gps tracker weten ze dan ook precies waar u
                bent!
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <Image
                width={256}
                height={256}
                src="/assets/landing/journey-1.jpg" // Replace with the appropriate path
                alt="Security experts"
                className="w-full rounded-lg shadow p-1"
              />
              <MoveDown className="mt-4 w-6 h-6 md:w-12 md:h-12 lg:w-24 lg:h-24 text-gray-500" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <p className="font-bold mb-2">
                Veiligheidsexperts nemen contact op
              </p>
              <p className="text-gray-600">
                Hulpverleners komen zo snel mogelijk naar de locatie van het
                ongeval en zorgen ervoor dat u de hulp krijgt die u verdient.
                <br />
                <br />
                Zodat u verzekerd bent van snel herstel omdat u binnen “het
                gouden uur” hulp heeft gekregen!
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <Image
                width={256}
                height={256}
                src="/assets/landing/journey-2.jpeg" // Replace with the appropriate path
                alt="Family"
                className="w-full rounded-lg shadow p-1"
              />
              <MoveDown className="mt-4 w-6 h-6 md:w-12 md:h-12 lg:w-24 lg:h-24 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

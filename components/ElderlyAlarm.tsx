import { MoveDown, SendHorizontal } from "lucide-react";
import Image from "next/image";

export default function ElderAlarm() {
  return (
    <div className="bg-white py-10 flex flex-col items-center gap-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl max-w-3xl font-bold text-gray-800 mb-8">
          Dit is hoe ons betrouwbare{" "}
          <span className="text-primary-500">{"ouderen alarm"}</span> elke 48
          minuten een leven redt!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1 */}
          <div className="bg-primary-500 shadow-lg p-6 rounded-lg text-center order-1 row-span-1 col-span-1">
            <p className="font-bold mb-2 text-white">
              Sla gemakkelijk alarm met 1 druk op de knop
            </p>
            <p className="text-white">
              Na een harde val slaan de slimme sensors in het exclusieve
              apparaat zelfs automatisch alarm!
              <br />
              <br />
              Wanneer u het alarm af laat gaan zal het direct tegen u zeggen:
            </p>
            <p className="italic font-semibold mt-2 text-white">
              “Blijf rustig u wordt binnen 30 seconden geholpen”
            </p>
          </div>
          <div className="flex flex-col items-center order-2">
            <Image
              width={256}
              height={256}
              src="/assets/landing/journey-1.jpg" // Replace with the appropriate path
              alt="Person using alarm"
              className="w-full rounded-lg shadow p-1"
            />
            <MoveDown className="mt-4 w-24 h-24 text-gray-500" />
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center order-4 md:order-3">
            <Image
              width={256}
              height={256}
              src="/assets/landing/journey-2.jpeg" // Replace with the appropriate path
              alt="Security experts"
              className="w-full rounded-lg shadow p-1"
            />
            <MoveDown className="mt-4 w-24 h-24 text-gray-500" />
          </div>
          <div className="bg-primary-500 shadow-lg p-6 rounded-lg text-center order-3 md:order-4">
            <p className="font-bold mb-2 text-white">
              Veiligheidsexperts nemen contact op
            </p>
            <p className="text-white">
              De 24/7 beschikbare veiligheidsexperts zullen binnen 30 seconden
              contact met u opnemen.
              <br />
              <br />
              Met de ingebouwde gps tracker weten ze dan ook precies waar u
              bent!
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-primary-500 shadow-lg p-6 rounded-lg text-center order-5">
            <p className="font-bold mb-2 text-white">
              Hulpverleners komen zo snel mogelijk
            </p>
            <p className="text-white">
              Hulpverleners komen zo snel mogelijk naar de locatie van het
              ongeval en zorgen ervoor dat u de hulp krijgt die u verdient.
              <br />
              <br />
              Zodat u verzekerd bent van snel herstel omdat u binnen “het gouden
              uur” hulp heeft gekregen!
            </p>
          </div>
          <div className="flex flex-col items-center order-6">
            <Image
              width={256}
              height={256}
              src="/assets/landing/journey-2.jpeg" // Replace with the appropriate path
              alt="Family"
              className="w-full rounded-lg shadow p-1"
            />
            <MoveDown className="mt-4 w-24 h-24 text-gray-500" />
          </div>
        </div>
      </div>{" "}
      {/* Call-to-Action */}
      <a
        href="#"
        className="bg-primary-500 flex gap-1 items-center justify-center text-white py-3 max-w-2xl md:w-2/5 px-8 font-bold rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Ik wil het gratis testen!
        <SendHorizontal />
      </a>
    </div>
  );
}

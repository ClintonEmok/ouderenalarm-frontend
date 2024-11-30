// const EmergencyInfo = () => {
//   return (
//     <div className="flex flex-wrap items-center justify-center text-center space-x-4 md:space-x-6 md:space-y-0 space-y-2 md:flex-row px-4">
//       <span className="bold-20">
//         30 seconden, is wat we nodig hebben om u te helpen
//       </span>
//       <span className="hidden md:inline font-bold">-</span>
//       <span className="bold-20">
//         15 minuten is de tijd voordat er hulpdiensten arriveren
//       </span>
//       <span className="hidden md:inline font-bold">-</span>
//       <span className="bold-20">87% kleinere kans op langdurig letsel</span>
//     </div>
//   );
// };

// export default EmergencyInfo;
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  // EmergencyInfo content
  const carouselContent = [
    `"30 seconden, is wat we nodig hebben om u te helpen"`,
    `"15 minuten is de tijd voordat er hulpdiensten arriveren"`,
    `"87% kleinere kans op langdurig letsel"`,
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto flex items-center"
      >
        <CarouselContent>
          {carouselContent.map((text, index) => (
            <CarouselItem key={index}>
              <div className="p-4 flex justify-center items-center text-center w-full">
                <span className="text-lg font-semibold">{text}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

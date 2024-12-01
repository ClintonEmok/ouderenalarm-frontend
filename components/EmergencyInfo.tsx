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
import AutoScroll from "embla-carousel-auto-scroll";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(AutoScroll({ playOnInit: true }));

  // EmergencyInfo content
  const carouselContent = [
    {
      type: "text",
      content: "30 seconden, is wat we nodig hebben om u te helpen",
    },
    {
      type: "text",
      content: "15 minuten is de tijd voordat er hulpdiensten arriveren",
    },
    { type: "text", content: "87% kleinere kans op langdurig letsel" },
    // { type: "image", content: "https://placehold.co/300x100" },
    // { type: "image", content: "https://placehold.co/300x100" },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto flex items-center"
      >
        <CarouselContent>
          {carouselContent.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-4 w-full flex justify-center">
                {/* Card Structure */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg">
                  {item.type === "text" ? (
                    <div className="p-6 flex justify-center items-center text-center">
                      <span className="text-lg font-semibold">
                        {item.content}
                      </span>
                    </div>
                  ) : (
                    <div className="p-4">
                      <img
                        src={item.content}
                        alt={`Carousel item ${index + 1}`}
                        className="w-full h-auto max-h-72 object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

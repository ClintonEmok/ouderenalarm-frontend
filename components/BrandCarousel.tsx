import * as React from "react";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    AutoScroll({ playOnInit: true, stopOnInteraction: false })
  );

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
    { type: "image", content: "assets/logos/AD.svg" },
    { type: "image", content: "assets/logos/NOS.svg" },
    { type: "image", content: "assets/logos/Telegraaf.svg" },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full  mx-auto flex items-center"
      >
        <CarouselContent>
          {carouselContent.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-4 w-full flex justify-center">
                {/* Card Structure */}
                <div className="bg-white shadow-md rounded-md overflow-hidden w-full max-w-lg">
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
                        className="w-full h-auto max-h-20 object-fit"
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

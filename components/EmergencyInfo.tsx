const EmergencyInfo = () => {
  return (
    <div className="flex flex-wrap items-center justify-center text-center space-x-4 md:space-x-6 md:space-y-0 space-y-2 md:flex-row px-4">
      <span className="bold-20">
        30 seconden, is wat we nodig hebben om u te helpen
      </span>
      <span className="hidden md:inline font-bold">-</span>
      <span className="bold-20">
        15 minuten is de tijd voordat er hulpdiensten arriveren
      </span>
      <span className="hidden md:inline font-bold">-</span>
      <span className="bold-20">87% kleinere kans op langdurig letsel</span>
    </div>
  );
};

export default EmergencyInfo;

import Camp from "@/components/Camp";
import ElderlyAlarmJourney from "@/components/ElderlyAlarmJourney";
import EmergencyInfo from "@/components/EmergencyInfo";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

import { GUIDE_SECTIONS } from "@/constants";

// TODO: move to register page (route)
export default function Home() {
  return (
    <>
      <Hero />
      {/* <BrandShowcase /> */}
      <EmergencyInfo />
      <Camp />
      {GUIDE_SECTIONS.map((section, index) => (
        <Guide key={index} {...section} />
      ))}
      <Features />
      <ElderlyAlarmJourney />
      {/* <Blog /> */}
      <GetApp />
    </>
  );
}

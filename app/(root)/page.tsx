"use client";
import Camp from "@/components/Camp";
import ElderAlarm from "@/components/ElderlyAlarm";
import ElderlyAlarmJourney from "@/components/ElderlyAlarmJourney";
import EmergencyInfo, {
  CarouselDemo,
  CarouselPlugin,
} from "@/components/EmergencyInfo";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

import { GUIDE_SECTIONS } from "@/constants";

// TODO: move to register page (route)
export default function Home() {
  return (
    <>
      <Hero />
      {/* <BrandShowcase /> */}
      {/* <EmergencyInfo /> */}
      <CarouselPlugin />
      <Camp />
      <Testimonials />
      {GUIDE_SECTIONS.map((section, index) => (
        <Guide key={index} {...section} />
      ))}
      <ElderAlarm />
      <Features />
      <ElderlyAlarmJourney />
      {/* <Blog /> */}
      <GetApp />
    </>
  );
}

"use client";
import Camp from "@/components/Camp";
import ElderAlarm from "@/components/ElderlyAlarm";
import ElderlyAlarmJourney from "@/components/ElderlyAlarmJourney";
import { CarouselPlugin } from "@/components/BrandCarousel";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

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
      <ElderAlarm />
      <Features />
      <ElderlyAlarmJourney />
      {/* <Blog /> */}
      <GetApp />
    </>
  );
}

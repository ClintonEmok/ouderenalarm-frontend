"use client";
import ElderlyCarousel from "@/components/ElderlyCarousel";
import ElderlyAlarm from "@/components/ElderlyAlarm";
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
      <CarouselPlugin />
      <ElderlyCarousel />
      <Testimonials />
      <ElderlyAlarm />
      <Features />
      <ElderlyAlarmJourney />
      {/* <Blog /> */}
      <GetApp />
    </>
  );
}

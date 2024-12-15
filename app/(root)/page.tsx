"use client";
import ElderlyCarousel from "@/components/ElderlyCarousel";
import ElderlyAlarm from "@/components/ElderlyAlarm";
import ElderlyAlarmJourney from "@/components/ElderlyAlarmJourney";
import { CarouselPlugin } from "@/components/BrandCarousel";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import PortalShowcase from "@/components/PortalShowcase";

// TODO: move to register page (route)
export default function Home() {
  return (
    <>
      <Hero />
      <CarouselPlugin />
      <ElderlyCarousel />
      <ElderlyAlarm />
      <PortalShowcase />
      <Testimonials />
      <ElderlyAlarmJourney />
    </>
  );
}

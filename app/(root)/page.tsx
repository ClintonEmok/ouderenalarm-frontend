import Camp from "@/components/Camp";
import ElderlyAlarmJourney from "@/components/ElderlyAlarmJourney";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import InfiniteCarousel from "@/components/LogoCarousel";
import { GUIDE_SECTIONS, LOGOS } from "@/constants";

// TODO: move to register page (route)
export default function Home() {
  return (
    <>
      <Hero />
      {/* <BrandShowcase /> */}
      <InfiniteCarousel logos={LOGOS} />
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

import Blog from "@/components/Blog";
import BrandShowcase from "@/components/BrandShowcase";
import Camp from "@/components/Camp";
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
      <BrandShowcase />
      <Camp />
      {GUIDE_SECTIONS.map((section, index) => (
        <Guide key={index} {...section} />
      ))}
      <Features />
      <Blog />
      <GetApp />
    </>
  );
}

export const metadata = {
  title: "Guido Santillan | Web Developer living in Berlin",
  description: "Guido Santillan personal page",
};

import Hero from "@/components/hero-home";
import Features from "@/components/features-home";
import Skills from "@/components/features-skills";
import Goals from "@/components/features-goals";
import FeaturesBlocks from "@/components/features-blocks";
import FeaturesWorld from "@/components/features-world";
import News from "@/components/news";
import Cta from "@/components/cta";

// TODO: add about, blog, skills, resources pages

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Skills />
      <Goals />
      {/* <News /> */}
      <Cta />
    </>
  );
}

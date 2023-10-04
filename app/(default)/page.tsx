export const metadata = {
  title: "Calm River Consulting",
  description:
    "Calm River Consulting. One stop shop for all your consulting needs.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Services from "@/components/services";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Services />
      <Newsletter />
    </>
  );
}

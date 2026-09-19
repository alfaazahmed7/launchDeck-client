import type { Metadata } from "next";
import Banner from "@/components/homepage/Banner/Banner";
import CallToAction from "@/components/homepage/CallToAction/CallToAction";
import Categories from "@/components/homepage/Categories/Categories";
import FAQ from "@/components/homepage/FAQ/FAQ";
import FeatruedProjects from "@/components/homepage/featured-projects/FeatruedProjects";
import PlatformStats from "@/components/homepage/PlatformStats/PlatformStats";
import WhyLaunchDeck from "@/components/homepage/WhyLaunchDeck/WhyLaunchDeck";

export const metadata: Metadata = {
  title: "LaunchDeck — Discover, Publish and Launch Developer Projects",
  description:
    "Explore open-source software, developer tools, and elite applications built by creators. Publish your own project and launch it to a global builder network.",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <FeatruedProjects />
      <Categories />
      <WhyLaunchDeck />
      <PlatformStats />
      <FAQ />
      <CallToAction />
    </div>
  );
}

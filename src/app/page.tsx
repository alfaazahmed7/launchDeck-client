import Banner from "@/components/homepage/Banner/Banner";
import Categories from "@/components/homepage/Categories/Categories";
import FeatruedProjects from "@/components/homepage/featured-projects/FeatruedProjects";
import PlatformStats from "@/components/homepage/PlatformStats/PlatformStats";
import WhyLaunchDeck from "@/components/homepage/WhyLaunchDeck/WhyLaunchDeck";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeatruedProjects />
      <Categories />
      <WhyLaunchDeck />
      <PlatformStats />
    </div>
  );
}

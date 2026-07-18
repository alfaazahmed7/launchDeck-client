import Banner from "@/components/homepage/Banner/Banner";
import Categories from "@/components/homepage/Categories/Categories";
import FeatruedProjects from "@/components/homepage/featured-projects/FeatruedProjects";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeatruedProjects />
      <Categories />
    </div>
  );
}

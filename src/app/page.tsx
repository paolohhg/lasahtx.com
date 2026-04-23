import { HomeHero } from "./_home/HomeHero";
import { HomeWhatWeDo } from "./_home/HomeWhatWeDo";
import { HomeAuthority } from "./_home/HomeAuthority";
import { HomeTestimonials } from "./_home/HomeTestimonials";
import { HomeFinalCTA } from "./_home/HomeFinalCTA";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeWhatWeDo />
      <HomeAuthority />
      <HomeTestimonials />
      <HomeFinalCTA />
    </main>
  );
}

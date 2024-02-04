import Career from "@/src/components/career";
import FanbaseSection from "@/src/components/fanbase-section";
import HeroSection from "@/src/components/hero-section";
import StarSection from "@/src/components/star-section";
import StatsSection from "@/src/components/stats-section";


export default function Home() {
  return (
    <main >
      <HeroSection/>
      <Career/>
      <StatsSection/>
      <StarSection/>
      <FanbaseSection/>
    </main>
  );
}

import HeroSection from "@/components/home/HeroSection";
import UpcomingMatches from "@/components/home/UpcomingMatches";
import PopularPredictions from "@/components/home/PopularPredictions";
import HowItWorks from "@/components/home/HowItWorks";
import Leaderboard from "@/components/home/Leaderboard";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24 pb-24">
      <HeroSection />
      <UpcomingMatches />
      <PopularPredictions />
      <HowItWorks />
      <Leaderboard />
      <CTASection />
    </main>
  );
}

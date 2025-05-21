import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import GetFundedSection from "@/components/GetFundedSection"
import Payout from "@/components/Payout"


export default function Home() {
  return (
    <main>
      <Hero />
      <Plans />
      <GetFundedSection />
      <Payout />
    </main>
  );
}

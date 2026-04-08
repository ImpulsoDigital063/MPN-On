import Hero from "@/components/Hero";
import StickyHeader from "@/components/StickyHeader";
import VSL from "@/components/VSL";
import PainPoints from "@/components/PainPoints";
import AboutEduardo from "@/components/AboutEduardo";
import Opportunity from "@/components/Opportunity";
import Results from "@/components/Results";
import CaseStudy from "@/components/CaseStudy";
import OpportunityBonus from "@/components/OpportunityBonus";
import Method from "@/components/Method";
import BonusGifts from "@/components/BonusGifts";
import Curriculum from "@/components/Curriculum";
import BrandStrip from "@/components/BrandStrip";
import Logistics from "@/components/Logistics";
import Support from "@/components/Support";
import Timeline from "@/components/Timeline";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBuyBar from "@/components/StickyBuyBar";
import SocialProofNotification from "@/components/SocialProofNotification";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <StickyHeader />
      <Hero />
      <VSL />
      <Opportunity />
      <PainPoints />
      <AboutEduardo />
      <CaseStudy />
      <OpportunityBonus />
      <Results />
      <Method />
      <BonusGifts />
      <Curriculum />
      <BrandStrip />
      <Logistics />
      <Support />
      <Timeline />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBuyBar />
      <SocialProofNotification />
      <WhatsAppButton />
    </main>
  );
}

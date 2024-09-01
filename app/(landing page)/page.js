import AboutSection from "../_components/AboutSection";
import FooterSection from "../_components/FooterSection";
import HeroSection from "../_components/HeroSection";
import HowItWorksSection from "../_components/HowItWorksSection";
import ImpactSection from "../_components/ImpactSection";
import IntroductionSection from "../_components/IntroductionSection";
import KeyFeaturesSection from "../_components/KeyFeaturesSection";
import Navbar from "../_components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <IntroductionSection />
      <KeyFeaturesSection />
      <ImpactSection />
      <HowItWorksSection />
      <AboutSection />
      <FooterSection /> */}
    </div>
  );
}

"use client"
import AboutCoalManagementIndia from "@/components/Home";
import AboutSection from "../_components/AboutSection";
import FooterSection from "../_components/FooterSection";
import HeroSection from "../_components/HeroSection";
import HowItWorksSection from "../_components/HowItWorksSection";
import ImpactSection from "../_components/ImpactSection";
import IntroductionSection from "../_components/IntroductionSection";
import KeyFeaturesSection from "../_components/KeyFeaturesSection";
import Navbar from "../_components/Navbar";
import AnimatedDiv from "@/components/animated_div";
import CalculateYourEmissions from "../_components/CalculateYourEmissions";
import Rahul from "../rahul/page";
import Image from "next/image";
import down from "../../public/down.svg"
import earth from "../../public/earth.jpg"
import { MoveDown } from "lucide-react";



export default function Home() {

  return (
    // <AnimatedDiv>
    <div className="flex flex-col justify-between h-screen ">
      <div className="flex flex-col">

        <HeroSection />
        <div className="flex gap-3 mb-48">
          <div className="text-3xl m-4  rounded-xl p-5">
            <div>

              The Earth is in dire straits, and it is up to us to ensure the planet remains the way we’d like it to be. Welcome to NeutralMINE, a platform dedicated to helping you track emissions and reduce pollution. Together, we can take the necessary steps toward a cleaner, more sustainable future for generations to come.
            </div>
            <div className="text-red-500 mt-11">
              LET'S GO NET ZERO AND SAVE EARTH
            </div>
            <div className="mt-40">
              OUR REPORTS <MoveDown className="inline" />
            </div>
            {/* <Image src={down} width={100} /> */}
          </div>
          <div className="rounded-xl overflow-clip m-5">

            <Image src={earth} />
          </div>
        </div>
        <Rahul />
        {/* <CalculateYourEmissions direction="end" />
        <CalculateYourEmissions /> */}
      </div>
      {/* 
      <KeyFeaturesSection />
      <ImpactSection />
      <HowItWorksSection />   
      <AboutSection />*/}
      <FooterSection />
    </div>
    // </AnimatedDiv>
  );
}

import React from "react";
import { HeroSection } from "./hero";
import { Company } from "./company";
import { Footer } from "./footer";

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Company />
      <Footer />
    </div>
  );
};

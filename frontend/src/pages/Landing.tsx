import React from "react";
import "../landing.css";
import { Hero } from "@/components/Landing/Hero";
import { Navbar } from "@/components/Landing/Navbar";
import { Beneficios } from "@/components/Landing/Beneficios";
import { Beneficios2 } from "@/components/Landing/Beneficios2";
import { LandingCTA } from "@/components/Landing/LandingCTA";
export const Landing = () => {
  return (
    <div className="landingWrapper relative">
      <Navbar />
      <Hero />
      <Beneficios />
      <LandingCTA />
      <Beneficios2 />
    </div>
  );
};

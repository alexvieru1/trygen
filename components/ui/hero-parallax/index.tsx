import React from "react";
import { HeroParallaxDesktop } from "./hero-parallax-desktop";
import { HeroParallaxMobile } from "./hero-parallax-mobile";
import { heroParallaxItemsDesktop, heroParallaxItemsMobile } from "@/lib/constants/hero-parallax-items";

export const HeroParallax = () => {
  return (
    <div>
      <div className="hidden md:block">
        <HeroParallaxDesktop products={heroParallaxItemsDesktop} />
      </div>

      <div className="block md:hidden">
        <HeroParallaxMobile products={heroParallaxItemsMobile}/>
      </div>
    </div>
  );
};
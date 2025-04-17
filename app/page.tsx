"use client";
import Footer from "@/components/ui/footer/footer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Loader from "@/components/ui/loader";
import Navbar from "@/components/ui/navbar";
import { OferteSection } from "@/components/ui/tabs-homepage";
import DespreNoiSection from "@/components/ui/testimonials-homepage";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2500); // simulate delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="">
      <Loader text="TRUPA TRYGEN & OANA PREDA" isLoading={isLoading} />
      {!isLoading && (
        <div className="min-h-[1000px]">
          <Navbar />
          <HeroParallax />
          <DespreNoiSection />
          <OferteSection />
          <Footer />
        </div>
      )}
    </div>
  );
}

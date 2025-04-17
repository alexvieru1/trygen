import React from "react";
import { AnimatedTestimonials } from "./animated-testimonials";
import { artistTestimonials } from "@/lib/constants/artist-testimonials";

const DespreNoiSection = () => {
  return (
    <div className="mb-20 px-4 md:px-8">
      <div className="text-center mb-12">
        <p className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hai să ne cunoaștem mai bine
        </p>
        <p className="text-gray-600 dark:text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Descoperă ce spun membrii formației despre muzică, experiență și
          pasiune – un mod sincer de a ne prezenta, dincolo de scenă.
        </p>
      </div>

      <AnimatedTestimonials testimonials={artistTestimonials} />
    </div>
  );
};

export default DespreNoiSection;

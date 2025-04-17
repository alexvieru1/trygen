import Footer from "@/components/ui/footer/footer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Navbar from "@/components/ui/navbar";
import { OferteSection } from "@/components/ui/tabs-homepage";
import DespreNoiSection from "@/components/ui/testimonials-homepage";

export default function Home() {
  
  return (
    <div className="h-[1000px]">
      <Navbar/>
      <HeroParallax />
      <DespreNoiSection/>
      <OferteSection/>
      <Footer />
    </div>
  );
}

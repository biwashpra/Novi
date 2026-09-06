import { HelloProvider } from "@/components/hello-effect/HelloProvider";
import Navbar from "@/components/navbar";
import { AboutUsSection } from "@/components/sections/AboutUs";
import { FeaturesSection } from "@/components/sections/Feature";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { LogoCloud } from "@/components/sections/LogoCloud";
import ProductScroll from "@/components/sections/product-scroll";


export default function Home() {
  return (
    <HelloProvider>
      <Navbar />
      <HeroSection />
      <ProductScroll />
      <FeaturesSection />
      <AboutUsSection />
      <LogoCloud />
      <HowItWorksSection />
      <Footer />
    </HelloProvider>
  );
}

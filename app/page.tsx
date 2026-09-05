import { HelloProvider } from "@/components/hello-effect/HelloProvider";
import Navbar from "@/components/navbar";
import { AboutUsSection } from "@/components/sections/AboutUs";
import { FeaturesSection } from "@/components/sections/Feature";
import { HeroSection } from "@/components/sections/Hero";
import ProductScroll from "@/components/sections/product-scroll";


export default function Home() {
  return (
    <HelloProvider>
      <Navbar />
      <HeroSection />
      <ProductScroll />
      <FeaturesSection />
      <AboutUsSection />
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8 pt-24">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Novi</h1>
          <p className="text-muted-foreground max-w-md">
            A project and task management tool built for fast-moving teams.
          </p>
        </div>
      </main>
    </HelloProvider>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { BoardPreview } from "./BoardPreview";

export function HeroSection() {
  return (
    <section
      id="product"
      className="scroll-mt-28 px-4 pt-36 pb-20 sm:px-6 sm:pt-44 sm:pb-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Run your team without the tab switching.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Novi brings tasks, docs, and conversations into one calm workspace
            built for small, fast-moving teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full px-6">
              Start free
              <ArrowUpRight className="ms-1" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6">
              <PlayCircle className="me-1" size={18} />
              See how it works
            </Button>
          </div>
        </div>

        <BoardPreview />
      </div>
    </section>
  );
}




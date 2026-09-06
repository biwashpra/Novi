import { Button } from "@/components/ui/button";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { BoardPreview } from "./BoardPreview";

export function HeroSection() {
  return (
    <section className="scroll-mt-24 px-4 pt-36 pb-6 sm:px-6 sm:pt-44 sm:pb-12"
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
            <button className="relative inline-flex h-9 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Start free
                <ArrowUpRight className="ms-1" size={18} />
              </span>
            </button>
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




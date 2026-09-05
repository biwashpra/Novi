"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AppleHelloEffectEnglish } from "./apple-hello-effect-english";
import { AppleHelloEffectHindi } from "./apple-hello-effect-hindi";
import { ChevronRight } from "lucide-react";

interface HelloScreenProps {
  onComplete: () => void;
}

export function HelloScreen({ onComplete }: HelloScreenProps) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === 0) {
      setIndex(1);
    } else {
      onComplete();
    }
  };

  return (
    <motion.div
      key="hello-overlay"
      initial={{ opacity: 1, y: 0 }}
      exit={{
        y: "-100%",
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1], // Custom shutter/shuttle cubic-bezier
        },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Skip Button positioned top right using shadcn Base UI Button */}
      <div className="absolute top-6 right-6 z-10">
        <Button
          variant="ghost"
          onClick={onComplete}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Skip
          <ChevronRight />
        </Button>
      </div>

      {/* Main Hello Writing Animation */}
      <div className="relative flex items-center justify-center w-full max-w-2xl px-4">
        <AnimatePresence mode="wait">
          {index === 0 ? (
            <AppleHelloEffectEnglish
              key="english"
              onAnimationComplete={handleNext}
            />
          ) : (
            <AppleHelloEffectHindi
              key="hindi"
              onAnimationComplete={handleNext}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

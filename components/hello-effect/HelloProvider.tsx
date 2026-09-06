"use client";

import { useSyncExternalStore, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HelloScreen } from ".";
import { Spinner } from "../ui/spinner";

const HELLO_SESSION_ID = "hasSeenIntro";

// Client-only subscriber that returns true on the client and false during SSR/hydration
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function HelloProvider({ children }: { children: React.ReactNode }) {
  // 1. Safe hydration check without triggering useEffect lint rules
  const isMounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  // 2. Read storage directly on initial mount without cascading state updates
  const [showHello, setShowHello] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem(HELLO_SESSION_ID);
    }
    return true;
  });

  const handleComplete = () => {
    sessionStorage.setItem(HELLO_SESSION_ID, "true");
    setShowHello(false);
  };

  // Skip rendering overlay entirely during SSR / initial hydration pass
  if (!isMounted) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="size-8" />
      </div>
    )
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showHello && <HelloScreen onComplete={handleComplete} />}
      </AnimatePresence>

      <motion.div
        initial={showHello ? { opacity: 0, scale: 0.98 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}

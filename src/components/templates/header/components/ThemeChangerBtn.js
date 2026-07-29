"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSunMedium } from "react-icons/lu";
import { AnimatePresence, motion } from "motion/react";

export default function ThemeChangerBtn() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="border-border bg-surface flex size-11 items-center justify-center rounded-xl border"
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group border-border bg-surface hover:border-primary/40 hover:bg-surface-hover relative flex size-11 items-center justify-center overflow-hidden rounded-xl border transition-all duration-200 hover:shadow-sm active:scale-90"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <LuSunMedium className="text-primary size-5 transition-transform duration-300 group-hover:rotate-180" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <LuMoon className="text-primary size-5 transition-transform duration-300 group-hover:-rotate-12" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

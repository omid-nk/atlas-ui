"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LuChevronDown, LuX } from "react-icons/lu";

import DocsMenu from "./DocsMenu";

export default function DocsMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="border-border bg-background hover:bg-muted/50 mb-4 flex w-full items-center justify-between rounded-md border px-3 py-2.5 text-sm font-medium transition-colors"
      >
        <span>Documentation</span>

        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
        >
          <LuChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
            />

            {/* Menu */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="border-border bg-background fixed top-0 left-0 z-50 h-dvh w-72 overflow-y-auto border-r p-4 shadow-xl"
            >
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold">Documentation</span>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <LuX size={18} />
                </button>
              </div>

              <DocsMenu />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

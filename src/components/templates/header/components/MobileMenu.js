"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { LuMenu, LuX } from "react-icons/lu";

const navItems = [
  {
    id: 1,
    name: "Products",
    link: "/products",
  },
  {
    id: 2,
    name: "Docs",
    link: "/docs",
  },
  {
    id: 3,
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: 4,
    name: "About",
    link: "/about",
  },
  {
    id: 5,
    name: "Blog",
    link: "/blog",
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-muted hover:border-border hover:bg-surface hover:text-foreground flex h-10 w-10 items-center justify-center rounded-lg border border-transparent transition-all active:scale-95 md:hidden"
        aria-label="Open menu"
      >
        <LuMenu size={20} />
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
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
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
              className="border-border bg-background fixed top-0 left-0 z-50 h-dvh w-72 border-l p-4 shadow-xl"
            >
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold">Menu</span>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:bg-surface hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <LuX size={19} />
                </button>
              </div>

              {/* Navigation */}
              <nav>
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className="text-muted hover:bg-surface hover:text-foreground flex h-10 items-center rounded-lg px-3 text-sm font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

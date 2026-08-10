"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { LuChevronDown } from "react-icons/lu";

import docsMenuItems from "./docs-menu-items";

export default function DocsMenu() {
  const pathname = usePathname();

  const activeSection = docsMenuItems.find((section) =>
    section.items.some((item) => item.href === pathname),
  )?.id;

  const [openSection, setOpenSection] = useState(activeSection || "components");

  return (
    <nav className="mr-2 w-2xs space-y-1">
      {docsMenuItems.map((section) => {
        const isOpen = openSection === section.id;

        const hasActiveItem = section.items.some(
          (item) => item.href === pathname,
        );

        return (
          <div key={section.id}>
            {/* Section */}
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? null : section.id)}
              className={`flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-2 pr-12 ${
                hasActiveItem ? "bg-primary/10" : "bg-transparent"
              } `}
            >
              <motion.span
                animate={{
                  rotate: isOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <LuChevronDown size={15} />
              </motion.span>

              <span className="text-sm">{section.name}</span>
            </button>

            {/* Items */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-border my-2 ml-3 border-l py-1 pl-3">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`text-foreground/80 relative block px-3 py-1.5 text-sm`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="active-item"
                              className="bg-primary absolute top-1/2 -left-3.25 h-5 w-px -translate-y-1/2 rounded-full"
                            />
                          )}

                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

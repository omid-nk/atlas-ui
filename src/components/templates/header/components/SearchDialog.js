"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  LuSearch,
  LuBox,
  LuCode,
  LuLayers,
  LuCommand,
  LuArrowUpRight,
} from "react-icons/lu";

import { AnimatePresence, motion } from "motion/react";

const groups = [
  {
    title: "Components",
    items: [
      {
        title: "Button",
        desc: "Interactive buttons",
        icon: LuBox,
        href: "/components/button",
      },
      {
        title: "Input",
        desc: "Form controls",
        icon: LuLayers,
        href: "/components/input",
      },
      {
        title: "Modal",
        desc: "Dialogs and overlays",
        icon: LuCode,
        href: "/components/modal",
      },
    ],
  },

  {
    title: "Resources",
    items: [
      {
        title: "Installation",
        desc: "Setup Atlas UI",
        icon: LuCommand,
        href: "/docs/install",
      },
    ],
  },
];

export default function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const filteredGroups = useMemo(() => {
    if (!query.trim()) return groups;

    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.desc.toLowerCase().includes(query.toLowerCase()),
        ),
      }))
      .filter((group) => group.items.length);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm"
        >
          <div className="flex justify-center px-4 pt-24">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: -16,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: -16,
              }}
              transition={{
                duration: 0.18,
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background/95 border-border w-full max-w-3xl overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-2xl"
            >
              {/* Header */}

              <div className="border-border flex h-16 items-center gap-4 border-b px-5">
                <LuSearch className="text-muted size-5 shrink-0" />

                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components, docs, hooks..."
                  className="text-foreground placeholder:text-muted flex-1 rounded-2xl bg-transparent px-3 py-1.5 text-sm outline-0"
                />

                <kbd className="border-border bg-surface text-muted rounded-lg border px-2 py-1 text-[11px] font-semibold">
                  ESC
                </kbd>
              </div>

              {/* Results */}

              <div className="max-h-[540px] overflow-y-auto p-5">
                {filteredGroups.length ? (
                  filteredGroups.map((group) => (
                    <section key={group.title} className="mb-7 last:mb-0">
                      <h2 className="text-muted mb-3 px-1 text-[11px] font-bold tracking-[0.18em] uppercase">
                        {group.title}
                      </h2>

                      <div className="grid gap-3 md:grid-cols-2">
                        {group.items.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={onClose}
                              className="group border-border bg-surface/60 hover:border-primary/30 hover:bg-surface-hover hover:shadow-primary/5 relative overflow-hidden rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
                            >
                              <div className="bg-primary/[0.03] absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />

                              <div className="relative flex items-start gap-4">
                                <div className="bg-primary/10 text-primary group-hover:bg-primary flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 group-hover:text-white">
                                  <Icon className="size-4" />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <h4 className="text-foreground text-sm font-semibold">
                                    {item.title}
                                  </h4>

                                  <p className="text-muted mt-1 text-xs leading-5">
                                    {item.desc}
                                  </p>
                                </div>

                                <LuArrowUpRight className="text-muted mt-1 size-4 translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </section>
                  ))
                ) : (
                  <div className="py-20 text-center">
                    <div className="bg-surface mx-auto mb-5 flex size-14 items-center justify-center rounded-full">
                      <LuSearch className="text-muted size-6" />
                    </div>

                    <h3 className="text-lg font-semibold">No results found</h3>

                    <p className="text-muted mt-2 text-sm">
                      Try searching for another component or page.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}

              <footer className="border-border bg-surface/40 flex items-center justify-between border-t px-5 py-3">
                <span className="text-muted text-xs font-medium">
                  Atlas UI Search
                </span>

                <div className="flex items-center gap-4 text-xs">
                  <div className="text-muted flex items-center gap-1">
                    <kbd className="border-border bg-background rounded border px-1.5 py-0.5">
                      ↑
                    </kbd>
                    <kbd className="border-border bg-background rounded border px-1.5 py-0.5">
                      ↓
                    </kbd>
                    <span>Navigate</span>
                  </div>

                  <div className="text-muted flex items-center gap-1">
                    <kbd className="border-border bg-background rounded border px-1.5 py-0.5">
                      ↵
                    </kbd>
                    <span>Open</span>
                  </div>

                  <div className="text-muted flex items-center gap-1">
                    <kbd className="border-border bg-background rounded border px-1.5 py-0.5">
                      Esc
                    </kbd>
                    <span>Close</span>
                  </div>
                </div>
              </footer>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

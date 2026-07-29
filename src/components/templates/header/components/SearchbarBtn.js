"use client";

import { LuSearch } from "react-icons/lu";

export default function SearchbarBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group border-border bg-surface hover:border-primary/40 hover:bg-surface-hover flex h-11 w-64 items-center justify-between rounded-xl border px-3 transition-all"
    >
      <div className="flex items-center gap-2">
        <LuSearch className="text-primary size-4 transition-transform duration-200 group-hover:scale-110" />

        <span className="text-muted group-hover:text-foreground transition-colors">
          Search components...
        </span>
      </div>

      <kbd className="border-border bg-background text-muted rounded-md border px-1.5 py-0.5 text-[11px] font-medium">
        /
      </kbd>
    </button>
  );
}

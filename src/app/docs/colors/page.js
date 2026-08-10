"use client";

import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";

import colorData from "@/data/color-data";

export default function ColorsPage() {
  const [copied, setCopied] = useState(null);

  const copyColor = async (value) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(value);

      setTimeout(() => {
        setCopied(null);
      }, 1200);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <main className="mx-auto max-w-5xl pb-20">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Colors
        </h1>

        <p className="text-muted mt-4 max-w-2xl text-sm leading-7 sm:text-base">
          A collection of carefully selected color families for building
          beautiful and consistent interfaces.
        </p>
      </header>

      {/* Palette */}
      <section>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Color palette</h2>

          <p className="text-muted mt-1 text-sm">
            Click any color to copy its HEX value.
          </p>
        </div>

        <div className="space-y-3">
          {Object.entries(colorData).map(([familyKey, family]) => {
            const colors = Object.entries(family.colors);

            return (
              <div
                key={familyKey}
                className="group flex flex-col gap-2 sm:flex-row sm:items-center"
              >
                {/* Name */}
                <div className="w-24 shrink-0">
                  <span className="text-sm font-medium">
                    {family.name || familyKey}
                  </span>
                </div>

                {/* Colors */}
                <div className="grid flex-1 grid-cols-4 overflow-hidden rounded-lg">
                  {colors.map(([shade, color]) => {
                    const isCopied = copied === color;

                    return (
                      <button
                        key={shade}
                        type="button"
                        onClick={() => copyColor(color)}
                        title={`Copy ${color}`}
                        className="group/color relative h-24 text-left transition-transform"
                      >
                        {/* Color */}
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundColor: color,
                          }}
                        />

                        {/* Content */}
                        <div
                          className="relative flex h-full flex-col justify-between p-3"
                          style={{
                            color: Number(shade) <= 400 ? "#111827" : "#ffffff",
                          }}
                        >
                          <span className="text-xs font-semibold">{shade}</span>

                          <span className="text-[10px] font-medium tracking-wide uppercase">
                            {color}
                          </span>
                        </div>

                        {/* Hover copy */}
                        {!isCopied && (
                          <span className="absolute top-1/2 left-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover/color:opacity-100">
                            <LuCopy size={12} />
                          </span>
                        )}

                        {/* Copied */}
                        {isCopied && (
                          <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md">
                              <LuCheck size={14} />
                            </span>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

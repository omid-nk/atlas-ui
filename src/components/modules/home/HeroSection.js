import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="bg-primary/10 text-primary border-primary/20 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
            ✨ Atlas UI v1.0 is coming soon
          </span>

          <h1 className="mt-6 max-w-2xl text-5xl font-extrabold tracking-tight lg:text-7xl">
            Build beautiful React interfaces
            <span className="text-primary"> faster.</span>
          </h1>

          <p className="text-muted mt-6 max-w-xl text-lg leading-8">
            Atlas UI is a modern React component library built with Tailwind CSS
            and accessibility in mind. Create beautiful interfaces without
            reinventing common UI patterns.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/docs"
              className="bg-primary hover:bg-primary-hover inline-flex h-12 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-white transition-all active:scale-95"
            >
              Get Started
              <LuArrowRight className="size-4" />
            </Link>

            <Link
              href="/components"
              className="border-border bg-surface hover:bg-surface-hover inline-flex h-12 items-center rounded-xl border px-6 text-sm font-semibold transition-all hover:shadow-sm active:scale-95"
            >
              Browse Components
            </Link>
          </div>

          <div className="text-muted mt-10 flex flex-wrap gap-8 text-sm">
            <span>50+ Components</span>

            <span>Accessible</span>

            <span>Dark Mode</span>

            <span>Tailwind CSS</span>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <div className="border-border bg-surface w-full overflow-hidden rounded-3xl border p-4 shadow-2xl">
            <Image
              src="/images/home/hero-section.jpg"
              alt="Atlas UI Preview"
              width={1400}
              height={1200}
              priority
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

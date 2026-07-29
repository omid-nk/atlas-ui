import Link from "next/link";
import { LuArrowLeft, LuTriangleAlert } from "react-icons/lu";

export default function NotFound() {
  return (
    <main className="my-24 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="bg-primary/10 text-primary mx-auto mb-8 flex size-20 items-center justify-center rounded-3xl">
          <LuTriangleAlert className="size-10" />
        </div>

        <p className="text-primary mb-3 text-sm font-semibold tracking-[0.25em] uppercase">
          Error 404
        </p>

        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">
          Page not found
        </h1>

        <p className="text-muted mx-auto mb-10 max-w-md text-lg leading-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-hover inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-white transition-all hover:shadow-lg active:scale-95"
          >
            <LuArrowLeft className="size-4" />
            Back Home
          </Link>

          <Link
            href="/docs"
            className="border-border bg-surface hover:bg-surface-hover inline-flex h-11 items-center rounded-xl border px-5 text-sm font-semibold transition-all hover:shadow-sm active:scale-95"
          >
            Documentation
          </Link>
        </div>
      </div>
    </main>
  );
}

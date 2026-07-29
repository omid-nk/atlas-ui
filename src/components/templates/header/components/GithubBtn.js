import Link from "next/link";
import { LuGithub } from "react-icons/lu";

export default function GithubBtn() {
  return (
    <Link
      href="https://github.com/omid-nk"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Github profile"
      className="group border-border bg-surface hover:border-primary/40 hover:bg-surface-hover focus-visible:outline-primary relative flex size-11 items-center justify-center overflow-hidden rounded-xl border transition-all duration-200 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-90"
    >
      <LuGithub className="text-primary size-5 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-12" />
    </Link>
  );
}

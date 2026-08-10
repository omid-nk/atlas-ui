import DocsMenu from "@/components/templates/docsMenu/DocsMenu";
import DocsMobileMenu from "@/components/templates/docsMenu/DocsMobileMenu";

export const metadata = {
  title: {
    default: "Docs",
    template: "%s | Atlas UI",
  },

  description:
    "A modern React component library built with accessibility and flexibility in mind.",

  keywords: [
    "React",
    "UI Library",
    "Components",
    "Tailwind CSS",
    "Design System",
  ],
};

export default function DocsLayout({ children }) {
  return (
    <div className="flex flex-col gap-4 py-6 lg:flex-row">
      {/* sidebar menu */}
      <div className="border-border hidden w-fit border-r lg:block">
        <DocsMenu />
      </div>

      <div className="block lg:hidden">
        <DocsMobileMenu />
      </div>

      {/* body */}
      <div className="pl-6">{children}</div>
    </div>
  );
}

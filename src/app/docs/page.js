export const metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <article>
      <div className="mb-10">
        <p className="text-primary mb-2 text-sm font-medium">Getting Started</p>

        <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>

        <p className="text-muted mt-3 text-base leading-7">
          Atlas UI is a modern React UI library built with accessibility,
          flexibility, and simplicity in mind.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold">What is Atlas UI?</h2>

          <p className="text-muted mt-3 leading-7">
            Atlas UI provides a collection of reusable components and design
            foundations for building modern web applications with React.
          </p>

          <p className="text-muted mt-3 leading-7">
            Instead of building common interface elements from scratch, you can
            use Atlas UI components and customize them to fit your project.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Why Atlas UI?</h2>

          <p className="text-muted mt-3 leading-7">
            Atlas UI is designed to give developers a consistent foundation
            while keeping components flexible and easy to customize.
          </p>

          <ul className="text-muted mt-4 list-disc space-y-2 pl-5">
            <li>Reusable and composable components</li>
            <li>Accessible UI patterns</li>
            <li>Modern and clean design</li>
            <li>Flexible styling</li>
            <li>Built for React applications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">What you'll find here</h2>

          <p className="text-muted mt-3 leading-7">
            The documentation covers everything from installation and basic
            usage to components, forms, inputs, styling, animations, and
            utilities.
          </p>
        </section>
      </div>
    </article>
  );
}

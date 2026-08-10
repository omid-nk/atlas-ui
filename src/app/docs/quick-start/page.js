export const metadata = {
  title: "Quick Start",
};

export default function QuickStartPage() {
  return (
    <article>
      <div className="mb-10">
        <p className="text-primary mb-2 text-sm font-medium">Getting Started</p>

        <h1 className="text-3xl font-bold tracking-tight">Quick Start</h1>

        <p className="text-muted mt-3 text-base leading-7">
          Build your first interface with Atlas UI.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold">1. Import a component</h2>

          <p className="text-muted mt-3 leading-7">
            Start by importing a component from Atlas UI.
          </p>

          <div className="bg-surface border-border mt-4 overflow-hidden rounded-lg border">
            <pre className="overflow-x-auto p-4 text-sm">
              <code>{`import { Button } from "atlas-ui";`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Add the component</h2>

          <p className="text-muted mt-3 leading-7">
            Use the component directly in your React component.
          </p>

          <div className="bg-surface border-border mt-4 overflow-hidden rounded-lg border">
            <pre className="overflow-x-auto p-4 text-sm">
              <code>{`export default function Example() {
  return (
    <Button>
      Get Started
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Customize it</h2>

          <p className="text-muted mt-3 leading-7">
            Atlas UI components are designed to be flexible. You can customize
            their appearance and behavior based on the needs of your
            application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">What's next?</h2>

          <p className="text-muted mt-3 leading-7">
            Explore the Components section to learn how to use buttons, cards,
            inputs, dropdowns, tooltips, and other Atlas UI components.
          </p>
        </section>
      </div>
    </article>
  );
}

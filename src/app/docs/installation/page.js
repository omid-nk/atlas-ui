export const metadata = {
  title: "Installation",
};

export default function InstallationPage() {
  return (
    <article>
      <div className="mb-10">
        <p className="text-primary mb-2 text-sm font-medium">Getting Started</p>

        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>

        <p className="text-muted mt-3 text-base leading-7">
          Install Atlas UI and start building your application in a few simple
          steps.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold">Requirements</h2>

          <p className="text-muted mt-3 leading-7">
            Before installing Atlas UI, make sure your project has React and the
            required dependencies installed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Install Atlas UI</h2>

          <p className="text-muted mt-3 leading-7">
            Install Atlas UI using your preferred package manager.
          </p>

          <div className="bg-surface border-border mt-4 overflow-hidden rounded-lg border">
            <pre className="overflow-x-auto p-4 text-sm">
              <code>npm install atlas-ui</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Using a component</h2>

          <p className="text-muted mt-3 leading-7">
            Import the component you need and use it inside your React
            application.
          </p>

          <div className="bg-surface border-border mt-4 overflow-hidden rounded-lg border">
            <pre className="overflow-x-auto p-4 text-sm">
              <code>{`import { Button } from "atlas-ui";

export default function App() {
  return <Button>Get Started</Button>;
}`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Next steps</h2>

          <p className="text-muted mt-3 leading-7">
            Once Atlas UI is installed, continue with the Quick Start guide to
            learn how to build your first interface.
          </p>
        </section>
      </div>
    </article>
  );
}

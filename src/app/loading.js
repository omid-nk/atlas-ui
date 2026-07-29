export default function Loading() {
  return (
    <main className="animate-pulse py-12">
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="bg-surface h-6 w-40 rounded-lg" />

          <div className="bg-surface h-14 w-[500px] max-w-full rounded-xl" />

          <div className="bg-surface h-5 w-[620px] max-w-full rounded-lg" />

          <div className="bg-surface h-5 w-[480px] max-w-full rounded-lg" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-border rounded-2xl border p-5">
              <div className="bg-surface mb-5 size-12 rounded-xl" />

              <div className="bg-surface mb-3 h-5 w-28 rounded-lg" />

              <div className="bg-surface h-4 w-full rounded-lg" />

              <div className="bg-surface mt-2 h-4 w-2/3 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

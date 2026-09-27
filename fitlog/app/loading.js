export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-accent" />
      <p className="text-sm uppercase tracking-wide text-muted">Loading workouts…</p>
    </div>
  );
}

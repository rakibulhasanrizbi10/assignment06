import EmptyState from '@/components/EmptyState';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-6 py-24 lg:px-10">
      <EmptyState
        heading="404 — page not found"
        description="That page doesn't exist. Head back to the library and pick a lift."
        actionLabel="Go to workouts"
        actionHref="/"
      />
    </div>
  );
}

import Link from 'next/link';

export default function EmptyState({ heading, description, actionLabel, actionHref }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border px-6 py-20 text-center">
      <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
        {heading}
      </h2>
      <p className="max-w-sm text-sm text-muted">{description}</p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-2 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-ink transition-colors hover:bg-accent/90"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

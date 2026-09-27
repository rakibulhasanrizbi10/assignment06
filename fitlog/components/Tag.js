export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}

import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row lg:px-10">
        <div className="flex items-center gap-2 font-display text-base font-bold uppercase tracking-wide text-ink">
          <Dumbbell size={18} className="text-accent" />
          FitLog
        </div>
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell } from 'lucide-react';
import { usePlan } from '@/context/PlanContext';

const LINKS = [
  { href: '/', label: 'Workout' },
  { href: '/my-plan', label: 'My Plan' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-ink"
        >
          <Dumbbell size={20} className="text-accent" />
          FitLog
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  active ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/my-plan" className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-ink">
            Plan {plan.length}
          </span>
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-bold text-ink">
            Saved {saved.length}
          </span>
        </Link>
      </div>

      <nav className="flex items-center justify-center gap-8 border-t border-border py-2 sm:hidden">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-wide ${
                active ? 'text-accent' : 'text-muted'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

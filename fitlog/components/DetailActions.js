'use client';

import { Bookmark, BookmarkCheck, CalendarPlus, Check } from 'lucide-react';
import { usePlan } from '@/context/PlanContext';

export default function DetailActions({ workout }) {
  const { addToPlan, addToSaved, isInPlan, isSaved, isPlanFull } = usePlan();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={inPlan || isPlanFull}
        className="flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-ink transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-border disabled:text-faint"
      >
        {inPlan ? <Check size={18} /> : <CalendarPlus size={18} />}
        {inPlan ? 'Added to plan' : isPlanFull ? 'Plan full (5/5)' : "Add to today's plan"}
      </button>
      <button
        type="button"
        onClick={() => addToSaved(workout)}
        disabled={saved}
        className="flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-accent disabled:cursor-not-allowed disabled:text-faint"
      >
        {saved ? <BookmarkCheck size={18} className="text-accent" /> : <Bookmark size={18} />}
        {saved ? 'Saved' : 'Save for later'}
      </button>
    </div>
  );
}

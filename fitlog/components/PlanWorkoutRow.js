'use client';

import Link from 'next/link';
import { Check, Eye, X } from 'lucide-react';
import StatsRow from './StatsRow';
import { usePlan } from '@/context/PlanContext';

export default function PlanWorkoutRow({ workout, variant }) {
  const { removeFromPlan, removeFromSaved, markDone } = usePlan();
  const isPlanVariant = variant === 'plan';

  return (
    <div
      className={`flex flex-col gap-4 rounded-lg border border-border bg-surface p-4 sm:flex-row sm:items-center ${
        workout.done ? 'opacity-60' : ''
      }`}
    >
      <img
        src={workout.image}
        alt={workout.name}
        loading="lazy"
        className="h-20 w-full rounded-md object-cover sm:h-16 sm:w-24"
      />
      <div className="flex-1">
        <h3
          className={`font-display text-base font-semibold uppercase tracking-wide text-ink ${
            workout.done ? 'line-through' : ''
          }`}
        >
          {workout.name}
          {workout.done && <span className="ml-2 text-xs font-sans text-accent">Done</span>}
        </h3>
        <p className="text-sm text-faint">{workout.equipment}</p>
        <div className="mt-2">
          <StatsRow
            duration={workout.duration}
            calories={workout.caloriesBurned}
            rating={workout.rating}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:border-accent"
        >
          <Eye size={14} />
          View
        </Link>
        {isPlanVariant && !workout.done && (
          <button
            type="button"
            onClick={() => markDone(workout.id)}
            aria-label="Mark as done"
            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:border-accent"
          >
            <Check size={14} />
          </button>
        )}
        <button
          type="button"
          onClick={() => (isPlanVariant ? removeFromPlan(workout.id) : removeFromSaved(workout.id))}
          aria-label="Remove"
          className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-faint transition-colors hover:border-red-400 hover:text-red-400"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

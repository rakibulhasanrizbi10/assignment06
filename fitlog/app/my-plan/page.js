'use client';

import { useMemo, useState } from 'react';
import { usePlan } from '@/context/PlanContext';
import PlanWorkoutRow from '@/components/PlanWorkoutRow';
import EmptyState from '@/components/EmptyState';

const TABS = [
  { key: 'plan', label: "Today's Plan" },
  { key: 'saved', label: 'Saved' },
];

function MetricCard({ label, value }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 text-center sm:p-6">
      <p className="font-display text-2xl font-bold text-accent sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
    </div>
  );
}

export default function MyPlanPage() {
  const { plan, saved, isLoaded } = usePlan();
  const [activeTab, setActiveTab] = useState('plan');

  const metrics = useMemo(
    () => ({
      exercises: plan.length,
      minutes: plan.reduce((sum, w) => sum + w.duration, 0),
      calories: plan.reduce((sum, w) => sum + w.caloriesBurned, 0),
    }),
    [plan]
  );

  const activeList = activeTab === 'plan' ? plan : saved;

  return (
    <div className="mx-auto max-w-content px-6 py-12 lg:px-10">
      <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-sm text-muted">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <MetricCard label="Exercises" value={metrics.exercises} />
        <MetricCard label="Minutes" value={metrics.minutes} />
        <MetricCard label="Calories" value={metrics.calories} />
      </div>

      <div className="mt-10 flex gap-8 border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`border-b-2 pb-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
              activeTab === tab.key
                ? 'border-accent text-accent'
                : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            {tab.label} ({tab.key === 'plan' ? plan.length : saved.length})
          </button>
        ))}
      </div>

      <div className="mt-8">
        {!isLoaded ? (
          <p className="py-12 text-center text-sm uppercase tracking-wide text-muted">
            Loading workouts…
          </p>
        ) : activeList.length === 0 ? (
          <EmptyState
            heading="Nothing here yet"
            description="Browse the library and add a lift to get today moving."
            actionLabel="Go to workouts"
            actionHref="/"
          />
        ) : (
          <div className="flex flex-col gap-4">
            {activeList.map((workout) => (
              <PlanWorkoutRow
                key={workout.id}
                workout={workout}
                variant={activeTab === 'plan' ? 'plan' : 'saved'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

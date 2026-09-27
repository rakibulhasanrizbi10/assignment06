'use client';

import { useMemo, useState } from 'react';
import SortDropdown from './SortDropdown';
import WorkoutCard from './WorkoutCard';

export default function LibrarySection({ workouts }) {
  const [sortBy, setSortBy] = useState('duration');

  const sorted = useMemo(() => {
    return [...workouts].sort((a, b) => a[sortBy] - b[sortBy]);
  }, [workouts, sortBy]);

  return (
    <section id="library" className="mx-auto max-w-content px-6 py-16 lg:px-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-ink">
            The Library
          </h2>
          <p className="mt-2 text-sm text-muted">Twelve lifts covering every major muscle group.</p>
        </div>
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}

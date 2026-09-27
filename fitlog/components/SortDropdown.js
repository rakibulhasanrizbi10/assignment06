'use client';

import { ChevronDown } from 'lucide-react';

const OPTIONS = [
  { value: 'duration', label: 'Duration' },
  { value: 'caloriesBurned', label: 'Calories' },
  { value: 'rating', label: 'Rating' },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <label className="relative inline-flex items-center">
      <span className="mr-2 text-sm text-muted">Sort by</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-md border border-border bg-surface py-2 pl-3 pr-9 text-sm text-ink focus:border-accent"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-3 text-muted" />
    </label>
  );
}

'use client';

import { CheckCircle2 } from 'lucide-react';
import { usePlan } from '@/context/PlanContext';

export default function ToastContainer() {
  const { toast } = usePlan();

  if (!toast) return null;

  return (
    <div
      key={toast.id}
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 sm:inset-x-auto sm:right-6 sm:justify-end"
    >
      <div className="flex animate-fade-in items-center gap-2 rounded-md border border-border bg-surface px-4 py-3 text-sm font-medium text-ink shadow-lg shadow-black/40">
        <CheckCircle2 size={18} className="text-accent" />
        {toast.message}
      </div>
    </div>
  );
}

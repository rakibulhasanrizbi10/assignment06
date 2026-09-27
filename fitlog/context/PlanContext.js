'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const PlanContext = createContext(null);

const PLAN_KEY = 'fitlog_plan';
const SAVED_KEY = 'fitlog_saved';
const PLAN_CAP = 5;

function readStorage(key) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage unavailable (private mode, quota, etc.) — fail silently
  }
}

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  // Hydrate from localStorage once, client-side only, to avoid SSR mismatch.
  useEffect(() => {
    setPlan(readStorage(PLAN_KEY));
    setSaved(readStorage(SAVED_KEY));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) writeStorage(PLAN_KEY, plan);
  }, [plan, isLoaded]);

  useEffect(() => {
    if (isLoaded) writeStorage(SAVED_KEY, saved);
  }, [saved, isLoaded]);

  const showToast = useCallback((message) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ id: Date.now(), message });
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }, []);

  const isInPlan = useCallback((id) => plan.some((w) => w.id === id), [plan]);
  const isSaved = useCallback((id) => saved.some((w) => w.id === id), [saved]);
  const isPlanFull = plan.length >= PLAN_CAP;

  const addToPlan = useCallback(
    (workout) => {
      setPlan((prev) => {
        if (prev.some((w) => w.id === workout.id) || prev.length >= PLAN_CAP) return prev;
        return [...prev, { ...workout, done: false }];
      });
      showToast("Added to today's plan");
    },
    [showToast]
  );

  const addToSaved = useCallback(
    (workout) => {
      setSaved((prev) => {
        if (prev.some((w) => w.id === workout.id)) return prev;
        return [...prev, workout];
      });
      showToast('Saved for later');
    },
    [showToast]
  );

  const removeFromPlan = useCallback(
    (id) => {
      setPlan((prev) => prev.filter((w) => w.id !== id));
      showToast('Removed from plan');
    },
    [showToast]
  );

  const removeFromSaved = useCallback(
    (id) => {
      setSaved((prev) => prev.filter((w) => w.id !== id));
      showToast('Removed from saved');
    },
    [showToast]
  );

  const markDone = useCallback(
    (id) => {
      setPlan((prev) => prev.map((w) => (w.id === id ? { ...w, done: true } : w)));
      showToast('Marked as done');
    },
    [showToast]
  );

  const value = {
    plan,
    saved,
    isLoaded,
    isPlanFull,
    planCap: PLAN_CAP,
    isInPlan,
    isSaved,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    markDone,
    toast,
    showToast,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error('usePlan must be used within a PlanProvider');
  return ctx;
}

const PRIMARY = 'https://api.abcz.workers.dev/api/fitlog';
const FALLBACK = 'https://api.api-store.workers.dev/api/fitlog';

async function fetchFrom(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

/** All twelve workouts. Tries the primary API, then the mirror. */
export async function getWorkouts() {
  try {
    return await fetchFrom(PRIMARY, { cache: 'no-store' });
  } catch {
    return await fetchFrom(FALLBACK, { cache: 'no-store' });
  }
}

/** A single workout by id. Falls back to the mirror, then to filtering the full list. */
export async function getWorkoutById(id) {
  const numericId = Number(id);

  try {
    return await fetchFrom(`${PRIMARY}/${numericId}`, { cache: 'no-store' });
  } catch {
    try {
      return await fetchFrom(`${FALLBACK}/${numericId}`, { cache: 'no-store' });
    } catch {
      const all = await getWorkouts();
      return all.find((w) => w.id === numericId) || null;
    }
  }
}

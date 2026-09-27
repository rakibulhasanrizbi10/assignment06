import { notFound } from 'next/navigation';
import { getWorkoutById } from '@/lib/api';
import Tag from '@/components/Tag';
import DetailActions from '@/components/DetailActions';

function Spec({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-faint">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}

export default async function WorkoutDetailPage({ params }) {
  const workout = await getWorkoutById(params.id);

  if (!workout) notFound();

  return (
    <div className="mx-auto max-w-content px-6 py-12 lg:px-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg border border-border bg-surface lg:aspect-auto lg:h-full">
          <img src={workout.image} alt={workout.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">{workout.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <Tag key={group}>{group}</Tag>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 rounded-lg border border-border bg-surface p-6 sm:grid-cols-3">
            <Spec label="Equipment" value={workout.equipment} />
            <Spec label="Difficulty" value={workout.difficulty} />
            <Spec label="Sets" value={workout.sets} />
            <Spec label="Reps" value={workout.reps} />
            <Spec label="Duration" value={`${workout.duration} min`} />
            <Spec label="Calories" value={`${workout.caloriesBurned} kcal`} />
            <Spec label="Rating" value={workout.rating} />
          </dl>

          <div className="mt-8">
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
              Instructions
            </h2>
            <ol className="mt-4 space-y-3">
              {workout.instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-ink">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8">
            <DetailActions workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
}

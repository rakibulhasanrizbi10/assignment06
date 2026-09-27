import Link from 'next/link';
import Tag from './Tag';
import StatsRow from './StatsRow';

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent/60"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-black/40">
        <img
          src={workout.image}
          alt={workout.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <Tag key={group}>{group}</Tag>
          ))}
        </div>
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
          {workout.name}
        </h3>
        <p className="text-sm text-faint">{workout.equipment}</p>
        <div className="mt-auto pt-1">
          <StatsRow
            duration={workout.duration}
            calories={workout.caloriesBurned}
            rating={workout.rating}
          />
        </div>
      </div>
    </Link>
  );
}

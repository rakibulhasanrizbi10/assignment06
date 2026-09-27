import { Clock, Flame, Star } from 'lucide-react';

export default function StatsRow({ duration, calories, rating }) {
  return (
    <div className="flex items-center gap-4 text-xs text-faint">
      <span className="flex items-center gap-1.5">
        <Clock size={14} strokeWidth={2} />
        {duration} min
      </span>
      <span className="flex items-center gap-1.5">
        <Flame size={14} strokeWidth={2} />
        {calories} kcal
      </span>
      <span className="flex items-center gap-1.5 text-ink">
        <Star size={14} strokeWidth={2} className="fill-accent text-accent" />
        {rating}
      </span>
    </div>
  );
}

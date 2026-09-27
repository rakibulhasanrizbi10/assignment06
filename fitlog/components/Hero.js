import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Workout Library
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-wide text-ink sm:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
            today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-ink transition-colors hover:bg-accent/90"
          >
            Browse workouts
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface">
            <img
              src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666704.jpg?w=740"
              alt="Athlete mid-lift"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-bg via-transparent to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

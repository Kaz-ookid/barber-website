export function Band({ words }: { words: string }) {
  return (
    <div className="border-y border-gold/40 bg-paper py-12 text-ink">
      <div className="container-x flex flex-col items-center gap-5">
        <div className="flex items-center gap-5">
          <span className="h-px w-16 bg-gold/60" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="h-5 w-5 text-gold"
            aria-hidden
          >
            <circle cx="6" cy="6" r="2.6" />
            <circle cx="6" cy="18" r="2.6" />
            <path d="M8.2 7.8 20 19.5 M8.2 16.2 20 4.5" />
          </svg>
          <span className="h-px w-16 bg-gold/60" />
        </div>
        <p className="font-display text-center text-xl font-medium uppercase tracking-[0.28em] md:text-2xl">
          {words}
        </p>
      </div>
    </div>
  );
}

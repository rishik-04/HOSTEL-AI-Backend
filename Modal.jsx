export function SkeletonLine({ className = "" }) {
  return <div className={`animate-pulse rounded-md bg-slate-200 dark:bg-slate-800 ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="card p-5">
      <SkeletonLine className="mb-3 h-4 w-1/3" />
      <SkeletonLine className="mb-2 h-3 w-full" />
      <SkeletonLine className="h-3 w-2/3" />
    </div>
  );
}

export function SkeletonTable({ rows = 5 }) {
  return (
    <div className="card overflow-hidden p-5">
      <SkeletonLine className="mb-4 h-5 w-1/4" />
      {Array.from({ length: rows }).map((_, i) => (
        <SkeletonLine key={i} className="mb-3 h-10 w-full" />
      ))}
    </div>
  );
}

const STAMP_TEXT = "AVAILABLE FOR WORK • OPEN TO OPPORTUNITIES • ";

export default function RotatingStamp({ className = "" }: { className?: string }) {
  const id = "stamp-circle-path";
  return (
    <div className={`pointer-events-none relative ${className}`} aria-hidden>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full animate-[spin_16s_linear_infinite]"
      >
        <defs>
          <path
            id={id}
            d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text className="fill-ink text-[13px] font-medium uppercase tracking-[0.15em]">
          <textPath href={`#${id}`} startOffset="0%">
            {STAMP_TEXT.repeat(2)}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-sun">
          <span className="font-display text-lg text-ink">K</span>
        </div>
      </div>
    </div>
  );
}

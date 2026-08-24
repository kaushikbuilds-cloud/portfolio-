type TapeProps = {
  className?: string;
  rotate?: number;
  color?: "sun" | "coral" | "teal" | "tape";
};

const colorMap: Record<NonNullable<TapeProps["color"]>, string> = {
  sun: "bg-sun/70",
  coral: "bg-coral/60",
  teal: "bg-teal/50",
  tape: "tape",
};

export default function Tape({
  className = "",
  rotate = -3,
  color = "tape",
  center = false,
}: TapeProps & { center?: boolean }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-6 w-24 sm:h-7 sm:w-28 ${colorMap[color]} ${className}`}
      style={{
        transform: `${center ? "translateX(-50%) " : ""}rotate(${rotate}deg)`,
      }}
    />
  );
}

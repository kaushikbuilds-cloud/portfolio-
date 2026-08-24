const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Framer Motion",
  "Claude API",
  "Gemini API",
  "Figma",
  "React Native",
];

export default function Marquee() {
  const track = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-ink py-3">
      <div className="flex w-max animate-marquee">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-display flex shrink-0 items-center gap-8 whitespace-nowrap px-4 text-sm text-paper sm:text-base"
          >
            {item}
            <span className="text-paper/40">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

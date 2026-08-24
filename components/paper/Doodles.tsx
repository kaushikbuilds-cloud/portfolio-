type DoodleProps = {
  className?: string;
};

export function ScribbleArrow({ className = "" }: DoodleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 40 C 30 8, 70 6, 100 22 C 108 26, 96 20, 90 18" />
      <path d="M100 22 L84 14 M100 22 L92 34" />
    </svg>
  );
}

export function ScribbleCircle({ className = "" }: DoodleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 140 70"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M70 8 C 30 4, 6 22, 8 38 C 10 58, 44 66, 74 62 C 116 57, 134 34, 122 20 C 110 6, 74 4, 60 12" />
    </svg>
  );
}

export function StarDoodle({ className = "" }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 40 40" className={className} fill="currentColor">
      <path d="M20 0 L23.5 15.5 L38 12 L26 22 L34 36 L20 27 L6 36 L14 22 L2 12 L16.5 15.5 Z" />
    </svg>
  );
}

export function SparkleDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M20 4 V16 M20 24 V36 M4 20 H16 M24 20 H36 M9 9 L14 14 M26 26 L31 31 M31 9 L26 14 M14 26 L9 31" />
    </svg>
  );
}

export function DashedCircle({ className = "" }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className} fill="none">
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="7 8"
      />
    </svg>
  );
}

export function SpiralDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M50 50 C 60 50, 60 40, 50 40 C 35 40, 35 60, 50 60 C 68 60, 68 32, 50 32 C 27 32, 27 68, 50 68 C 74 68, 76 24, 50 24" />
    </svg>
  );
}

export function CursorDoodle({ className = "" }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={className} fill="currentColor" stroke="var(--paper, #fff)">
      <path
        d="M6 2 L26 16 L16 18 L20 27 L15 29 L11 20 L4 24 Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PaperPlaneDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 30 L54 6 L36 54 L28 34 L4 30 Z" />
      <path d="M28 34 L54 6" />
    </svg>
  );
}

export function ThreeDots({ className = "" }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 44 12" className={className} fill="currentColor">
      <circle cx="6" cy="6" r="4" />
      <circle cx="22" cy="6" r="4" />
      <circle cx="38" cy="6" r="4" />
    </svg>
  );
}

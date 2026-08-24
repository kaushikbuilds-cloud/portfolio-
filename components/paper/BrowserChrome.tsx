import type { ReactNode } from "react";

export function WindowTopbar({ label }: { label?: string }) {
  return (
    <div className="window-topbar">
      <span className="window-dot" />
      <span className="window-dot" />
      {label && (
        <span className="font-marker ml-2 text-sm text-ink-soft">{label}</span>
      )}
      <span className="ml-auto flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
      </span>
    </div>
  );
}

export function TagBubble({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bubble-tag font-marker px-4 py-1.5 text-lg text-ink ${className}`}
    >
      {children}
    </span>
  );
}

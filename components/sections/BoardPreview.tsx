import { cn } from "@/lib/utils";

const columns = [
  {
    title: "Backlog",
    cards: ["Design onboarding flow", "Write launch email"],
  },
  {
    title: "In Progress",
    cards: ["Ship billing page", "QA mobile nav"],
  },
  {
    title: "Done",
    cards: ["Set up workspace"],
  },
];

export function BoardPreview() {
  return (
    <div
      className="rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-primary/10 sm:p-6"
      aria-hidden="true"
    >
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {columns.map((column, columnIndex) => (
          <div key={column.title} className="flex flex-col gap-2">
            <p className="text-xs font-medium text-muted-foreground">
              {column.title}
            </p>
            <div className="flex flex-col gap-2">
              {column.cards.map((card, cardIndex) => (
                <div
                  key={card}
                  className={cn(
                    "rounded-lg border border-border bg-background p-2.5 text-[11px] font-medium leading-snug shadow-sm sm:text-xs",
                    "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:fill-mode-both",
                  )}
                  style={{
                    animationDelay: `${(columnIndex * 2 + cardIndex) * 120}ms`,
                  }}
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

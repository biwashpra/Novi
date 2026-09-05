import { Dot, MessageSquare } from "lucide-react";

type ColumnId = "backlog" | "doing" | "review";

export const boardCards = [
  {
    id: "research",
    title: "Draft competitive analysis",
    column: "backlog" as const,
    tag: "Research",
    due: "Mon",
    initials: "ML",
    comments: 3,
  },
  {
    id: "design",
    title: "Wireframe new 'Huddle' view",
    column: "backlog" as const,
    tag: "Design",
    due: "Tue",
    initials: "BP",
    comments: 1,
  },
  {
    id: "fe-dev",
    title: "Build real-time sync gateway",
    column: "doing" as const,
    tag: "Eng",
    due: "Today",
    initials: "KN",
    comments: 5,
  },
  {
    id: "review",
    title: "Finalize onboarding copy",
    column: "review" as const,
    tag: "Product",
    due: "Wed",
    initials: "BP",
    comments: 2,
  },
] as const;

export const threadMessages = [
  {
    id: "m1",
    name: "Kai",
    initials: "KN",
    body: "WebSocket handshake is stable on staging. Latency is hovering around 180ms. Ready for code review.",
    time: "2h",
  },
  {
    id: "m2",
    name: "Biwash",
    initials: "BP",
    body: "Great work, Kai. I'll run through the integration tests now. If they pass, we can ship it with tomorrow's release.",
    time: "1h",
  },
] as const;

const columns: { id: ColumnId; label: string }[] = [
  { id: "backlog", label: "Backlog" },
  { id: "doing", label: "In progress" },
  { id: "review", label: "Review" },
];

export function FullProduct() {
  return (
    <div className="mx-auto grid max-w-7xl h-full items-center gap-12 lg:grid-cols-1 lg:gap-16 rounded-3xl bg-card p-2 shadow-(--shadow-elevated)">
      <div className="overflow-hidden rounded-2xl bg-background">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="size-2 shrink-0 rounded-full bg-tag-sage" />
            <p className="truncate text-sm font-medium">
              Veel
              <span className="text-muted-foreground"> · Sprint 14</span>
            </p>
          </div>
          <div className="hidden text-xs text-muted-foreground sm:flex sm:items-center sm:gap-0">
            <Dot className="text-green-500 size-10" />3 people online
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_16rem]">
          <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-3">
            {columns.map((column) => {
              const cards = boardCards.filter(
                (card) => card.column === column.id,
              );
              return (
                <div key={column.id} className="min-w-0">
                  <div className="mb-2 flex items-center justify-between px-1">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {column.label}
                    </p>
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {cards.length}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {cards.map((card) => {
                      return (
                        <div
                          key={card.id}
                          className={
                            "rounded-lg bg-card p-3 text-left shadow-(--shadow-border) outline-none transition-[box-shadow,transform] duration-150 ease-out hover:shadow-(--shadow-border-hover) focus-visible:ring-2 focus-visible:ring-ring/60"
                          }
                        >
                          <p className="text-sm font-medium leading-snug">
                            {card.title}
                          </p>
                          <div className="mt-3 flex items-center justify-between gap-2">
                            <span
                              className={
                                "inline-flex h-6 items-center rounded-full px-2 text-xs font-medium"
                              }
                            >
                              {card.tag}
                            </span>
                            <span className="flex items-center gap-2 text-xs text-muted-foreground">
                              {card.comments > 0 ? (
                                <span className="inline-flex items-center gap-1">
                                  <MessageSquare
                                    className="size-3"
                                    strokeWidth={1.75}
                                  />
                                  {card.comments}
                                </span>
                              ) : null}
                              <span>{card.due}</span>
                              <span
                                className={
                                  "inline-flex size-5 items-center justify-center rounded-full text-xs font-medium"
                                }
                                aria-hidden="true"
                              >
                                {card.initials}
                              </span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="hidden border-t border-border lg:block lg:border-t-0 lg:border-l">
            <div className="flex h-full flex-col p-4">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Thread
              </p>
              <p className="mt-1 text-sm font-medium">Design onboarding flow</p>
              <div className="mt-4 flex flex-1 flex-col gap-3">
                {threadMessages.map((message) => (
                  <div key={message.id} className="flex gap-2.5">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {message.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {message.name}
                        <span className="tabular-nums"> · {message.time}</span>
                      </p>
                      <p className="mt-0.5 text-sm leading-snug">
                        {message.body}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-tag-clay-bg text-tag-clay">
                    BP
                  </span>
                  <span className="inline-flex items-center gap-1">
                    Biwash is typing
                    <span className="typing-dot size-1 rounded-full bg-current" />
                    <span className="typing-dot size-1 rounded-full bg-current" />
                    <span className="typing-dot size-1 rounded-full bg-current" />
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

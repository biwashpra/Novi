export const productColumns = [
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

export type ColumnId = "backlog" | "doing" | "review";

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

export const boardColumns: { id: ColumnId; label: string }[] = [
  { id: "backlog", label: "Backlog" },
  { id: "doing", label: "In progress" },
  { id: "review", label: "Review" },
];

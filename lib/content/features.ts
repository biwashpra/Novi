export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  emphasis?: boolean;
};

export const features: FeatureItem[] = [
  {
    id: "boards",
    title: "Boards that move at your speed",
    description:
      "Plan sprints and track tasks without hunting through spreadsheets. Drag a card, and the whole team sees it move.",
    icon: "columns",
    emphasis: true,
  },
  {
    id: "threads",
    title: "Threads, not another inbox",
    description:
      "Project conversations stay attached to the work itself, so context never lives in a separate app.",
    icon: "threads",
  },
  {
    id: "timeline",
    title: "One timeline for the whole team",
    description:
      "Every deadline and milestone in a single shared view — See the week, the sprint, and the launch date without opening four calendars.",
    icon: "timeline",
  },
  {
    id: "import",
    title: "Works the way you already do",
    description:
      "Import from Trello, Asana, or a spreadsheet in minutes. Bring your team's history with you. Novi meets your team where they are, then gets out of the way.",
    icon: "import",
  },
];

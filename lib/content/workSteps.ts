export type Step = {
  id: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    id: "01",
    title: "Bring your team over",
    description:
      "Import existing boards from Trello, Asana, or a spreadsheet — or start fresh in under a minute.",
  },
  {
    id: "02",
    title: "Organize the work",
    description:
      "Set up boards for how your team actually works: sprints, client projects, or a simple backlog.",
  },
  {
    id: "03",
    title: "Collaborate in place",
    description:
      "Discuss, decide, and update status without leaving the task. Everyone stays on the same page by default.",
  },
];

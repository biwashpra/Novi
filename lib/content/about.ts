export type Principle = {
  id: string;
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    id: "small-teams",
    title: "Built for small teams",
    description:
      "Not a scaled-down enterprise tool. Navi is designed from the ground up for teams of five to fifty.",
  },
  {
    id: "one-workspace",
    title: "One workspace, not five tabs",
    description:
      "Tasks, docs, and conversations live together, so nothing gets lost between apps.",
  },
  {
    id: "calm-by-design",
    title: "Calm by design",
    description:
      "No red badges competing for attention. Navi surfaces what matters and stays quiet about the rest.",
  },
];

export const aboutCopy = {
  eyebrow: "About Navi",
  heading: "We got tired of switching tabs to do our jobs.",
  paragraphs: [
    "Navi started as an internal tool for a five-person product team that was running on three different apps just to ship one feature. Tasks lived in one place, conversations in another, and the actual timeline existed only in someone's head.",
    "So we built the thing we wished we had: a single, calm workspace that keeps up with a fast-moving team instead of slowing it down with setup and permissions and process.",
  ],
};

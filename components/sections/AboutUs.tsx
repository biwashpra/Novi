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

export function AboutUsSection() {
  return (
    <section id="about-us" className="scroll-mt-28 px-4 py-10 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {aboutCopy.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {aboutCopy.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-8 divide-y divide-border sm:grid-cols-1">
            {principles.map((principle) => (
              <div key={principle.id} className="pt-8 first:pt-0">
                <h3 className="font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import {
  Columns3,
  FolderInput,
  LucideIcon,
  MessagesSquare,
  Timeline,
} from "lucide-react";

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
      "Import from Trello, Asana, or a spreadsheet in minutes. Bring your team's history with you. Navi meets your team where they are, then gets out of the way.",
    icon: "import",
  },
];

const spanByIndex = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

const icons: Record<(typeof features)[number]["icon"], LucideIcon> = {
  columns: Columns3,
  threads: MessagesSquare,
  timeline: Timeline,
  import: FolderInput,
};

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-28 mx-auto max-w-6xl px-6 py-10"
    >
      <div className="max-w-2xl mb-3">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          What Navi holds
        </p>
        <h2 className="mt-1 text-3xl tracking-tight sm:text-4xl">
          One workspace. The rest can close.
        </h2>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
          Boards, writing, and conversation sit together so a small team can
          move without splitting attention across five tabs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-2">
        {features.map((feature, i) => {
          const Icon = icons[feature.icon];

          return (
            <article
              key={feature.id}
              className={cn(
                "group flex min-h-55 flex-col justify-end rounded-xl p-4",
                "hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out",
                spanByIndex[i],
                feature?.emphasis
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-card-foreground",
              )}
            >
              <Icon
                className={cn(
                  "size-14 my-2 transition-colors duration-300",
                  !feature?.emphasis && "group-hover:text-primary",
                )}
                strokeWidth={1.75}
              />
              <h3
                className={cn(
                  "font-semibold tracking-tight",
                  feature.emphasis ? "text-3xl" : "text-xl",
                )}
              >
                {feature.title}
              </h3>
              <p
                className={cn(
                  "mt-3 max-w-[42ch] text-sm leading-relaxed",
                  feature.emphasis
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground",
                )}
              >
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

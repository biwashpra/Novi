import { aboutCopy, principles } from "@/lib/content/about";

export function AboutUsSection() {
  return (
    <section id="about-us" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-28">
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
                <p className="font-semibold text-primary">{principle.title}</p>
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

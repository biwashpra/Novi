import { steps } from "@/lib/content/workSteps";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 mx-auto max-w-6xl px-6 py-10"
    >
      <div className="max-w-2xl mb-3">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          How it works
        </p>
        <h2 className="mt-1 text-3xl tracking-tight sm:text-4xl">
          From five tools to one,{" "}
          <span className="text-primary">in three steps.</span>
        </h2>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
          Navi is intentionally small. Three moves replace the pile of tabs most
          teams live in.
        </p>
      </div>

      <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {steps.map((step) => (
          <li key={step.id} className="list-none">
            <p className="text-3xl text-muted-foreground">{step.id}</p>
            <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

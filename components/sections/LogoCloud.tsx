import Image from "next/image";
import { InfiniteSlider } from "../ui/infinite-slider";

export function LogoCloud() {
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
        <span className="text-muted-foreground">Trusted by experts.</span>
        <br />
        <span className="font-semibold">Used by the leaders.</span>
      </h2>
      <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px max-w-sm bg-border" />
      <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] overflow-hidden py-4">
        <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
          {logos.map((logo) => (
            <Image
              alt={logo.alt}
              // ADDED: "w-auto" to allow the image to scale horizontally based on the height classes
              className="pointer-events-none h-4 w-auto select-none md:h-5 dark:brightness-0 dark:invert"
              height={24}
              width={120}
              key={`logo-${logo.alt}`}
              loading="lazy"
              src={logo.src}
            />
          ))}
        </InfiniteSlider>
      </div>
      <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mt-5 h-px bg-border" />
    </section>
  );
}

const logos = [
  {
    src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://storage.efferd.com/logo/openai-wordmark.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://storage.efferd.com/logo/turso-wordmark.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://storage.efferd.com/logo/github-wordmark.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://storage.efferd.com/logo/claude-wordmark.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
    alt: "Clerk Logo",
  },
];

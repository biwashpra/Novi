"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import { TwitterIcon } from "../ui/twitter";
import { Input } from "../ui/input";
import {
  NewsletterInput,
  newsletterSchema,
} from "@/lib/validations/newsletter";
import { toast } from "@/components/ui/toast";
import { footerContent } from "@/lib/content/footer";
import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/biwashpra/Novi",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/biwash-pradhan-6b1575276/",
    icon: LinkedinIcon,
  },
  {
    label: "Twitter",
    href: "https://github.com/biwashpra/Novi",
    icon: TwitterIcon,
  },
];

export function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterInput) => {
    toast.add({
      type: "success",
      title: "You are on the list.",
      description: `We will write to ${data.email} when the next note goes out.`,
    });
    reset();
  };

  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-2xl font-bold tracking-wider">
              <span className="text-primary">N</span>AVI
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {footerContent.tagline}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 max-w-sm"
              noValidate
            >
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  aria-invalid={!!errors.email}
                  className="rounded-full"
                  {...register("email")}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="shrink-0 rounded-full"
                >
                  Subscribe
                  <ArrowUpRight size={16} />
                </Button>
              </div>

              {errors.email ? (
                <p className="mt-2 text-xs text-destructive">
                  {errors.email.message}
                </p>
              ) : (
                <p className="text-xs mt-1 text-muted-foreground ">
                  Occasional product notes. Unsubscribe any time.
                </p>
              )}
            </form>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerContent.linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold text-foreground">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {footerContent.copyright}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

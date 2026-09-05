import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose the weights your SaaS page needs - Regular (body), Semi-Bold (subtitles), Bold (headings)
  variable: "--font-poppins", // Optional: Use this to target via Tailwind CSS
});

export const metadata: Metadata = {
  title: "Novi",
  description:
    "a project and task management tool for small, fast moving teams such as startups, agencies, and product or design teams.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { HelloProvider } from "@/components/hello-effect/HelloProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <HelloProvider>
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Novi</h1>
          <p className="text-muted-foreground max-w-md">
            A project and task management tool built for fast-moving teams.
          </p>
        </div>

        <ThemeToggle />
      </main>
    </HelloProvider>
  );
}

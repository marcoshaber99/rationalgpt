import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export function Header() {
  return (
    <div className="w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image
            src="/logo-leaf.svg"
            alt="Logo"
            width={60}
            height={60}
            className="block dark:hidden"
          />
          <Image
            src="/logo-leaf.svg"
            alt="Logo"
            width={60}
            height={60}
            className="hidden dark:block"
          />
          <div className="flex flex-col items-start justify-center mt-1">
            <h1 className="text-xl font-semibold">RationalGPT</h1>
            <div className="text-xs text-muted-foreground">v0.1.0</div>
          </div>
        </div>
        <ModeToggle />
      </header>
    </div>
  );
}

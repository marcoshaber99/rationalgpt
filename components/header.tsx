import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export function Header() {
  return (
    <div className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={24}
            height={35}
            className="h-[35px] w-auto block dark:hidden"
          />
          <Image
            src="/logo-dark.svg"
            alt="Logo"
            width={24}
            height={35}
            className="h-[35px] w-auto hidden dark:block"
          />
          <div className="flex flex-col items-start gap-0.5">
            <h1 className="text-xl font-semibold">RationalGPT</h1>
            <div className="text-sm text-muted-foreground">v0.1.0</div>
          </div>
        </div>
        <ModeToggle />
      </header>
    </div>
  );
}

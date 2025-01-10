"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // Prevent hydration mismatch by tracking mounted state
  const [mounted, setMounted] = React.useState(false);

  // Only run after component mounts on client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Return children without theme context during SSR
  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

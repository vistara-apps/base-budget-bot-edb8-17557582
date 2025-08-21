"use client";

import { type ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-text bg-bg">
      <div className="w-full max-w-md mx-auto px-4 py-3 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}

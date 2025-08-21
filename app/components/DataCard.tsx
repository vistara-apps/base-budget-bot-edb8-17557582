"use client";

import { type ReactNode } from "react";

interface DataCardProps {
  children: ReactNode;
  variant?: "subscription" | "fee" | "defi";
  className?: string;
}

export function DataCard({ children, variant = "subscription", className = "" }: DataCardProps) {
  const variantStyles = {
    subscription: "border-l-4 border-l-accent",
    fee: "border-l-4 border-l-warning",
    defi: "border-l-4 border-l-success",
  };

  return (
    <div className={`data-card ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

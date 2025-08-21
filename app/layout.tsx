import "@coinbase/onchainkit/styles.css";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  return {
    title: "Base Budget Bot",
    description: "Your AI agent for smarter spending and earning on Base",
    other: {
      "fc:frame": JSON.stringify({
        version: "next",
        imageUrl: `${URL}/api/og`,
        button: {
          title: "Launch Base Budget Bot",
          action: {
            type: "launch_frame",
            name: "Base Budget Bot",
            url: URL,
            splashImageUrl: `${URL}/splash.png`,
            splashBackgroundColor: "#1a1a2e",
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/scss/globals.scss";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import Options from "@/components/header/Options";

export const metadata: Metadata = {
  title: "Travel Agency",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Header />
        <div className={cn("max-w-screen-xl mx-auto")}>{children}</div>
      </body>
    </html>
  );
}

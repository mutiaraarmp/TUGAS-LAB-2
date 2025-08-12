// layout.tsx
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Font Showcase",
  description: "Menampilkan 10 font dari static dan variable fonts.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-neutral-100 text-gray-900 p-6">
        {children}
      </body>
    </html>
  );
}
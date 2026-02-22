import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Алексей | Таргетолог Казахстан | ROAS 1336%",
  description: "3 года на рынке Казахстана. 30+ ниш. ROAS до 1336%. Запускаю рекламу, которая приносит деньги, а не просто клики.",
  keywords: "таргетолог, Казахстан, Instagram реклама, TikTok реклама, SMM, таргетированная реклама",
  openGraph: {
    title: "Алексей | Таргетолог Казахстан",
    description: "Таргетолог с результатом, а не обещаниями. ROAS до 1336%.",
    type: "website",
  },
};

import { Suspense } from "react";
import FacebookPixel from "@/components/FacebookPixel";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {/* Декоративные элементы */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="glow-dots">
          <div className="glow-dot"></div>
          <div className="glow-dot"></div>
          <div className="glow-dot"></div>
          <div className="glow-dot"></div>
          <div className="glow-dot"></div>
          <div className="glow-dot"></div>
        </div>
        <div className="noise"></div>
        {children}
      </body>
    </html>
  );
}

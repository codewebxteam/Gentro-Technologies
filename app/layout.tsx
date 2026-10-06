import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gentro Technologies - WhatsApp API & Smart CRM Software | ₹0.15 / Msg",
  description: "Smart messaging ka naya tareeka — jahan har message sirf kharch nahi, balki ek nayi opportunity ban jata hai. Har message ab sirf 15 paise mein & complete WhatsApp API software ₹7,999/year.",
  icons: {
    icon: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png",
    shortcut: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png",
    apple: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-white selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

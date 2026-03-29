import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yaavum Atho Kadai | Best Burmese Atho in Pattabiram, Chennai",
  description:
    "Authentic Burmese Atho, Mohinga & Soups at Pattabiram. Rated 4.6 by 1000+ customers. Dine-in, Takeaway & Delivery. Visit us at Chennai-Tiruvallur High Road.",
  keywords: [
    "Yaavum Atho Kadai",
    "Burmese food Chennai",
    "Atho Pattabiram",
    "Mohinga Chennai",
    "Burmese street food",
    "best atho near me",
  ],
  openGraph: {
    title: "Yaavum Atho Kadai | Authentic Burmese Atho in Pattabiram",
    description:
      "Authentic Burmese Atho, Mohinga & Soups. Rated 4.6 by 1000+ happy customers.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

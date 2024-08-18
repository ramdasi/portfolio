import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishwar Ramdasi | Full-Stack Developer Portfolio",
  description: "Explore the portfolio of Ishwar Ramdasi, a skilled full-stack developer specializing in the MERN stack, AWS, CI/CD pipelines, and microservices architecture. Discover projects like ConnectAi, Scrap Partner, and Your Scrap Buddy, and learn more about his expertise in React.js, Node.js, and Next.js.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="P2EiHosOJVR8QqRRkRt4lJqh9RLbsHW57Xy_-CtdKyw" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

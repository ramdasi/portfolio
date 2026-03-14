import type { Metadata } from 'next';
import { Space_Grotesk, Poppins } from 'next/font/google';
import './globals.css';
import { metadata as siteMetadata, siteConfig, contact } from '@/data/content';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-space-grotesk',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: siteMetadata.authors,
  keywords: siteMetadata.keywords,
  openGraph: siteMetadata.openGraph,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  url: siteConfig.url,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.location,
  },
  sameAs: [contact.linkedin, contact.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${poppins.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

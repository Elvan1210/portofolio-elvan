import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { meta } from '@/data/meta'

const inter = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
})

const interBody = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(meta.seo.url),
  title: {
    default: `${meta.name} — ${meta.title}`,
    template: `%s | ${meta.name}`,
  },
  description: meta.description,
  keywords: meta.seo.keywords,
  authors: [{ name: meta.name, url: meta.seo.url }],
  creator: meta.name,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: meta.seo.url,
    siteName: `Portofolio ${meta.name}`,
    title: `${meta.name} — ${meta.title}`,
    description: meta.description,
    images: [
      {
        url: meta.seo.ogImage,
        width: 768,
        height: 1365,
        alt: `Foto Profil ${meta.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${meta.name} — ${meta.title}`,
    description: meta.description,
    images: [meta.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${interBody.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent theme flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: meta.name,
              url: meta.seo.url,
              image: `${meta.seo.url}${meta.profilePhoto}`,
              email: meta.email,
              sameAs: [meta.github, meta.linkedin],
              jobTitle: 'Software Engineering Student',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: meta.university,
              },
              knowsAbout: meta.seo.keywords,
            }),
          }}
        />
      </head>
      <body className="grain antialiased">
        {children}
      </body>
    </html>
  )
}

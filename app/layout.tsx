import './globals.css'

export const metadata = {
  title: 'Sanskar Dahiya',
  description: 'Portfolio Website',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'portfolio',
  headline: 'Portfolio Website | Sanskar Dahiya',
  description: 'Sanskar Dahiya | Protfolio',
  author: [
    {
      '@type': 'Person',
      name: 'Sanskar Dahiya',
    },
  ],
  datePublished: new Date(),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <body>{children}</body>
    </html>
  )
}

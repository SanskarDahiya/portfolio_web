import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Sanskar Dahiya',
  description: 'Portfolio Website | Portfolio',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sanskar Dahiya',
  additionalName: 'Sanskar',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'India',
    addressRegion: 'Haryana',
    addressLocality: 'Haryana',
    streetAddress: 'Haryana',
  },
  // url: 'https://www.yourwebsite.com',
  // image: 'https://www.yourwebsite.com/images/yourimage.jpg',
  description:
    'Full Stack Web Developer | Experience in NextJS, ReactJS | Software Developer Engineer',
  sameAs: [
    'https://www.linkedin.com/in/sanskardahiya/',
    // 'https://twitter.com/yourtwitterhandle',
    'https://www.instagram.com/sanskar__dahiya/',
  ],
  email: 'mailto:sanskardahiya98@gmail.com',
  jobTitle: 'Software Developer Engineer',
  headline: 'Portfolio Website | Sanskar Dahiya',

  worksFor: {
    '@type': 'Organization',
    name: 'Loco',
    url: 'https://loco.gg/',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Seth Jai Parkash Mukand Lal Institute of Engineering and Technology',
    url: 'https://www.jmit.ac.in/',
  },
  // hasOccupation: [
  //   {
  //     '@type': 'JobPosting',
  //     title: 'Software Developer Engineer',
  //     employmentType: 'Full-time',
  //     hiringOrganization: {
  //       '@type': 'Organization',
  //       name: 'Daffodil Software',
  //       url: 'https://www.daffodilsw.com/',
  //     },
  //     jobLocation: {
  //       '@type': 'Place',
  //       address: {
  //         '@type': 'PostalAddress',
  //         addressLocality: 'Hisar',
  //         addressRegion: 'Haryana',
  //         addressCountry: 'India',
  //       },
  //     },
  //   },
  // ],
  knowsLanguage: [
    {
      '@type': 'Language',
      name: 'English',
      alternateName: 'en',
    },
    {
      '@type': 'Language',
      name: 'Hindi',
      alternateName: 'hi',
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
      <Script
        id="myData"
        type="application/ld+json"
        suppressHydrationWarning={true}
      >
        {JSON.stringify(jsonLd)}
      </Script>
      <body>{children}</body>
    </html>
  )
}

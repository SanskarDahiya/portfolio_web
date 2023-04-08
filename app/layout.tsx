import './globals.css'
import '../styles/global.scss'
import Script from 'next/script'

const PAGE_NAME = 'Sanskar Dahiya'
const PAGE_DESCRIPTION =
  "Welcome to Sanskar Dahiya's portfolio website a full-stack web developer with a focus on JavaScript, Next.js. I has the skills and experience to help bring your web development projects to life."
// 'Full Stack Web Developer | Experience in NextJS, ReactJS | Software Developer Engineer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PAGE_NAME,
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
  description: PAGE_DESCRIPTION,
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
export const metadata = {
  ...jsonLd,
  title: jsonLd.name,
  openGraph: {
    ...jsonLd,
    title: jsonLd.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="9aPGR4HnQhgMxCt1Ts0HrGKulzq-i1WxiQixlBYya9s"
        />
        <Script
          id="myData"
          type="application/ld+json"
          suppressHydrationWarning={true}
        >
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body className="scrollbar-hide">{children}</body>
    </html>
  )
}

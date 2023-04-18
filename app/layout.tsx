import Script from 'next/script'
import '../styles/global.scss'
import './globals.css'

const PAGE_NAME = 'Sanskar Dahiya'
const PAGE_DESCRIPTION =
  "Welcome to Sanskar Dahiya's portfolio website a full-stack web developer with a focus on JavaScript, Next.js. I has the skills and experience to help bring your web development projects to life."
// 'Full Stack Web Developer | Experience in NextJS, ReactJS | Software Developer Engineer'
const G_TAG_ID = 'GTM-PXFRS57'
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
        <Script
          id="google-tag-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG_ID}`}
          strategy="afterInteractive"
        />
        {/* <!-- Google Tag Manager --> */}
        <Script id="google-tag-manager" strategy="afterInteractive">{`
        ;(function (w, l) {
            w[l] = w[l] || []
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
            w[l].push({ 'this.time': new Date().getTime(), event: 'sanskardahiya.in-load-at' })
          })(window, 'dataLayer')
        `}</Script>
        {/* <!-- End Google Tag Manager --> */}
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
      <body className="scrollbar-hide">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${G_TAG_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {children}
      </body>
    </html>
  )
}

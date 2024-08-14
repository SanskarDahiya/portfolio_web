import Script from 'next/script'
import '@/styles/global.scss'
import '@/app/globals.css'

const PAGE_NAME = 'Crack Google Interview as Software Engineer'
const PAGE_DESCRIPTION =
  'A detailed roadmap to prepare for and crack the full-stack developer job at Google.'

const LONG_DESCRIPTION =
  "Cracking a job at Google as a Full Stack Developer requires a strategic approach, thorough preparation, and mastery of key areas like coding, system design, and problem-solving. Begin by understanding Google's hiring process, from resume shortlisting to technical and behavioral interviews. Focus on essential skills like data structures, algorithms, and full-stack development expertise in both front-end and back-end technologies. Additionally, practice mock interviews, prepare for system design questions, and develop strong communication skills to align with Google’s culture. Continuous learning and persistence will help you succeed."
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  description: PAGE_DESCRIPTION,
  name: PAGE_NAME,
  articleBody: LONG_DESCRIPTION,
  articleSection: 'Job Search',
  about: LONG_DESCRIPTION,
  datePublished: new Date('15 Aug 2024'),
  inLanguage: 'en-US',
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
  return <>{children}</>
}

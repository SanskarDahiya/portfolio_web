import Script from 'next/script'
import '@/styles/global.scss'
import '@/app/globals.css'
import NavbarSection from '@/components/NavbarSection'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="scrollbar-hide relative">
        {children}
        <NavbarSection />
      </body>
    </html>
  )
}

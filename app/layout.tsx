import '@/styles/global.scss'
import '@/app/globals.css'

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
      </head>
      <body className="scrollbar-hide relative">{children}</body>
    </html>
  )
}

import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import Head from 'next/head'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Coding Werkstatt',
    default: 'Coding Werkstatt - Ein Programmier Pionier startet hier.',
  },
  description:
    'In der Coding Werkstatt legen wir die Basis für alle, die das Programmieren von der Pike auf lernen wollen. Verwirkliche deine Projekte und Ideen mit uns.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <Head>
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16687855766"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16687855766');
          `,
        }} />
      </Head>
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

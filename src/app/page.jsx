import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Head from 'next/head'

export default function Home() {
  return (
    <>
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
      <Header />
      <main>
        <Hero />
        {/*<PrimaryFeatures />*/}
        {/*<SecondaryFeatures />*/}
        <Pricing />
        {/*<Faqs />*/}
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

import data from '@/data/site.yml';
import Head from 'next/head';
import { Poppins, Noto_Sans_TC } from '@next/font/google'
import Header from './header';
import Footer from './footer';
import Contact from '@/components/contact';

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '700'],
  variable: '--font-noto-sans-tc',
  preload: false,
})

const poppins = Poppins({
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export default function Layout({ children }) {
  return (
    <div className={`main-wrapper ${poppins.variable} ${notoSansTC.variable}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={data.url} key="canonical"/>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} key="og:title" />
        <meta property="og:image" content="/og_image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.url} key="og:url" />
      </Head>
      <Header nav={data.nav}/>
      <main className="c f-v f-j-b">
        {children}
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </div>
  )
}
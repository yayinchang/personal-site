import Head from 'next/head';
import { Poppins, Noto_Sans_TC } from '@next/font/google'
import Header from './header';
import Footer from './footer';

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '700'],
  variable: '--font-noto-sans-tc',
  preload: false,
})

const poppins = Poppins({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteTitle = process.env.NEXT_PUBLIC_SITE_NAME;
export const siteDesc = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

export default function Layout({ children }) {
  return (
    <div className={`main-wrapper ${poppins.variable} ${notoSansTC.variable}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrl} key="canonical"/>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta property="og:title" content={siteTitle} key="og:title" />
        <meta property="og:image" content="/og_image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} key="og:url" />
      </Head>
      <Header />
      <main className="c">{children}</main>
      <Footer />
    </div>
  )
}
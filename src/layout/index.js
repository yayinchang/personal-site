import Head from 'next/head';
import { Poppins, Noto_Sans_TC } from '@next/font/google'

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

export const siteTitle = process.env.NEXT_PUBLIC_SITE_NAME;
export const siteDesc = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

export default function Layout({ children }) {
  return (
    <div className={`${poppins.variable} ${notoSansTC.variable}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content=""/>
      </Head>
      <main className="c">{children}</main>
    </div>
  )
}
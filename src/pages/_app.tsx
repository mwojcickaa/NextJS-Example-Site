import { useEffect } from 'react'
import { clarity } from 'react-microsoft-clarity'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    clarity.init(process.env.CLARITY_KEY)
  }, [])

  return <>
    <Head>
      <title> NextJS Example Site</title>
    </Head>
    <Component {...pageProps} />
  </>
}

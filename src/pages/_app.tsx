import { useEffect } from 'react'
import { clarity } from 'react-microsoft-clarity'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    clarity.init(process.env.NEXT_PUBLIC_CLARITY_KEY)
  }, [])

  return <>
    <Head>
      <title> NextJS Example Site</title>
      <meta
          name="description"
          content="Do you want your dishes to have more flavor? Be sure to check our offer! We have many spices of the best quality at our disposal."
          key="desc"
        />
    </Head>
    <Component {...pageProps} />
  </>
}

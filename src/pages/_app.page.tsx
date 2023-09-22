import { OccurenceProvider } from '@/contexts/OcurrenceContext'
import '../styles/global.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={{}}>
        <OccurenceProvider>
          <Component {...pageProps} />
        </OccurenceProvider>
      </ThemeProvider>
    </>
  )
}

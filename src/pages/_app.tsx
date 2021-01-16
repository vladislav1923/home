import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

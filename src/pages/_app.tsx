import type { AppProps } from 'next/app';
import '../styles/main.scss';
import '../styles/fonts.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

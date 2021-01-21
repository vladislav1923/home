import type { AppProps } from 'next/app';
import '../styles/main.scss';
import '../styles/fonts.scss';
import { Layout } from '../components/shared/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

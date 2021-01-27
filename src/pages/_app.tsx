import type { AppProps } from 'next/app';
import '../styles/main.scss';
import '../styles/fonts.scss';
import { Layout } from '../components/shared/Layout';
import { GlobalContext } from '../contexts/Global';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { authUrls, abTests } = pageProps;

  return (
    <GlobalContext.Provider value={{ authUrls, abTests }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

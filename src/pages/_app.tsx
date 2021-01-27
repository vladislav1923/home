/* eslint-disable react/static-property-placement, @typescript-eslint/no-shadow */
import { Component, ErrorInfo } from 'react';
import { AppProps } from 'next/app';
import '../styles/main.scss';
import '../styles/fonts.scss';
import { Layout } from '../components/shared/Layout';
import { GlobalContext } from '../contexts/Global';

type Props = AppProps;

export default class MyApp extends Component<Props> {
    public props: Props;

    constructor(props: Props) {
      super(props);
      this.props = props;
    }

    /* Global errors handler */
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.log(error);
      console.log(errorInfo);
    }

    public render() {
      const { pageProps, Component } = this.props;
      const { authUrls, abTests } = pageProps;

      return (
        <GlobalContext.Provider value={{ authUrls, abTests }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalContext.Provider>
      );
    }
}

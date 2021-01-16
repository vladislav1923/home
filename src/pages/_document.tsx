import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html lang="ru">
                <Head>
                    <base href="/" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="msapplication-TileColor" content="#E30611" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="icon" type="image/x-icon" href="favicons/favicon.ico"/>
                    <link rel="shortcut icon" href="favicons/favicon.ico"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="favicons/icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="favicons/icon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="favicons/icon-16x16.png"/>
                    <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="E30611"/>
                    <link rel="manifest" href="manifest.json"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
};
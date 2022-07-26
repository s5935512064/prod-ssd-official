import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta name="facebook-domain-verification" content="glb0tccm02qv3og4mwwgzj132al5b6" />

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    {/* <script
                        type="text/plain"
                        data-cookiecategory="analytics"
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        type="text/plain"
                        data-cookiecategory="analytics"
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    /> */}
                </Head>
                <body>


                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
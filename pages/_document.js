import Document, { Html, Head, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap" rel="stylesheet" />

                    <link rel="icon" href="/images/favicon/F-logo.png" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
import Head from 'next/head'

import '../styles/globals.css'
import '../styles/page-container.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>
            <title>Forsyth Recipes</title>
        </Head>

        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
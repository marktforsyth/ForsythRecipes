import Head from 'next/head'

import NavBar from '../components/nav-bar'

import '../styles/globals.css'
import '../styles/page-container.css'
import '../styles/nav-bar.css'
import '../styles/search-results.css'
import '../styles/menu.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>
            <title>Forsyth Recipes</title>
        </Head>

        <NavBar />

        <div className='page-container'>
          <div className='column'>
            <Component {...pageProps} />
          </div>
        </div>
    </div>
  )
}

export default MyApp
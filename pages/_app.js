import { useEffect } from 'react'
import { useRouter } from 'next/router'

import NavBar from '../components/nav-bar/nav-bar'

import '../styles/global/globals.css'
import '../styles/global/page-content.css'
import '../styles/nav-bar.css'
import '../styles/error.css'
import '../styles/search-results.css'
import '../styles/menu/menu.css'
import '../styles/menu/category-btn.css'
import '../styles/menu/recipe-btn.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <div>
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
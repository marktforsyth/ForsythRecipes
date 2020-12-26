import { useEffect } from 'react'
import { useRouter } from 'next/router'

import NavBar from '../components/nav-bar/nav-bar'

import '../styles/global/globals.css'
import '../styles/global/page-content.css'
import '../styles/global/nav-bar.css'
import '../styles/error.css'
import '../styles/search-results.css'
import '../styles/menu/menu.css'
import '../styles/menu/category-btn.css'
import '../styles/menu/recipe-btn.css'
import '../styles/recipe-detail.css'
import '../styles/media-queries.css'
import '../styles/recipe-form.css'

// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

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

import { Auth0Provider } from "@auth0/auth0-react";

const AppWrapper = ({ Component, pageProps }) => {
    return (
        <Auth0Provider
            domain="marktf.us.auth0.com"
            clientId="PP1VCCJKI6qTbp46COupWKAtNV2czxcN"
            redirectUri="https://freshipes.shadowfire168.repl.co/"
        >
            <MyApp Component={Component} pageProps={pageProps} />
        </Auth0Provider>
    )
}

export default AppWrapper

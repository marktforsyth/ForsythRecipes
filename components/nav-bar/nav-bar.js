import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

import LoginBtn from '../auth/login-btn'
import LogoutBtn from '../auth/logout-btn'

import SearchIcon from '../../public/images/nav-bar/search.svg'
import HomeIcon from '../../public/images/nav-bar/home.svg'
import AddRecipeIcon from '../../public/images/nav-bar/add-recipe.svg'

const NavBar = () => {
    const router = useRouter()
    const [searchbarValue, setSearchbarValue] = useState('')

    const { isAuthenticated } = useAuth0()

    useEffect(() => {
        const handleRouteChange = () => {
            setSearchbarValue('')
            window.getSelection().removeAllRanges()
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    const checkForSubmit = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {            
            router.push({
                pathname: '/search',
                query: { q: event.target.value },
            })
        }
    }

    const handleChange = (event) => {
        setSearchbarValue(event.target.value)
    }

    return (
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                <div className='left-column'>
                    <HomeIcon onClick={() => {
                        router.push('/')                                                                    
                    }} />
                    { isAuthenticated ? (
                      <AddRecipeIcon onClick={() => {
                        router.push('/create-recipe')
                      }} />
                    ) : null}
                </div>

                <div className='right-column'>
                    <SearchIcon />
                    <input
                        type='text'
                        placeholder='Search recipes...'
                        onKeyDown={event => checkForSubmit(event)}
                        value={searchbarValue}
                        onChange={event => handleChange(event)}
                    />
                    { isAuthenticated ? (
                      <LogoutBtn/>
                    ) : (
                      <LoginBtn/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar
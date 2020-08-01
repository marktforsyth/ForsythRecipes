import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import SearchIcon from '../public/images/nav-bar/search.svg'
import HomeIcon from '../public/images/nav-bar/home.svg'
import AddRecipeIcon from '../public/images/nav-bar/add-recipe.svg'

const NavBar = (props) => {
    const router = useRouter()

    const checkForSubmit = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {            
            router.push('/search', `/search?q=${event.target.value}`)
        }
    }

    useEffect(() => {
        
    })

    return (
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                <div className='left-column'>
                    <HomeIcon onClick={() => {
                        router.push('/')
                    }} />
                    <AddRecipeIcon />
                </div>

                <div className='right-column'>
                    <SearchIcon />
                    <input
                        type='text'
                        placeholder='Search recipes...'
                        onKeyDown={event => checkForSubmit(event)}
                        defaultValue={props.defaultValue}
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar
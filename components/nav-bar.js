import React, { Component } from 'react'
import { useRouter } from 'next/router'

import SearchIcon from '../images/search.svg'
import HomeIcon from '../images/home.svg'
import AddRecipeIcon from '../images/add-recipe.svg'

const NavBar = () => {
    const router = useRouter()

    const checkForSubmit = (event) => {
        if (event.key === 'Enter') {
            console.log('You pressed enter!')
            console.log(event.target.value)
            
            router.push('/search', `/search?q=${event.target.value}`)
        }
    }

    return (
        <div className='nav-bar-container'>
            <div>
                <HomeIcon />
                <AddRecipeIcon />
            </div>

            <div>
                <SearchIcon />
                <input
                    type='text'
                    placeholder='Search recipes...'
                    onKeyDown={event => checkForSubmit(event)}
                />
            </div>
        </div>
    )
}

export default NavBar
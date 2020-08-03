import React, { useState } from 'react'
import { useRouter } from 'next/router'

import SearchIcon from '../public/images/nav-bar/search.svg'
import HomeIcon from '../public/images/nav-bar/home.svg'
import AddRecipeIcon from '../public/images/nav-bar/add-recipe.svg'

let clearSearchbar
let query

const NavBar = () => {
    const router = useRouter()
    const [searchbarValue, setSearchbarValue] = useState('')

    clearSearchbar = () => {
        setSearchbarValue('')
    }

    const checkForSubmit = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {            
            router.push('/search', `/search?q=${event.target.value}`)
            query = event.target.value
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
                    <AddRecipeIcon />
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
                </div>
            </div>
        </div>
    )
}

export default NavBar
export { clearSearchbar, query }
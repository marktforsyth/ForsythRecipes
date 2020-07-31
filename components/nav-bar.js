import React from 'react'
import { useRouter } from 'next/router'

import SearchIcon from '../images/search.svg'
import HomeIcon from '../images/home.svg'
import AddRecipeIcon from '../images/add-recipe.svg'

const NavBar = (props) => {
    const router = useRouter()

    const checkForSubmit = (event) => {
        if (event.key === 'Enter') {            
            router.push('/search', `/search?q=${event.target.value}`)
            
        }
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
                        defaultValue={props.defaultValue}
                    />
                </div>
            </div>

            <div className='bottom-border-boundary'></div>
        </div>
    )
}



export default NavBar
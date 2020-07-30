import React, { Component } from 'react'
import { useRouter } from 'next/router'

import SearchIcon from '../images/search.svg'
import HomeIcon from '../images/home.svg'
import AddRecipeIcon from '../images/add-recipe.svg'

class NavBar extends Component {
    constructor() {
        super()

        this.state = {
            textToSearch: ''
        }
    }

    handleSearchBarChange(event) {
        this.setState({
            textToSearch: event.target.value
        })
    }

    checkIfUserIsPressingEnter(event) {
        if (event.key === 'Enter' && this.state.textToSearch !== '') {
            // Search the recipe database
            console.log('You are searching for: ' + this.state.textToSearch)
        }
    }

    render() {
        return(
            <div className='nav-bar-container'>
                <div>
                    <HomeIcon className='nav-icon' />
                    <AddRecipeIcon className='nav-icon' />
                </div>
    
                <div className='searchbar-container'>
                    <SearchIcon className='nav-icon' />
                    <input
                        type='text'
                        placeholder='Search recipes...'
                        onKeyDown={event => this.checkIfUserIsPressingEnter(event)}
                        onChange={event => this.handleSearchBarChange(event)}
                    />
                </div>
            </div>
        )
    }
}

export default NavBar
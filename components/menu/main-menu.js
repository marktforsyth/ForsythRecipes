import React from 'react'

import RecipeCategoryBtn from './recipe-category-button'

import Categories from '../../data/categories.json'

const MainMenu = () => {
    let categoryNames = Object.keys(Categories)

    return(
        <div>
            <h1 className='menu-title' >Main Categories</h1>

            <div className='category-btns-container'>
                {categoryNames.map(categoryName => {
                    return (
                        <RecipeCategoryBtn
                            name={categoryName}
                            key={categoryName}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MainMenu
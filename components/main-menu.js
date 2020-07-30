import React from 'react'

import RecipeCategoryBtn from './recipe-category-button'

import Categories from '../data/categories.json'

const MainMenu = () => {
    let categoryTitles = Object.keys(Categories)

    return(
        <div>
            {categoryTitles.map(categoryTitle => {
                    return (
                        <RecipeCategoryBtn
                            name={categoryTitle}
                            key={categoryTitle}
                        />
                    )
                })}
        </div>
    )
}

export default MainMenu
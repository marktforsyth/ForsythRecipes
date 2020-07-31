import React from 'react'

import RecipeCategoryBtn from './recipe-category-button'

import Categories from '../data/categories.json'

const MainMenu = () => {
    let categoryNames = Object.keys(Categories)

    return(
        <div>
            {categoryNames.map(categoryName => {
                    return (
                        <RecipeCategoryBtn
                            name={categoryName}
                            key={categoryName}
                        />
                    )
                })}
        </div>
    )
}

export default MainMenu
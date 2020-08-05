import React from 'react'
import Custom404 from '../../pages/404'
import { NextSeo } from 'next-seo'

import RecipeBtn from '../../components/recipe-button'

import Categories from '../../data/categories.json'

const RecipeCategoryDetail = ({ cname, categoryExists }) => {
    if (!categoryExists) {
        return <Custom404 />
    }

    if (!cname) {
        return null
    }

    return (
        <div>
            <NextSeo
                title={cname + ' - Forsyth Recipes'}
            />

            <h1 className='menu-title' >{cname}</h1>

            {Categories[cname].recipeTitles.map(recipeTitle => {
                return (
                    <RecipeBtn key={recipeTitle} name={recipeTitle} />
                )
            })}
        </div>
    )
}

RecipeCategoryDetail.getInitialProps = async ({ query }) => {
    const { cname } = query
    const categoryExists = Object.keys(Categories).includes(cname)

    return {
        cname,
        categoryExists
    }
}

export default RecipeCategoryDetail
import React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import RecipeBtn from '../../components/recipe-button'

import Categories from '../../data/categories.json'

const RecipeCategoryDetail = () => {
    const router = useRouter()
    const { cname } = router.query

    return (
        <div>
            <NextSeo
                title={cname + ' - Forsyth Recipes'}
            />

            <h1 className='menu-title' >{cname}</h1>

            {cname ? (
                Categories[cname].recipeTitles.map(recipeTitle => {
                    return (
                        <RecipeBtn key={recipeTitle} name={recipeTitle} />
                    )
                })
            ) : null}
        </div>
    )
}

export default RecipeCategoryDetail
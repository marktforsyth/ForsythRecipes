import React from 'react'
import Error from '../../pages/_error'
import { NextSeo } from 'next-seo'

import RecipeBtn from '../../components/recipe-button'

import Categories from '../../data/categories.json'

const RecipeCategoryDetail = ({ cname, statusCode }) => {
    if (statusCode === 404) {
        return <Error statusCode={statusCode} />
    }

    console.log(Object.keys(Categories).includes('jon'))

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

RecipeCategoryDetail.getInitialProps = async ({ query, res }) => {
    const { cname } = query
    const categoryExists = Object.keys(Categories).includes(cname)

    if (!categoryExists) {
        res.statusCode = 404
    }

    return {
        cname: cname,
        statusCode: categoryExists ? 200 : 404
    }
}

export default RecipeCategoryDetail
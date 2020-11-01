import React, {useEffect, useState} from 'react'
import { NextSeo } from 'next-seo'
import axios from 'axios'

import Custom404 from '../../pages/404'
import RecipeBtn from '../../components/menu/recipe-button'

const RecipeCategoryDetail = ({ cname }) => {
    if (!cname) {
        return null
    }

    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.get('/api/categories')
        .then(response => {
            setCategories(response.data)
        })
        .catch(error => {
            console.log('RecipeCategoryDetail error', error)
        })
    }, [])

    if (!categories) {
        return null
    }

    const categoryExists = Object.keys(categories).includes(cname)

    if (!categoryExists) {
        return <Custom404 />
    }

    return (
        <div>
            <NextSeo
                title={cname + ' - Forsyth Recipes'}
            />

            <h1 className='menu-title' >{cname}</h1>

            {categories[cname].recipeTitles.map(recipeTitle => {
                return (
                    <RecipeBtn key={recipeTitle} name={recipeTitle} />
                )
            })}
        </div>
    )
}

RecipeCategoryDetail.getInitialProps = async ({ query }) => {
    const { cname } = query

    return { cname }
}

export default RecipeCategoryDetail
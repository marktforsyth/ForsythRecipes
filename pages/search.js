import React, { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import RecipeBtn from '../components/menu/recipe-button'

import Recipes from '../data/recipes.json'

const SearchResults = () => {
    const router = useRouter()
    let { q: query } = router.query

    useEffect(() => {
        const handleRouteChange = () => {
            query = router.query
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    if (!query) {
        return null
    }

    const findByRecipeTitle = () => {
        let recipeTitlesThatMatch = []
        
        for (let r in Recipes) {
            let recipe = Recipes[r]

            if (recipe.title.toUpperCase().includes(query.toUpperCase())) {
                recipeTitlesThatMatch.push(recipe.title)
            }
        }

        return recipeTitlesThatMatch.map(recipeTitle => (
            <div key={'search_res_title_' + recipeTitle}>
                <RecipeBtn name={recipeTitle} />
            </div>
        ))
    }

    const findByRecipeBody = () => {
        // Note: if a recipe matches in titles, don't match it in bodies (so no repeats)
        /* e.g.
            if (recipeTitlesThatMatch.includes(catTitleThatMatches)) {
                don't bother
            }
        */

        // Better to use state? Or just declare recipeTitlesThatMatch on SearchResult()'s scope?
    }

    const findByCategoryName = () => {

    }

    return (
        <div>
            <NextSeo
                title={'Search results: ' + query + ' - Forsyth Recipes'}
            />
            
            <div className='result-heading-container'>
                <h2 className='result-heading'>
                    <i>Showing results for</i> <span>{query}</span>
                </h2>
            </div>

            <h1>Recipes With Matching <i>Titles</i>:</h1>
            <div>
                {findByRecipeTitle()}
            </div>

            <h1>Recipes With Matching <i>Content</i>:</h1>

            <h1>Categories That Match:</h1>
        </div>
    )
}

export default SearchResults
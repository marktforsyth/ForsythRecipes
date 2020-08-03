import React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import RecipeBtn from '../components/recipe-button'

import Recipes from '../data/recipes.json'

const SearchResults = () => {
    const router = useRouter()

    const pageUrl = router.asPath
    const queryIndex = pageUrl.indexOf('?q=')
    const query = pageUrl.substring(queryIndex + 3).replace(/%20/g, ' ')

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
            
            <div>
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
        </div>
    )
}

export default SearchResults
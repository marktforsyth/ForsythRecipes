import React from 'react'

import NavBar from '../components/nav-bar'
import RecipeBtn from '../components/recipe-button'

import Recipes from '../data/recipes.json'

const SearchResults = () => {
    const pageUrl = 'http://localhost:3000/search?q=Al'
    const queryIndex = pageUrl.indexOf('q=')
    const query = pageUrl.substring(queryIndex + 2).replace(/%20/g, ' ')

    const findByRecipeTitle = () => {
        let recipeTitlesThatMatch = []
        
        for (let r in Recipes) {
            let recipe = Recipes[r]

            if (recipe.title.includes(query)) {
                recipeTitlesThatMatch.push(recipe.title)
            }
        }

        return recipeTitlesThatMatch.map(recipeTitle => (
            <RecipeBtn key={'search_res_' + recipeTitle} name={recipeTitle} />
        ))
    }

    const findByRecipeBody = () => {
        // Note: if a recipe matches in titles, don't match it in bodies (so no repeats)
    }

    const findByCategoryName = () => {

    }

    return (
        <div>
                <div>
                    <NavBar defaultValue={query} />

                    <h1>Recipes With Matching <i>Titles</i>:</h1>
                    <pre>
                        {findByRecipeTitle()}
                    </pre>

                    <h1>Recipes With Matching <i>Bodies</i>:</h1>

                    <h1>Categories That Match:</h1>
                </div>
        </div>
    )
}

export default SearchResults
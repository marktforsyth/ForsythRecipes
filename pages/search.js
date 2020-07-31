import React from 'react'
import { useRouter } from 'next/router'

import NavBar from '../components/nav-bar'

import Recipes from '../data/recipes.json'

const SearchResults = () => {
    const router = useRouter()
    const q = router.asPath.substring(10).replace(/&20/g, ' ')

    const findByRecipeTitle = () => {
        let recipeTitlesThatMatch = []
        console.log(typeof q)
        
        for (let r in Recipes) {
            let recipe = Recipes[r]
            console.log(recipe.title)

            if (recipe && recipe.title.includes(q)) {
                recipeTitlesThatMatch.push(recipe.title + '\n')
            }
        }

        return recipeTitlesThatMatch
    }

    const findByRecipeBody = () => {

    }

    const findByCategoryName = () => {

    }

    return (
        <div>
                <div>
                    <NavBar defaultValue={q} />

                    <h1>Matching Recipe Titles:</h1>
                    <pre>
                        {findByRecipeTitle()}
                    </pre>

                    <h1>Matching Recipe Bodies:</h1>

                    <h1>Matching Categories:</h1>
                </div>
        </div>
    )
}

export default SearchResults
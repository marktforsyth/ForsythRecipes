import React, { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import RecipeBtn from '../components/menu/recipe-button'
import searchDatabase from '../components/search/search-database'

import Recipes from '../data/recipes.json'
import Categories from '../data/categories.json'

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

    let recipleTitleSearchResults = []
    const findByRecipeTitle = () => {
        for (let r in Recipes) {
            let recipe = Recipes[r]
    
            if (recipe.title.toUpperCase().includes(
                query.toUpperCase()
            )) {
                recipleTitleSearchResults.push(recipe.title)
            }
        }

        return (
            recipleTitleSearchResults.length !== 0 ? (
                <div>
                    <h1>Recipes With Matching <i>Titles</i>:</h1>

                    {recipleTitleSearchResults.map(searchResult => (
                        <div key={'search_res_title_' + searchResult}>
                            <RecipeBtn name={searchResult} />
                        </div>
                    ))}
                </div>
            ) : (
                <h2>No recipes found with matching <i>titles</i>.</h2>
            )
        )
    }

    let recipleBodySearchResults = []
    const findByRecipeBody = () => {
        for (let r in Recipes) {
            let recipe = Recipes[r]

            if (recipe.body.toUpperCase().includes(
                query.toUpperCase()
            ) && !recipleTitleSearchResults.includes(recipe.title)) {
                recipleBodySearchResults.push(recipe.title)
            }
        }

        console.log(recipleBodySearchResults.length)
        
        return (
            recipleBodySearchResults.length !== 0 ? (
                <div>
                    <h1>Recipes With Matching <i>Content</i>:</h1>
                    {recipleBodySearchResults.map(searchResult => (
                        <div key={'search_res_body_' + searchResult}>
                            <RecipeBtn name={searchResult} />
                        </div>
                    ))}
                </div>
            ) : null
        )
    }

    let categoryNameSearchResults = []
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

                {/* {searchDatabase(Recipes, query, 'title').map(searchResult => (
                    <div key={'search_res_title_' + searchResult}>
                        <RecipeBtn name={searchResult} />
                    </div>
                ))} */}
            {findByRecipeTitle()}
            {findByRecipeBody()}

            <h1>Categories That Match:</h1>
            <div>
                {findByCategoryName()}
            </div>
        </div>
    )
}

export default SearchResults
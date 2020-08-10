import React, { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import RecipeBtn from '../components/menu/recipe-button'
import RecipeCategoryBtn from '../components/menu/recipe-category-button'
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

    return (
        <div>
            <NextSeo
                title={'Search results: ' + query + ' - Forsyth Recipes'}
            />
            
            <div className='result-heading-container'>
                <h2 className='result-heading'>
                    <i>Showing results for</i> <span className='search-query'>{query}</span>
                </h2>
            </div>

            {searchDatabase(Recipes, query, 'title', RecipeBtn)}
            {searchDatabase(Recipes, query, 'body', RecipeBtn)}
            {searchDatabase(Categories, query, 'name', RecipeCategoryBtn)}
        </div>
    )
}

export default SearchResults
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import axios from 'axios'

import RecipeBtn from '../components/menu/recipe-button'
import RecipeCategoryBtn from '../components/menu/recipe-category-button'
import searchDatabase from '../components/search/search-database'

const SearchResults = () => {
    const router = useRouter()
    let { q: query } = router.query

    const [recipes, setRecipes] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.get('/api/recipes')
        .then(response => {
            setRecipes(response.data)
        })
        .catch(error => {
            console.log('SearchResults error', error)
        })

        axios.get('/api/categories')
        .then(response => {
            setCategories(response.data)
        })
        .catch(error => {
            console.log('SearchResults error', error)
        })

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

    if (!recipes || !categories) {
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

            {searchDatabase(recipes, query, 'title', RecipeBtn)}
            {searchDatabase(recipes, query, 'body', RecipeBtn)}
            {searchDatabase(categories, query, 'name', RecipeCategoryBtn)}
        </div>
    )
}

export default SearchResults

// a useless commment, we'll see if this helps
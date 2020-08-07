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
        let searchResults = []

        // foods.forEach(food => {
        //     if (food.toUpperCase().includes(
        //         query.toUpperCase()
        //     )) {
        //         let numberOfMatchingLetters = 0
        //         food.split('').forEach(letter => {
        //             if (query.includes(letter)) {
        //                 numberOfMatchingLetters += 1
        //             }
        //         })
    
        //         let differenceInWordLength = Math.abs(food.length - query.length)
    
        //         searchResults.push({
        //             result: food,
        //             howCloselyItMatches: numberOfMatchingLetters - differenceInWordLength
        //         })
        //     }
        // })

        for (let r in Recipes) {
            let recipe = Recipes[r]

            if (recipe['title'].toUpperCase().includes(
                query.toUpperCase()
            )) {
                let numberOfMatchingLetters = 0
                recipe['title'].split('').forEach(letter => {
                    if (query.includes(letter)) {
                        numberOfMatchingLetters += 1
                    }
                })
    
                let differenceInWordLength = Math.abs(recipe['title'].length - query.length)
    
                searchResults.push({
                    result: recipe['title'],
                    howCloselyItMatches: numberOfMatchingLetters - differenceInWordLength
                })
            }
        }

        const sortedSearchResultObjects = searchResults.sort((a, b) => {
            return b.howCloselyItMatches - a.howCloselyItMatches
        })
        
        // for (let r in Recipes) {
        //     let recipe = Recipes[r]

        //     if (recipe.title.toUpperCase().includes(query.toUpperCase())) {
        //         recipeTitlesThatMatch.push(recipe.title)
        //     }
        // }

        let sortedSearchResults = []
        for (let r in sortedSearchResultObjects) {
            sortedSearchResults.push(
                sortedSearchResultObjects[r].result
            ) 
        }

        return sortedSearchResults.map(searchResult => (
            <div key={'search_res_title_' + searchResult}>
                <RecipeBtn name={searchResult} />
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
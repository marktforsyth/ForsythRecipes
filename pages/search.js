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

                    <div className='results-container'>
                        {recipleTitleSearchResults.map(searchResult => (
                            <div key={'search_res_rec_title_' + searchResult}>
                                <RecipeBtn name={searchResult} />
                            </div>
                        ))}
                    </div>
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
        
        return (
            recipleBodySearchResults.length !== 0 ? (
                <div>
                    <h1>Recipes With Matching <i>Content</i>:</h1>

                    <div className='results-container'>
                        {recipleBodySearchResults.map(searchResult => (
                            <div key={'search_res_rec_body_' + searchResult}>
                                <RecipeBtn name={searchResult} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <h2>No recipes found with matching <i>titles</i>.</h2>
            )
        )
    }

    const searchDatabase = (Database, query, dataSection, Button) => {
        let searchResults = []
        let recipeTitleSearchResults = []

        for (let d in Database) {
            let data = Database[d]

            let resultNotAlreadyListed = true
            if (dataSection === 'body' && recipeTitleSearchResults.length !== 0) {
                resultNotAlreadyListed = false
            }

            if (data[dataSection].toUpperCase().includes(
                query.toUpperCase()
            ) && resultNotAlreadyListed) {
                if (dataSection === 'body') {
                    searchResults.push(data['title'])
                } else {
                    searchResults.push(data[dataSection])
                }

                if (dataSection === 'title') {
                    recipeTitleSearchResults.push(data[dataSection])
                }
            }
        }

        const renderHeading = () => {
            if (dataSection === 'title') {
                return <h1>Recipes With Matching <i>Titles</i>:</h1>
            } else if (dataSection === 'body') {
                return <h1>Recipes With Matching <i>Content</i>:</h1>
            } else {
                return <h1>Categories that match:</h1>
            }
        }

        return (
            searchResults.length !== 0 ? (
                <div>
                    {renderHeading()}

                    {searchResults.map(searchResult => (
                        <div key={'search_res_' + dataSection + searchResult}>
                            <Button name={searchResult} />
                        </div>
                    ))}
                </div>
            ) : (
                <h2></h2>
            )
        )
    }

    let categoryNameSearchResults = []
    const findByCategoryName = () => {
        for (let c in Categories) {
            let category = Categories[c]

            console.log(category.name, query, category.name.includes(query))

            if (category.name.toUpperCase().includes(
                query.toUpperCase()
            )) {
                categoryNameSearchResults.push(category.name)
            }
        }

        return (
            categoryNameSearchResults.length !== 0 ? (
                <div>
                    <h1>Categories That Match:</h1>

                    <div className='category-btns-container'>
                        {categoryNameSearchResults.map(searchResult => (
                            <div key={'search_res_cat_name_' + searchResult}>
                                <RecipeCategoryBtn name={searchResult} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <h2>No matching categories found.</h2>
            )
        )
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
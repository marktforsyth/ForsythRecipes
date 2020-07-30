import React from 'react'
import { useRouter } from 'next/router'

import NavBar from '../../components/nav-bar'
import RecipeBtn from '../../components/recipe-button'

import Categories from '../../data/categories.json'

const RecipeCategoryDetail = () => {
    const router = useRouter()
    const { cname } = router.query

    return (
        <div>
            <NavBar />

            <div className='page-container'>
                <div className='column'>
                    <h1>{cname}</h1>

                    {cname ? (
                        Categories[cname].recipeNames.map(recipeName => {
                            return (
                                <div key={recipeName}>
                                    <RecipeBtn name={recipeName} />
                                </div>
                            )
                        })
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default RecipeCategoryDetail
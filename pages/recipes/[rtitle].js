import React from 'react'
import { useRouter } from 'next/router'

import NavBar from '../../components/nav-bar'

import Recipes from '../../data/recipes.json'

const RecipeDetail = () => {
    const router = useRouter()
    const { rtitle } = router.query

    return(
        <div>
            <NavBar />

            <div className='page-container'>
                <div className='column'>
                    <h1>{rtitle}</h1>

                    {rtitle ? (
                        <div>
                            <pre>{Recipes[rtitle].body}</pre>

                            <br></br> {/* <-- Temporary */}
                            <p>Created by: {Recipes[rtitle].creator}</p>
                            <p>Created on: {Recipes[rtitle].created}</p>
                            {Recipes[rtitle].modified ? (
                                <p>Last edited on: {Recipes[rtitle].modified}</p>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import Recipes from '../../data/recipes.json'

const RecipeDetail = () => {
    const router = useRouter()
    const { rtitle } = router.query

    

    return(
        <div>
            <NextSeo
                title={rtitle + ' - Forsyth Recipes'}
            />

            <h1>{rtitle}</h1>

            {rtitle ? (
                <div>
                    <pre>{Recipes[rtitle].body}</pre>

                    <br></br>
                    <p>Created by: {Recipes[rtitle].creator}</p>
                    <p>Created on: {Recipes[rtitle].created}</p>
                    {Recipes[rtitle].modified ? (
                        <p>Last edited on: {Recipes[rtitle].modified}</p>
                    ) : null}
                </div>
            ) : null}
        </div>
    )
}

export default RecipeDetail
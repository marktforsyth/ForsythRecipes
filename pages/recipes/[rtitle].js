import React from 'react'
import Error from '../../pages/_error'
import { NextSeo } from 'next-seo'

import Recipes from '../../data/recipes.json'

const RecipeDetail = ({ rtitle, statusCode }) => {
    if (statusCode === 404) {
        return <Error statusCode={statusCode} />
    }

    if (!rtitle) {
        return null
    }

    return(
        <div>
            <NextSeo
                title={rtitle + ' - Forsyth Recipes'}
            />

            <h1>{rtitle}</h1>

            <div>
                <pre>{Recipes[rtitle].body}</pre>

                <br></br>
                <p>Created by: {Recipes[rtitle].creator}</p>
                <p>Created on: {Recipes[rtitle].created}</p>
                {Recipes[rtitle].modified ? (
                    <p>Last edited on: {Recipes[rtitle].modified}</p>
                ) : null}
            </div>
        </div>
    )
}

RecipeDetail.getInitialProps = async ({ query, res }) => {
    const { rtitle } = query
    const recipeExists = Object.keys(Recipes).includes(rtitle)

    if (!recipeExists) {
        res.statusCode = 404
    }

    return {
        rtitle: rtitle,
        statusCode: recipeExists ? 200 : 404
    }
}

export default RecipeDetail
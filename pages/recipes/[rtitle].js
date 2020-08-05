import React from 'react'
import Custom404 from '../../pages/404'
import { NextSeo } from 'next-seo'

import Recipes from '../../data/recipes.json'

const RecipeDetail = ({ rtitle, recipeExists }) => {
    if (!recipeExists) {
        return <Custom404 />
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

RecipeDetail.getInitialProps = async ({ query }) => {
    const { rtitle } = query
    const recipeExists = Object.keys(Recipes).includes(rtitle)

    return {
        rtitle,
        recipeExists
    }
}

export default RecipeDetail
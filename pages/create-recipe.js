import React from 'react'
import { NextSeo } from 'next-seo'

import RecipeForm from '../components/recipe-form'

const CreateRecipe = () => {
    return (
        <div>
            <NextSeo title={'New Recipe'} />
            <RecipeForm />
        </div>
    )
}

export default CreateRecipe
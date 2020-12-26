import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NextSeo } from 'next-seo'

import RecipeForm from '../components/recipe-form'

const CreateRecipe = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0()

    if (!isAuthenticated) {
        return <p>Trying to login...</p>

        loginWithRedirect()
    }

    return (
        <div>
            <NextSeo title={'New Recipe'} />
            <RecipeForm />
        </div>
    )
}

export default CreateRecipe
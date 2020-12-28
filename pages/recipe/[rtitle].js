import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import dayjs from 'dayjs'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

import Custom404 from '../404'
import RecipeForm from '../../components/recipe-form'

const RecipeDetail = ({ rtitle }) => {
    if (!rtitle) {
        return null
    }

    const [recipes, setRecipes] = useState()
    const [editMode, setEditMode] = useState(false)
    const [recipeDeleted, setRecipeDeleted] = useState(false)

    const { isAuthenticated, loginWithRedirect } = useAuth0()
    const router = useRouter()

    const loadRecipes = () => {
        axios.get('/api/recipes')
        .then(response => {
            setRecipes(response.data)
        })
        .catch(error => {
            console.log('recipe/[rtitle]-get recipes error', error)
        })
    }

    useEffect(() => {
        loadRecipes()
    }, [])

    if (!recipes) {
        return null
    }

    const recipeExists = Object.keys(recipes).includes(rtitle)

    if (!recipeExists) {
        return <Custom404 />
    }

    const profilePicture = '/images/profile-pictures/no-img-provided.png'

    const deleteRecipe = () => {
        if (!isAuthenticated) {
            loginWithRedirect()

            return <p>Trying to login...</p>
        }

        const recipeTrulyDeleted = confirm('Are you sure you want to delete this recipe?')
        if (recipeTrulyDeleted) {
            axios.delete('/api/recipes', {
                params: { title: rtitle }
            })
            .then(response => console.log(response))
            .catch(error => console.log('rtitle deleteRecipe error: ', error))

            setRecipeDeleted(true)
        }
    }

    if (recipeDeleted) {
        router.push('/')
    }

    const formatDate = (date) => {
        if (date) {
            return dayjs(
                date.toString()
            ).format('MMMM DD, YYYY')
        } else {
            return 'Undated (error - tell Mark about this)'
        }
    }

    const displayDatesContainer = () => {
        if (recipes[rtitle].modified) {
            return (
                <div className='dates-container'>
                    <div className='important-date'>
                        {formatDate(recipes[rtitle].modified)}
                    </div>

                    <div className='minor-date'>
                        Created - {formatDate(recipes[rtitle].created)}
                    </div>
                </div>
            )
        } else {
            return (
                <div className='dates-container'>
                    <div className='important-date'>
                        {formatDate(recipes[rtitle].created)}
                    </div>
                </div>
            )
        }
    }

    if (editMode) {
        return <RecipeForm
                    predefTitle={rtitle}
                    predefBody={recipes[rtitle].body}
                    setEditMode={() => setEditMode()}
                    loadRecipes={() => loadRecipes()}
                />
    }

    return (
        <div>
            <NextSeo
                title={rtitle + ' - Forsyth Recipes'}
            />
            <div className='recipe-detail-heading'>
                <h1>{rtitle}</h1>

                <div className='recipe-heading-data'>
                    {displayDatesContainer()}

                    <div className='creator-container'>
                        <img className='profile-picture' src={profilePicture} alt='Profile Picture' />
                        <div className='text'>{recipes[rtitle].creator}</div>
                    </div>
                </div>
            </div>

            { isAuthenticated ? (
                <div className='recipe-action-btn-container'>
                    <button
                        className='edit-btn'
                        onClick={() => setEditMode(true)}
                    >Edit</button>
                    <button
                        className='delete-btn'
                        onClick={() => deleteRecipe()}
                    >Delete</button>
                </div>
            ) : null }

            <div className='recipe-body-container' dangerouslySetInnerHTML={{__html: recipes[rtitle].body}}></div>
        </div>
    )
}

RecipeDetail.getInitialProps = async ({ query }) => {
    const { rtitle } = query

    return { rtitle }
}

export default RecipeDetail

// TODO: Search NPM for search library
import React, {useEffect, useState} from 'react'
import { NextSeo } from 'next-seo'
import moment from 'moment'
import axios from 'axios'

import Custom404 from '../../pages/404'

const RecipeDetail = ({ rtitle }) => {
    if (!rtitle) {
        return null
    }

    const [recipes, setRecipes] = useState()

    useEffect(() => {
        axios.get('/api/recipes')
        .then(response => {
            setRecipes(response.data)
            console.log('recipes', response)
        })
        .catch(error => {
            console.log('recipe/[rtitle]-get recipes error', error)
        })
    }, [])

    if (!recipes) {
        return null
    }

    const recipeExists = Object.keys(recipes).includes(rtitle)

    if (!recipeExists) {
        return <Custom404 />
    }

    const profilePicture = '/images/profile-pictures/no-img-provided.png'

    const formatDate = (date) => {
        if (date) {
          return moment(
              date.toString()
          ).format('MMMM Do, YYYY')
        } else {
          return 'Undated'
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

    return(
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

            <pre>{recipes[rtitle].body}</pre>
        </div>
    )
}

RecipeDetail.getInitialProps = async ({ query }) => {
    const { rtitle } = query

    return { rtitle }
}

export default RecipeDetail

// TODO: Search NPM for search library
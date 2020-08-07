import React from 'react'
import { NextSeo } from 'next-seo'
import moment from 'moment'

import Custom404 from '../../pages/404'

import Recipes from '../../data/recipes.json'

const RecipeDetail = ({ rtitle, recipeExists }, props) => {
    if (!recipeExists) {
        return <Custom404 />
    }

    if (!rtitle) {
        return null
    }

    const profilePicture = '/images/profile-pictures/no-img-provided.png'

    const formatDate = (date) => {
        return moment(
            date.toString()
        ).format('MMMM Do, YYYY')
    }

    const displayDatesContainer = () => {
        if (Recipes[rtitle].modified) {
            return (
                <div className='dates-container'>
                    <div className='important-date'>
                        {formatDate(Recipes[rtitle].modified)}
                    </div>

                    <div className='minor-date'>
                        Created - {formatDate(Recipes[rtitle].created)}
                    </div>
                </div>
            )
        } else {
            return (
                <div className='dates-container'>
                    <div className='important-date'>
                        {formatDate(Recipes[rtitle].created)}
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
                    {displayDatesContainer(                                                                                                                                                                                                                                                                                                             )}

                    <div className='creator-container'>
                        <img className='profile-picture' src={profilePicture} alt='Profile Picture' />
                        <div className='text'>{Recipes[rtitle].creator}</div>
                    </div>
                </div>
            </div>

            <pre>{Recipes[rtitle].body}</pre>
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
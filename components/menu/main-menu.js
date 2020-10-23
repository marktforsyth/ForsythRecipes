import React, {useEffect, useState} from 'react'
import axios from 'axios'

import RecipeCategoryBtn from './recipe-category-button'

const MainMenu = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.get('/api/categories')
        .then(response => {
            setCategories(response.data)
        })
        .catch(error => {
            console.log('MainMenu error', error)
        })
    }, [])

    if (!categories) {
        return null
    }

    const categoryNames = Object.keys(categories)

    return(
        <div>
            <h1 className='menu-title' >Main Categories</h1>

            <div className='category-btns-container'>
                {categoryNames.map(categoryName => {
                    return (
                        <RecipeCategoryBtn
                            name={categoryName}
                            key={categoryName}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MainMenu
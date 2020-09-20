import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TemporaryDebugPage = () => {
    const [recipes, setRecipes] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.post('/api/recipes', { 'theGreatChicken': {
            title: 'theGreatChicken - TITLE',
            body: 'Add chicken to the mixture, then bake.',
            creator: 'What even?'
        } })
        .then(response => {
            console.log('response', response)
        })
        .catch(error => {
            console.log('TemporaryDebugPage error', error)
        })

        // axios.get('/api/recipes')
        // .then(response => {
        //     setRecipes(response.data)
        // })
        // .catch(error => {
        //     console.log('TemporaryDebugPage error', error)
        // })

        // axios.get('/api/categories')
        // .then(response => {
        //     setCategories(response.data)
        // })
        // .catch(error => {
        //     console.log('TemporaryDebugPage error', error)
        // })
    }, [])

    // console.log('recipes', recipes)

    if (!recipes) {
        return null
    }

    if (!categories) {
        return null
    }

    return (
        <div>
            {/* <h1>{recipes['theGreatChicken'].title}</h1> */}
        </div>
    )
}

// TemporaryDebugPage.getInitialProps = async () => {
//     // const recipes = {'Crepes': {'body': 'example recipe'}}
//     let recipes

//     axios.get('/api/recipes')
//         .then(response => {
//             recipes = response
//         })
//         .catch(error => {
//             console.log('TemporaryDebugPage error', error)
//         })

//     return { recipes }
// }

export default TemporaryDebugPage
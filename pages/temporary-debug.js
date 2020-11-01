import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TemporaryDebugPage = () => {
    // const [recipes, set]

    axios.delete('/api/recipes', {
        params: { title: 'the Meatiocre Chicken of Chicken' }
    })
    .then(response => {
        console.log('response', response)
    })
    .catch(error => {
        console.log('TemporaryDebugPage error', error)
    })

    // useEffect(() => {
        // axios.post('/api/recipes', {
        //     title: 'the Meatiocre Chicken of Meatiocrity',
        //     body: 'Add chicken to the mixture, then bake. Will not taste good. Please do not try this at home.',
        //     creator: 'What even? Or rather, who even?'
        // })
        // .then(response => {
        //     console.log('response', response)
        // })
        // .catch(error => {
        //     console.log('TemporaryDebugPage error', error)
        // })

////////////////////////////

        // axios.delete('/api/recipes', {
        //     params: { title: 'theGreatChicken - TITLE' }
        // })
        // .then(response => {
        //     console.log('response', response)
        // })
        // .catch(error => {
        //     console.log('TemporaryDebugPage error', error)
        // })

    //     axios.get('/api/recipes')
    //     .then(response => {
    //         setRecipes(response.data)
    //     })
    //     .catch(error => {
    //         console.log('TemporaryDebugPage error', error)
    //     })

    //     axios.get('/api/categories')
    //     .then(response => {
    //         setCategories(response.data)
    //     })
    //     .catch(error => {
    //         console.log('TemporaryDebugPage error', error)
    //     })
    // }, [])

    // console.log('recipes', recipes)

    // if (!recipes) {
    //     return null
    // }

    // if (!categories) {
    //     return null
    // }

    return (
        <div>
            {/* <h1>Category - {categories['Hey'].name}</h1>

            <p>{categories['Hey'].recipeTitles}</p> */}
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
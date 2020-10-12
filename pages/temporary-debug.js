import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TemporaryDebugPage = () => {
    const [recipes, setRecipes] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.post('/api/recipes', {
            title: 'the Meatiocre Chicken',
            body: 'Add chicken to the mixture, then bake. Will not taste good.',
            creator: 'What even?'
        })
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
            {/* <h1>Recipe - {recipes['Crepes'].title}</h1>

            <p>{recipes['Crepes'].body}</p> */}
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
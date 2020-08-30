import React, { useState } from 'react'
import axios from 'axios'

const TemporaryDebugPage = ({ recipes }) => {
    // const fetcher = url => fetch(url).then(r => r.json())
    // const { data, error } = useSWR('/api/recipes', fetcher)

    // if (error) return <h1>Error fetching data.</h1>
    // if (!data) return <div>loading...</div>

    // return <h1>Hello {data['Crepes'].body}!</h1>

    // const [recipes, setRecipes] = useState({})

    // useEffect(() => {
        // axios.get('/api/recipes')
        // .then(response => {
        //     setRecipes(response.data)
        // })
        // .catch(error => {
        //     console.log('TemporaryDebugPage error', error)
        // })
    // }, [])

    console.log(recipes.data)

    if (!recipes) {
        return null
    }

    return (
        <div>
        <h1>{recipes['Crepes'].body}</h1>
        {/* <ul>{categories['Bread'].recipeTitles.map(rtitle => <li>{rtitle}</li>)}</ul> */}
        </div>
    )
}

TemporaryDebugPage.getInitialProps = async () => {
    // const recipes = {'Crepes': {'body': 'example recipe'}}
    let recipes

    axios.get('/api/recipes')
        .then(response => {
            recipes = response.data
        })
        .catch(error => {
            console.log('TemporaryDebugPage error', error)
        })

    console.log('Hello')

    return { recipes }
}

export default TemporaryDebugPage
import React, { useState } from 'react'
import axios from 'axios'

const TemporaryDebugPage = () => {
    // const fetcher = url => fetch(url).then(r => r.json())
    // const { data, error } = useSWR('/api/recipes', fetcher)

    // if (error) return <h1>Error fetching data.</h1>
    // if (!data) return <div>loading...</div>

    // return <h1>Hello {data['Crepes'].body}!</h1>

    let recipes = {'Crepes': {body: 'Hello'}}

    axios.get('/api/recipes')
        .then(response => {
            recipes = response.data
        })
        .catch(error => {
            console.log('TemporaryDebugPage error', error)
        })

    return (
        <div>
        <h1>{recipes['Crepes'].body}</h1>
        {/* <ul>{categories['Bread'].recipeTitles.map(rtitle => <li>{rtitle}</li>)}</ul> */}
        </div>
    )
}

export default TemporaryDebugPage
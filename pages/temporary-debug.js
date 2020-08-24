import React from 'react'
import useSWR from 'swr'
import fetch from 'unfetch'

const TemporaryDebugPage = () => {
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('/api/recipes', fetcher)

    if (error) return <h1>Error fetching data.</h1>
    if (!data) return <div>loading...</div>

    return <h1>Hello {data['Crepes'].body}!</h1>
}

export default TemporaryDebugPage
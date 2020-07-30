import React from 'react'
import { useRouter } from 'next/router'

const RecipeBtn = (props) => {
    const router = useRouter()

    return (
        <button onClick={() => {
            router.push('/recipes/[rtitle]', `/recipes/${props.name}`)
        }}>{props.name}</button>
    )
}

export default RecipeBtn
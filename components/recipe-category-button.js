import React from 'react'
import { useRouter } from 'next/router'

const RecipeCategoryBtn = (props) => {
    const router = useRouter()

    return (
        <div>
            <button onClick={() => {
                router.push('/categories/[cname]', `/categories/${props.name}`)
            }}>{props.name}</button>
        </div>
    )
}

export default RecipeCategoryBtn
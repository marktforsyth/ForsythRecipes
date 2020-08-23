import React from 'react'
import { useRouter } from 'next/router'

const RecipeBtn = (props) => {
    const router = useRouter()

    return (
        <div>
            <button
                className='recipe-btn'
                onClick={() => {
                    router.push('/recipe/[rtitle]', `/recipe/${encodeURIComponent(props.name)}`)
                }
            }>{props.name}</button>
        </div>
    )
}

export default RecipeBtn
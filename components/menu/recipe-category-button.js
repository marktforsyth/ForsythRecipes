import React from 'react'
import { useRouter } from 'next/router'

const RecipeCategoryBtn = (props) => {
    const router = useRouter()

    const categoryImage = props.image || '/images/categories/no-img-provided.png'

    return (
        <div>
            <button
                className='category-btn'
                onClick={() => {
                    router.push('/categories/[cname]', `/categories/${props.name}`)
                }
            }>
                <img src={categoryImage} draggable={false} />
                <div className='category-text'>{props.name}</div>
            </button>
        </div>
    )
}

export default RecipeCategoryBtn
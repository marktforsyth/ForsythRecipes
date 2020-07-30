import React from 'react'
import { useRouter } from 'next/router'

const SearchResults = () => {
    const router = useRouter()
    const { q } = router.query

    return (
        <div>
            Hello! {q}
        </div>
    )
}

export default SearchResults
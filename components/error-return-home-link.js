import React from 'react'
import { useRouter } from 'next/router'

const ErrorReturnHomeLink = () => {
    const router = useRouter()

    return (
        <button
            className='return-home'
            onClick={() => router.push('/')}
        >Return home</button>
    )
}

export default ErrorReturnHomeLink
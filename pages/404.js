import React from 'react'
import { useRouter } from 'next/router'

const Custom404 = () => {
    const router = useRouter()

    return (
        <div className='error-container'>
            <h1 className='custom-404-heading'>404</h1>
            <div className='error-msg'>Pffft. Nothin' but cobwebs here</div>

            <button
                className='return-home'
                onClick={() => router.push('/')}
            >Return home</button>
        </div>
    )
}

export default Custom404
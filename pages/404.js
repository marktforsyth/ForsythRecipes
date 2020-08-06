import React from 'react'

import ErrorReturnHomeLink from '../components/error-return-home-link'

const Custom404 = () => {
    return (
        <div className='error-container'>
            <h1 className='custom-404-heading'>404</h1>
            <div className='error-msg'>Pffft. Nothin' but cobwebs here</div>

            <ErrorReturnHomeLink />
        </div>
    )
}

export default Custom404
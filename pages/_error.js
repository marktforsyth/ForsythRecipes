import React from 'react'

import ErrorReturnHomeLink from '../components/error-return-home-link'

const Error = ({ statusCode }) => {
    const chooseErrorMessage = () => {
        if (statusCode) {
            return <div className='error-msg'>An error <b>{statusCode}</b> happened on the server</div>
        } else {
            return <div className='error-msg'>An error happened with the client</div>
        }
    }

    return (
        <div className='error-container'>
            {chooseErrorMessage()}

            <ErrorReturnHomeLink />
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
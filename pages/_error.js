import React from 'react'
import { useRouter } from 'next/router'

const Error = ({ statusCode }) => {
    const router = useRouter()

    const chooseErrorMessage = () => {
        if (statusCode === 404) {
            return (
                <div className='error-msg'>Nothin' but cobwebs here!</div>
            )
        } else if (statusCode) {
            return <div className='error-msg'>A <b>{statusCode}</b> happened on the server.</div>
        } else {
            return <div className='error-msg'>An error happened with the client</div>
        }
    }

    return (
        <div className='error-container'>
            <div className='error-heading'>{statusCode || '?'}</div>
            {chooseErrorMessage()}
            <button
                className='return-home'
                onClick={() => router.push('/')}
            >Return home</button>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
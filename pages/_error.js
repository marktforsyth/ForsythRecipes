import React from 'react'
import { useRouter } from 'next/router'

const Error = ({ statusCode }) => {
    const router = useRouter()

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
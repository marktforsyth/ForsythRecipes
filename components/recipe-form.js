import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

const RecipeForm = (props) => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0()
    if (!isAuthenticated) {
        loginWithRedirect()

        return <p>Trying to login...</p>
    }

    const [title, setTitle] = useState(
        props.predefTitle ? props.predefTitle : ''
    )
    const [body, setBody] = useState(
        props.predefBody ? props.predefBody : ''
    )
    const [safeToLeavePage, setSafeToLeavePage] = useState(false)
    // const [notActuallyRedirecting, setNotActuallyRedirecting] = useState(false)

    const router = useRouter()

    const submitForm = (event) => {
        event.preventDefault()
        setSafeToLeavePage(true)

        if (props.setEditMode) {
            axios.patch('/api/recipes', {
                title,
                body,
                modified: dayjs().format('YYYYMMDD')
            })
            .then(response => console.log(response))
            .catch(error => console.log('recipe-form if (editmode) error: ', error))

            props.setEditMode(false)
            props.loadRecipes()
        } else {
            axios.post('/api/recipes', {
                title,
                body,
                creator: user.name,
                created: dayjs().format('YYYYMMDD')
            })
            .then(response => console.log(response))
            .catch(error => console.log('recipe-form if (editmode) error: ', error))

            router.push(`/recipe/${encodeURIComponent(title)}`)
        }
    }

    // useEffect(() => {
    //     // router.beforePopState(({ url, as, options}) => {
    //     //     if (!safeToLeavePage && as !== router.asPath) {
    //     //         // window.location.href = as
    //     //         if (!confirm('Are you sure you want to leave the page? Changes you made will not be saved.')) {
    //     //             window.location.href = as
    //     //             return false
    //     //         }
    //     //     }

    //     //     return true
    //     // })

    //     const handleRouteChange = (url) => {
    //         if (!safeToLeavePage && url !== router.asPath) {
    //             if (!confirm('Are you sure you want to leave the page? Changes you made will not be saved.')) {
    //                 // router.push(router.asPath)
    //                 // setNotActuallyRedirecting(false)
    //             }
    //         }
    //     }

    //     router.events.on('routeChangeStart', handleRouteChange)

    //     return () => {
    //         router.events.off('routeChangeStart', handleRouteChange)
    //     }
    // }, [])

    return (
        <form className={'recipe-form'} onSubmit={(event) => submitForm(event)}>
            <h2>Recipe Title:</h2>
            <input
                placeholder='Title...'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <h2>Recipe Content:</h2>
            <Editor
                value={body}
                apiKey={'r0f0vjbv2scacyv6v00aop2sriucm3gmqpmjpi3faagn3k2j'}
                init={{
                    height: 500,
                    plugins: 'help image autolink',
                    toolbar:
                        'undo redo | formatselect | bold italic underline forecolor backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist | image | help',
                    content_style: '@import url(\'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap\'); body { font-weight: 300; line-height: 2; letter-spacing: 1px; };',
                    font_formats: 'Montserrat=montserrat, sans-serif;'
                }}
                onEditorChange={(content) => setBody(content)}
            />

            <button type='submit'>Save Recipe</button>
        </form>
    )
}

export default RecipeForm
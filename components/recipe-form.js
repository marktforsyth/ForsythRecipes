import React, { useState } from 'react'
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

    const router = useRouter()

    const submitForm = (event) => {
        event.preventDefault()

        axios.post('/api/recipes', {
          title,
          body,
          creator: user.name,
          created: dayjs().format('YYYYMMDD')
        })

        // console.log('Title: ', title)
        // console.log('Body: ', body)
        // setTitle('')
        // setBody('')

        router.push(`/recipe/${encodeURIComponent(title)}`)
        // TODO use router.push instead to simply go to new recipe
    }

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
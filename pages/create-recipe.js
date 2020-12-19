import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NextSeo } from 'next-seo'
import axios from 'axios'
// import moment from 'moment'
import dynamic from 'next/dynamic'

const EditorNoSSR = dynamic(
  () => import('react-draft-wysiwyg').then(
    module => module.Editor
  ),
  { ssr: false }
)

const convertToRawNoSSR = dynamic(
  () => import('draft-js').then(
    module => module.converToRaw
  ),
  { ssr: false }
)

const draftToHtml = dynamic(
  () => import('draftjs-to-html').then(
    module => module
  ),
  { ssr: false }
)

const CreateRecipe = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()

  if (!isAuthenticated) {
    return <p>Trying to login...</p>

    loginWithRedirect()
  }

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const submitForm = (event) => {
    event.preventDefault()
    
    axios.post('/api/recipes', {
      title,
      body,
      creator: user.name
    })
  }

  return (
    <div>
      <NextSeo title={'New Recipe'} />
      <form onSubmit={(event) => submitForm(event)}>
        <h2>Recipe Title:</h2>
        <input
          placeholder='Title...'
          onChange={(event) => setTitle(event.target.value)}
        ></input>

        <h2>Recipe Content:</h2>
        <EditorNoSSR
          // onChange={(event) => setBody(event.target.value)}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateRecipe
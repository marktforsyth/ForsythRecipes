import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NextSeo } from 'next-seo'
import axios from 'axios'
// import moment from 'moment'
import dynamic from 'next/dynamic'
import { convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'

const EditorNoSSR = dynamic(
  () => import('react-draft-wysiwyg').then(
    module => module.Editor
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
  const editorState = EditorState.createEmpty()

  const submitForm = (event) => {
    event.preventDefault()
    
    // axios.post('/api/recipes', {
    //   title,
    //   body,
    //   creator: user.name
    // })
    console.log('Title: ', title)
    console.log('Body: ', htmlData)
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
          editorState={ editorState }
          onEditorStateChange={(event) => {
            let rawContentState = convertToRaw(editorState.getCurrentContent());
            let htmlData = draftToHtml(rawContentState)
            console.log(htmlData)

            console.log(event)
          }}
          // onChange={(event) => setBody(event.target.value)}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateRecipe
import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const EditorNoSSR = dynamic(
  () => import('react-draft-wysiwyg').then(
    module => module.Editor
  ),
  { ssr: false }
)

const CreateRecipe = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (!isAuthenticated) {
    return <p>Redirecting to login page...</p>

    loginWithRedirect()
  }

  const [title, setTitle] = useState()


  const submitForm = (event) => {
    event.preventDefault()
    
    
  }

  return (
    <div>
      <NextSeo title={'New Recipe'} />
      <form onSubmit={(event) => submitForm(event)}>
        <h2>Recipe Title:</h2>
        <input
          placeholder='Title...'
          onChange={(event) => console.log(event.target.innerText)}
        ></input>

        <h2>Recipe Content:</h2>
        <EditorNoSSR />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateRecipe
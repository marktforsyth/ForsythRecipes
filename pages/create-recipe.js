import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NextSeo } from 'next-seo'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'

const CreateRecipe = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()

  if (!isAuthenticated) {
    return <p>Trying to login...</p>

    loginWithRedirect()
  }

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const handleEditorChange = (content, editor) => {
    console.log('Behold: ', content)
    console.log(editor)
  }

  // const submitForm = (event) => {
  //   event.preventDefault()
    
  //   // axios.post('/api/recipes', {
  //   //   title,
  //   //   body,
  //   //   creator: user.name
  //   // })
  //   console.log('Title: ', title)
  //   console.log('Body: ', htmlData)
  // }

  return (
    <div>
      <NextSeo title={'New Recipe'} />
      {/* <form onSubmit={(event) => submitForm(event)}>
        <h2>Recipe Title:</h2>
        <input
          placeholder='Title...'
          onChange={(event) => setTitle(event.target.value)}
        ></input>

        <h2>Recipe Content:</h2>


        <button type='submit'>Submit</button> 
      </form> */}
      <Editor
        init={{
          height: 500,
          plugins: 'help image autolink',
          toolbar:
             'undo redo | formatselect | bold italic underline forecolor backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist | image | help',
          content_style: '@import url(\'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap\');',
          font_formats: 'Montserrat=montserrat, sans-serif; body { font-weight: 300 };'
        }}
        onEditorChange={(content, editor) => handleEditorChange(content, editor)}
      />
    </div>
  )
}

export default CreateRecipe
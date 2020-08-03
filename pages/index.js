import React from 'react'
import { NextSeo } from 'next-seo'

import MainMenu from '../components/main-menu'

const HomePage = () => {
  // useEffect(() => {
  //   return history.listen((location) => {
  //     console.log('New path: ', location)
  //   })
  // })

  return (
    <div>
      <NextSeo 
        title={'Forsyth Recipes'}
      />

      <MainMenu />
    </div>
  )
}

export default HomePage
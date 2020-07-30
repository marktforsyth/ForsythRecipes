import React from 'react'

import NavBar from '../components/nav-bar'
import MainMenu from '../components/main-menu'

const HomePage = () => {
  return (
    <div>
      <NavBar />

      <div className='page-container'>
        <div className='column'>
          <MainMenu />
        </div>
      </div>
    </div>
  )
}

export default HomePage
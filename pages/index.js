import React, { useEffect } from 'react'
import { NextSeo } from 'next-seo'

import MainMenu from '../components/menu/main-menu'

const HomePage = () => {


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
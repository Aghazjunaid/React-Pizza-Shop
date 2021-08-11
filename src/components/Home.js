import React from 'react'
import Navbars from './Navbar'
import Body from './Body'
import '../App.css'
import Products from './Products'

function Home() {
    return (
        <>
            <div className="header-img">
            <Navbars/>
            <Body/>
            </div>
            <Products/>
        </>
    )
}

export default Home

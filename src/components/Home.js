import React from 'react'
import Navbars from './Navbar'
import Body from './Body'
import '../App.css'
import Products from './Products'
import Footer from './Footer'

function Home() {
    return (
        <>
            <div className="header-img">
            <Navbars/>
            <Body/>
            </div>
            <Products/>
            <Footer/>
        </>
    )
}

export default Home

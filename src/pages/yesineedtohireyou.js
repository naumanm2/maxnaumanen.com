import React from 'react'
import Header from '../components/footer'
import Hamburger from '../components/hamburger'
import HireMe from '../components/header'
import Footer from '../components/hireme'
import Sidebar from '../components/sidebar'

const contact = () => {
    return (
        <div>
            <Header />
            <Hamburger />
            <HireMe />
            <Sidebar active="contact"/>
            <Footer />
        </div>
    )
}

export default contact

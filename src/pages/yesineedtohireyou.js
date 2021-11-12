import React from 'react'
import Header from '../components/footer'
import HireMe from '../components/header'
import Footer from '../components/hireme'
import Sidebar from '../components/sidebar'

const contact = () => {
    return (
        <div>
            <Header />
            <HireMe />
            <Sidebar active="contact"/>
            <Footer />
        </div>
    )
}

export default contact

import React from 'react'
import Header from '../components/footer'
import Hamburger from '../components/hamburger'
import HireMe from '../components/header'
import Footer from '../components/hireme'
import SEO from '../components/seo'
import Sidebar from '../components/sidebar'

import '../styles.scss'

const contact = () => {
    return (
        <div>
            <SEO title="hire me :)"/>
            <Header />
            <Hamburger />
            <HireMe />
            <Sidebar active="contact"/>
            <Footer />
        </div>
    )
}

export default contact

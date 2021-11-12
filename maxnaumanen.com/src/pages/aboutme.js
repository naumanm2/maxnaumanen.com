import React from 'react'
import AboutMe from '../components/aboutme'
import Footer from '../components/footer'
import Header from '../components/header'
import Resume from '../components/resume'
import Sidebar from '../components/sidebar'

const aboutme = () => {
    return (
        <div>
            <Header />
            <Sidebar active="aboutme"/>
            <AboutMe />
            <Resume />
            <Footer />
        </div>
    )
}

export default aboutme

import React from 'react'

import SEO from '../components/seo'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

import '../styles.scss'


const index = () => {
  return (
    <div>
      <SEO />
      <Header />
      <Sidebar active="home"/>
      <Hero />
      <Footer />
    </div>
  )
}

export default index

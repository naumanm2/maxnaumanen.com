import React from 'react'

import Error from '../components/error'
import SEO from '../components/seo'
import '../styles.scss'


const NotFoundPage = () => {
  return (
    <div>
      <SEO title=":("/>
      <Error />
    </div>
  )
}

export default NotFoundPage

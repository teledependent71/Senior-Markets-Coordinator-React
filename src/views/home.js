import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Markets Coordinator</title>
        <meta property="og:title" content="Senior Markets Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function NoMatch() {
  return (
    <div>
      <Header/>
      <div style={{ padding: 25 }}>
        <p>Sorry page your looking for doesn't exist.</p>
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  )
}

export default NoMatch

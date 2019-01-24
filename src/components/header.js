import React from 'react'
import Link from 'gatsby-link'
import logo from '../imgs/logo_header.gif'

const Header = ({ siteTitle, favicon }) => (
  <div
    style={{
      background: '#fff',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        overflow: 'hidden'
      }}
    >
      <h1 style={{ margin: 0, float: 'left' }}>
        <Link
          to="/"
          style={{
            color: '#444',
            textDecoration: 'none',
          }}
        >
          <img src={logo} />
        </Link>
      </h1>
      <ul style={{ listStyleType: 'none', marginLeft: '1em', float: 'right', }}>
        <li className='menu-item'>
          <Link to="/about"
          style={{
            color: '#444'
          }}>About</Link>
        </li>
        <li className='menu-item'>
          <Link to="/downloads"
          style={{
            color: '#444'
          }}>Downloads</Link>
        </li>
        <li className='menu-item'>
          <Link to="/documentation"
          style={{
            color: '#444'
          }}>Documentation</Link>
        </li>
      </ul>
    </div>
  </div>
)

const styles = {
  menulinks : {
    display: 'inline'
  }
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import favicon from '../imgs/favicon.ico';
import twitter from '../imgs/follow_us.gif';
import download from '../imgs/download.gif';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
        link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
  ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        width: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <div style={{
        width: 690,
        float: 'left'
      }}>
      {children()}
      </div>
      <div
      style={{
        float: 'left',
        padding: '0 0.1rem'
      }}
      >
      <h3>Quick Links</h3>
        <div>
        <a href="https://twitter.com/freedomfone">
          <img src={twitter} />
        </a>
        </div>
        <div>
        <a href="/downloads">
          <img src={download} />
        </a>
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../assets/css/layout.css';
import '../assets/css/shared.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            lang
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang={data.site.siteMetadata.lang} />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
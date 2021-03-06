import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Error from '../Error'

const Layout = ({ children }) => (
  <div className='bloodthirst-app site'>
    <Header />

    <main className='site-content'>
      <div className='section'>
        <div className='container'>
          <Error />
          {children}
        </div>
      </div>
    </main>
    <footer className='footer'>
      Bmagic
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.any.isRequired
}

export default Layout

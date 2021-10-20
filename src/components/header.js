import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navbar from './navbar';

const Header = ({ siteTitle }) => (
  <header class="relative justify-items-center">
      <Navbar />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

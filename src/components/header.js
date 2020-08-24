import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderBottom: `3px solid var(--rich-purple)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}

      className={styles.menu}
    >
      <h1 style={{ margin: '0 0 0 10px' }}>
        <Link
          to="/"
          style={{
            color: `var(--rich-purple)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <div className={styles.menuButton}>
          Menu
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

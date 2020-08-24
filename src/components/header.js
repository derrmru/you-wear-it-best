import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import styles from "./header.module.css"

export const Pages = {
  about: {
    title: "About",
    url: '/about'
  },
  shop: {
    title: "Shop",
    url: '/shop'
  },
  contact: {
    title: "Contact",
    url: '/contact'
  }
}

const Header = ({ siteTitle }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
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

        <div className={styles.menuButton} onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <div>Items</div> : <div>Menu</div>}
        </div>
      </div>
      {
        toggleMenu && <div className={styles.menuArea}>
            {Object.keys(Pages).map((x) => {
              return (
                <Link
                  to={Pages[x].url}
                >
                  <div className={styles.menuItem}>{Pages[x].title}</div>
                </Link>
              )
            })}
          </div>
      }
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import styles from "./header.module.css"

//Pages Object to map out menu Items -- add new Pages here if you want in the navigation Menu
export const Pages = {
  home: {
    title: "Home",
    url: '/'
  },
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

//Header Component
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

        <button 
          className={styles.menuButton}
          onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? <div>|x|</div> : <div>|Menu</div>}
        </button>
      </div>
      {
        toggleMenu && <div className={styles.menuArea}>
            {Object.keys(Pages).map((x, i) => {//map through Pages object to create menu
              return (
                <Link
                  key={('menu' + i)}
                  to={Pages[x].url}
                  className={styles.menuItem}
                >
                  <div className={styles.menuItem}>{Pages[x].title}</div>
                </Link>
              )
            })}

            <hr style={{width: "30%", margin: "8vh auto"}} />

            <div className={styles.socialContainer}>
                <a href="https://www.instagram.com/you.wearitbest/" target="_blank" rel="noreferrer">
                  <img className={styles.social} src={require("../images/instagram.svg")} alt="instagram icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <img className={styles.social} src={require("../images/facebook.svg")} alt="facebook icon" />
                </a>
                <a href="https://wa.me/31623848591" target="_blank" rel="noreferrer">
                  <img className={styles.social} src={require("../images/whatsapp.svg")} alt="whatsapp icon" />
                </a>
            </div>

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

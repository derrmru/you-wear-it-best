import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./bannerImage.module.css"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 */

const HeaderImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "marek.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>

      <h1 className={styles.bannerText}>
        You.<br />
        Wear It.<br />
        Best.<br />
      </h1>
    </div>
    )
}

export default HeaderImage

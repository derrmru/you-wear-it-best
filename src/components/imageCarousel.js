import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./imageCarousel.module.css"

let ImageCarousel = (props) => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "material.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className={styles.carouselContainer} style={{width: "100%"}}>
            <h2>Placeholder</h2>
            {/*<Img fluid={data.placeholderImage.childImageSharp.fluid} />*/}
        </div>
    )
}

export default ImageCarousel
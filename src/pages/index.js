import React from "react"
import styles from "./index.module.css"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import HeaderImage from "../components/bannerImage"
import ImageCarousel from "../components/imageCarousel"
import InstagramFeed from "../components/instagramFeed"
import SEO from "../components/seo"

const IndexPage = () => {
  const biImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nfe-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <div className={styles.bannerImage} style={{width: "100%"}}>
        <HeaderImage />
      </div>

      <div className={styles.nfe}>

        <BackgroundImage
          className={styles.nfeText}
          fluid={biImage.placeholderImage.childImageSharp.fluid}
          >
          <div>
            <h2>Not For Everyone</h2>
          </div>
        </BackgroundImage>

        <div className={styles.nfeChild}>
          <ImageCarousel />
        </div>
      </div>

      <div className={styles.iFeed}>
        <InstagramFeed />
      </div>

    </Layout>
  )
}

export default IndexPage

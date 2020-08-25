import React from "react"
import styles from "./index.module.css"

import Layout from "../components/layout"
import HeaderImage from "../components/bannerImage"
import ImageCarousel from "../components/imageCarousel"
import InstagramFeed from "../components/instagramFeed"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <div className={styles.bannerImage} style={{width: "100%"}}>
        <HeaderImage />
      </div>

      <div className={styles.nfe}>
        <div className={styles.nfeText}>
          <h2>Not For Everyone</h2>
        </div>

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

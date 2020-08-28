import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PayPal from "../components/PayPal"

import styles from "./productTemplate.module.css"

const ProductTemplate = ({ data }) => {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <h1 style={{textAlign: "center", marginTop: "2vh"}}>{frontmatter.title}</h1>
            <div className={styles.itemContainer}>
                
                <div className={styles.itemImage}>
                    Image
                </div>

                <div className={styles.itemDescription}>
                    <div
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    <h3>Price: €{frontmatter.price}</h3>
                    <PayPal 
                        price={frontmatter.price}
                        description={frontmatter.description}
                    />
                </div>
                
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        price
      }
    }
  }
`

export default ProductTemplate
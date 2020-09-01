import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PayPal from "../components/PayPal"

import styles from "./productTemplate.module.css"

const ProductTemplate = ({ data }) => {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
          <div className={styles.bts}>
            <Link 
              to="/shop"
              >
                |Back To Shop
              </Link>
          </div>
            <div className={styles.itemContainer}>
                <div className={styles.itemImage}>
                    <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
                </div>

                <div className={styles.itemDescription}>
                  <h1 style={{textAlign: "center", marginTop: "2vh"}}>{frontmatter.title}</h1>
                    <hr />

                    <div
                        dangerouslySetInnerHTML={{ __html: html }}
                    />

                    <hr />

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
        featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
      }
    }
  }
`

export default ProductTemplate
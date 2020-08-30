import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

import styles from "./blogTemplate.module.css"

const BlogTemplate = ({ data }) => {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <div className={styles.btb}>
                <a href="/blog">|Back To Blog</a>
            </div>

            <div className={styles.titleContainer}>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
            </div>

            <hr 
              className={styles.bhr}
              />

            <div className={styles.blogContainer}>

                <div className={styles.blogText}
                    dangerouslySetInnerHTML={{ __html: html }}
                    />
                
                <div className={styles.blogImage}>
                    <Img fluid={frontmatter.image.childImageSharp.fluid} />
                </div>
            
            </div>

            <hr 
              className={styles.bhr}
              />

        </Layout>
    )
}

export const blogQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    }
  }
`

export default BlogTemplate
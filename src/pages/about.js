import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ProjectCard from "../components/projectCard"

import Layout from "../components/layout"
import styles from "./about.module.css"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query findMD {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "product"}}}, sort: {order: DESC, 
        fields: frontmatter___date}, 
        limit: 3) {
        nodes {
          frontmatter {
            slug
            title
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
      file(relativePath: {eq: "about-background.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  let nodes = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO title="About" />

      <div className={styles.bioContainer}>
        <div className={styles.bioText}>
          <h1>My Story</h1>
          <p>Qui commodo sint deserunt do ipsum velit minim id exercitation dolor consequat cillum. Sit ex non nulla sit. Veniam fugiat eiusmod dolor do ipsum consequat occaecat ex et enim id enim dolore. Incididunt adipisicing aute Lorem nulla mollit veniam eu nostrud eiusmod anim exercitation dolore. Consectetur est aliqua duis anim dolor ullamco.</p>
        </div>

        <div className={styles.bioImage}></div>

      </div>

      <div className={styles.projectHeader}>
          <h2>Recent Projects</h2>
          <BackgroundImage
              fluid={data.file.childImageSharp.fluid}
              className={styles.aboutBgImage}
              >
          <div className={styles.pCardContainer}>

              {//iterate through projects and post first three here
                Object.keys(nodes).map((x, i) => {
                  let node = nodes[i].frontmatter;
                    return <ProjectCard 
                              key={i} 
                              title={node.title}
                              price={node.price}
                              slug={node.slug}
                              fi={node.featuredImage}
                            />
                })
              }
          </div>
          </BackgroundImage>
      </div>

    </Layout>
  )
}

export default About

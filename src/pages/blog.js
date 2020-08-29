import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import styles from "./blog.module.css"

const Blog = () => {
    const blogs = useStaticQuery(graphql`
        query findBlogs {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {order: DESC, fields: frontmatter___date}) {
                nodes {
                  frontmatter {
                    title
                    slug
                    image {
                      childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  excerpt
                }
            }
        }
    `)
    let nodes = blogs.allMarkdownRemark.nodes;

    return (
        <Layout>
            <h1 className={styles.bTitle}>Blog</h1>

            <div className={styles.theBlogs}>
                {Object.keys(nodes).map((node, i) => {
                    return <Link
                                to={nodes[node].frontmatter.slug.toString()}
                                className={styles.blogCard}
                                key={('blog' + i)} 
                                >
                                <div
                                    className={styles.blogImageContainer}
                                    >
                                        <div>
                                            <Img 
                                                fluid={nodes[node].frontmatter.image.childImageSharp.fluid}
                                                />
                                        </div>
                                </div>
                                <p
                                    className={styles.excerpt}
                                    >
                                        {nodes[node].excerpt}
                                    </p>
                                    
                                <h3>|{nodes[node].frontmatter.title}</h3>
                            </Link>
                })}
            </div>
        </Layout>
    )
}

export default Blog
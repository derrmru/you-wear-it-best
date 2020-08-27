import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"
import styles from "./shop.module.css"

const Shop = () => {
    const data = useStaticQuery(graphql`
    query shopMD {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            price
          }
        }
      }
    }
  `)
  let nodes = data.allMarkdownRemark.nodes;

    return (
        <Layout>
            <SEO title="Shop" />
            <div className={styles.shopTitle}>
                <h1
                    style={{textAlign: "center", marginTop: "3vh"}}
                >
                    Shop
                </h1>
            </div>
            
            <div className={styles.shopContainer}>
                
                {//iterate through projects and post first three here
                Object.keys(nodes).map((x, i) => {
                    return <ProjectCard 
                            key={i} 
                            title={nodes[i].frontmatter.title}
                            price={nodes[i].frontmatter.price}
                            />
                })
            }

            </div>

        </Layout>
    )
}

export default Shop
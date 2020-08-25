import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"
import styles from "./shop.module.css"

const Shop = () => {
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
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

        </Layout>
    )
}

export default Shop
import React from "react"
import ProjectCard from "../components/projectCard"

import Layout from "../components/layout"
import styles from "./about.module.css"
import SEO from "../components/seo"

const About = () => (
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
      <div className={styles.pCardContainer}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>

  </Layout>
)

export default About

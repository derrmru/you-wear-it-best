import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./projectCard.module.css"

const ProjectCard = (props) => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jacket-cutout.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

    return (
        <div className={styles.projectContainer}>
            <div className={styles.cardImage}>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{width: "80%", top: "10%", left: "10%"}}/>
            </div>
                <Link
                    to="/shop"
                    className={styles.link}
                >
                    |{props.title}
                </Link>
        </div>
    )
}

export default ProjectCard
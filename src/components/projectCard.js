import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./projectCard.module.css"

const ProjectCard = (props) => {

    return (
        <div className={styles.projectContainer}>
          <Link
              to={props.slug}
              className={styles.link}
              >
            <div className={styles.cardImage}>
                <Img fluid={props.fi.childImageSharp.fluid} style={{width: "80%", top: "10%", left: "10%"}}/>
            </div>
                    {props.title} | €{props.price}
          </Link>
        </div>
    )
}

export default ProjectCard
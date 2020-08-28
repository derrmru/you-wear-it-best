import React from "react"
import { Link } from "gatsby"
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
                <Img fluid={props.fi.childImageSharp.fluid} />
            </div>
                    {props.title} | €{props.price}
          </Link>
        </div>
    )
}

export default ProjectCard
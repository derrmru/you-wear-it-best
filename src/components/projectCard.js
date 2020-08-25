import React from "react"
import { Link } from "gatsby"

import styles from "./projectCard.module.css"

const ProjectCard = () => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.cardImage}>
                <p>Image Placeholder</p>
            </div>
                <Link
                    to="/shop"
                    className={styles.link}
                >
                    |Product
                </Link>
        </div>
    )
}

export default ProjectCard
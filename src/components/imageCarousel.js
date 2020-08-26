import React from "react"
import { Link } from "gatsby"

import styles from "./imageCarousel.module.css"

const ImageCarousel = () => {
    return (
        <div className={styles.carouselContainer} style={{width: "100%"}}>
            <Link
              to="/shop"
              className={styles.shopLink}
            >
              <h2>|Shop</h2>
            </Link>
        </div>
    )
}

export default ImageCarousel
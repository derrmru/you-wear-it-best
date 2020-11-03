import React, { useState, useEffect } from "react"
import image1 from "../images/nfe-background.png"
import image2 from "../images/contact-background.png"
import styles from "./instagramFeed.module.css"

let InstagramFeed = (props) => {
    const iArr = [
        [image1, "#youwearitbest #loudfashion #otherhashtags"], 
        [image2, "#material #happy #colourful"]
    ]
    const [currentImage, setCurrentImage] = useState(iArr[0][0])
    const [currentHash, setCurrentHash] = useState(iArr[0][1])

    useEffect(() => {
        let x = 0;
        const interval = setInterval(() => {
            x = (x + 1) % (iArr.length)
            console.log(x);
            setCurrentImage(iArr[x][0])
            setCurrentHash(iArr[x][1])
        }, 4000)
        return () => clearInterval(interval);
    })

    return (
        <div className={styles.iFeedContainer}>
            <div className={styles.iFImage}>
                <img src={currentImage} alt="" />
            </div>

            <div className={styles.iFhash}>
                <p>{currentHash}</p>
            </div>

        </div>
    )
}

export default InstagramFeed
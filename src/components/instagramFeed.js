import React, { useState, useEffect } from "react"
import image1 from "../images/instagram-1.png"
import image2 from "../images/instagram-2.png"
import styles from "./instagramFeed.module.css"

let InstagramFeed = () => {
    const iArr = [
        [image1, <><p>Two of a kind</p> <p>#onewayoranother #wearitifyoucan #courtainstowear</p></>], 
        [image2, <><p>Just a couple of fabrics I found in charity shops.</p><p>Ready to give them a second chance.</p><p>#rebuild #onemorechance #bargain</p></>]
    ]
    const [currentImage, setCurrentImage] = useState(iArr[0][0])
    const [currentHash, setCurrentHash] = useState(iArr[0][1])
    const [x, setX] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if ((x + 1) === iArr.length) {
                setX(0)
            } else {
                setX(x + 1)
            }
            console.log(x);
            setCurrentImage(iArr[x][0])
            setCurrentHash(iArr[x][1])
        }, 4000)
        return () => clearInterval(interval);
    })

    //instagram logo and link
    const [mouse, setMouse] = useState(false);

    return (
        <div className={styles.iFeedContainer}>
            <div 
                className={styles.iFImage} 
                onMouseOver={() => setMouse(true)}
                onFocus={() => setMouse(true)}
                onMouseLeave={() => setMouse(false)}
                >
                <a href="https://www.instagram.com/you.wearitbest/" target="_blank" rel="noreferrer">
                    {
                        mouse && <div className={styles.instImage}>
                            <div className={styles.instLogo}>
                                <div className={styles.instInnerSquare}></div>
                                <div className={styles.instMiddleCircle}></div>
                                <div className={styles.instTopCircle}></div>
                            </div>
                        </div>
                    }
                    <img src={currentImage} alt="" />
                </a>
            </div>

            <div className={styles.iFhash}>
                <div className={styles.theHash}>{currentHash}</div>
            </div>

        </div>
    )
}

export default InstagramFeed
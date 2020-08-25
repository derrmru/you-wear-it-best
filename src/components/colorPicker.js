import React, { useState } from "react"
import styles from "./colorPicker.module.css"

const ColorPicker = () => {
    const [expand, setExpand] = useState(false);

    const Colors = [
        "#4A1942",
        "green",
        "#283D3B",
        "#772E25",
        "#197278",
        "#D90368",
        "#2E294E",
        "#FFD400",
        "#30343F", 
        "#F2B79F",
        "#6DA34D",
        "#76818E",
        "#0077B6",
        "#313715",
        "#9E2B25",
        "#B4B8AB",
        "#ACC18A",
        "#131515",
        "#F6511D",
        "#FFB400"
    ]

    const setColor = (picked) => {
        let root = document.documentElement;
        root.style.setProperty('--rich-purple', picked)
    }

    return (
        <div className={styles.cpBox} onClick={() => {setExpand(!expand)}}>
            {
                expand ? 
                <>
                    <p>&#62;</p>
                        <div className={styles.cpPicker}>
                            {Colors.map((x) => {
                                return <div className={styles.colorBox} style={{backgroundColor: x}} onClick={() => {setColor(x)}}></div>
                            })}
                        </div>
                </> :
                <p>&#60;</p>
            }
        </div>
    )
}

export default ColorPicker
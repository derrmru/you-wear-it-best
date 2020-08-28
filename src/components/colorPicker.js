import React, { useState } from "react"
import styles from "./colorPicker.module.css"

const ColorPicker = () => {
    const [expand, setExpand] = useState(false);
    const [typedColor, setTypedColor] = useState("");

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
        <div className={styles.cpBox}>
            {
                expand ? 
                <>
                    <button aria-label="Expand Color Picker" onClick={() => {setExpand(!expand)}}>&#60;</button>
                        <div className={styles.cpPicker}>
                            {Colors.map((x, i) => {
                                return <button 
                                            aria-label="Select This Color" 
                                            key={("color" + i)}
                                            className={styles.colorBox} 
                                            style={{backgroundColor: x}} 
                                            onClick={() => {setColor(x)}}
                                            />
                            })}
                            <input type="text" value={typedColor} onChange={(e) => {setTypedColor(e.target.value)}} />
                            <button className={styles.updateButton} onClick={() => setColor(typedColor)}>| Set To Typed Color</button>
                        </div>
                </> :
                <button aria-label="Condense Color Picker" onClick={() => {setExpand(!expand)}}>&#62;</button>
            }
        </div>
    )
}

export default ColorPicker
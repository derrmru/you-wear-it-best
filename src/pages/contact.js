import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./contact.module.css"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <Layout>
            <SEO title="Get In Touch" />

            <div className={styles.contactHeader}>
                <h2>Header Placeholder</h2>
            </div>

            <div className={styles.contactRow}>
                <div className={styles.contactOption}>
                    <a href="mailto:marek@youwearitbest.com">
                        |Email Me
                    </a>
                </div>
                <div className={styles.contactOption}>
                    <a href="tel:+31 6 23848591">
                        |Call Me
                    </a>
                </div>
                <div className={styles.contactOption}>
                    <a href="https://www.instagram.com/you.wearitbest/" target="_blank">
                        |Follow Me
                    </a>
                </div>
                <div className={styles.contactOption}>
                    <a href="#" target="_blank">
                        |Discuss a Project
                    </a>
                </div>
            </div>

            <div className={styles.formContainer}>
                <h2 style={{
                    textAlign: 'center'
                }}>
                    Get In Touch
                </h2>
                <form method="post" action="#">
                    <label>
                        Full Name
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        Email Address
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Telephone
                        <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                    </label>
                    <label>
                        Message
                        <textarea type="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </label>
                        <input type="submit" value="Send" />
                </form>
            </div>

        </Layout>
    )
}

export default Contact
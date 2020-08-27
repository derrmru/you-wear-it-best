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
                <h2>Contact Me</h2>
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
                    <a href="https://www.instagram.com/you.wearitbest/" target="_blank" rel="noreferrer">
                        |Follow Me
                    </a>
                </div>
                <div className={styles.contactOption}>
                    <a href="https://example.com" target="_blank" rel="noreferrer">
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
                <form name="contact" method="post" data-netlify="true" action="/submitted">
                    <input type="hidden" name="contact" value="contact" />
                    <p>
                    <label>
                        Full Name
                        <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        Email Address
                        <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        Telephone
                        <input name="telephone" type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        Message
                        <textarea name="message" type="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </label>
                    </p>
                        <button type="submit">Send</button>
                </form>
            </div>

        </Layout>
    )
}

export default Contact
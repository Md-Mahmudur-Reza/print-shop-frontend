"use client";

import React from "react";

import styles from "./location.module.css";


export default function Location() {
    return (
        <div className={styles.location}>
            <h1 className={styles.title}> Our Location </h1>
            <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d94463.86502404035!2d-83.0453695!3d42.2786134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2df31fd9e3b9%3A0xcac0d2b24e7cf3e!2sBrown%20Man%20Printing!5e0!3m2!1sen!2sca!4v1744135299440!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div >
    );
}

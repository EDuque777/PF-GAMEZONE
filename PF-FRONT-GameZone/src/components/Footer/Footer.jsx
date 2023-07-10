import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import {faLinkedin,faGithub,faTwitter,faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer-section"]}>
                <div className={styles["footer-column"]}>
                    <p>Company</p>
                    <a href="/aboutus">
                        <p>About us</p>
                    </a>
                    {/* <a href="/prensa">
                        <p>Prensa</p>
                    </a> */}
                    <a href="/contacto">
                        <p>Contact</p>
                    </a>
                </div>
            </div>



    
            <div className={styles["footer-section"]}>
            <div className={styles["footer-column"]}>
                <a href="/terminos">
                    <p>Terms and conditions</p>
                </a>
                <a href="/privacidad">
                    <p>Privacy</p>
                </a>
                <a href="/seguridad">
                    <p>Security</p>
                </a>
            </div>
        </div>
        <div className={styles["footer-section"]}>
                <div className={styles["footer-column"]}>
                    <p>Follow us</p>
                    <div className={styles["social-media-icons"]}>
                        <FontAwesomeIcon className="w-6 h-6" icon={faLinkedin} size="xl"/>
                        <FontAwesomeIcon className="w-6 h-6" icon={faGithub} size="xl"/>
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                        <FontAwesomeIcon icon={faFacebook} size="xl"/>
                        <FontAwesomeIcon icon={faInstagram} size="xl"/>

                    </div>
                </div>
            </div>
        </div>
        
    );
}


export default Footer;

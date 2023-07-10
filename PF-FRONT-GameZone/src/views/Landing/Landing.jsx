import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import logoImage from "../../assets/LOGOGAMEZONE.png";

const Landing = () => {
    return(
        <div className={styles.container}>
        <img src={logoImage} alt="GAME ZONE" className={`${styles.logo} ${styles.enlarged}`} />
        <Link to="/home">
            <button className={styles.button}>start</button>
        </Link>
        <h1 className={styles.subHeading}>Discover the excitement in GAME ZONE. Get the best games in our online store. Dive into unforgettable adventures and challenge your skills!</h1>
        </div>
    );
}

export default Landing;

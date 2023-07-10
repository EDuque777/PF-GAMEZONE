import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Profile.module.css";
import ProfileView from "./ProfileViews/ProfileView";
import ShoppingView from "./ProfileViews/ShoppingView";
import ReviewsView from "./ProfileViews/ReviewsView";
// import * as act from "../../redux/actions";

const Profile = (props) => { // Agrega props como parámetro
  const [activeOption, setActiveOption] = useState("profile");

  const renderView = () => {
    switch (activeOption) {
      case "profile":
        return <ProfileView  />;
      case "shopping":
        return <ShoppingView />;
      case "reviews":
        return <ReviewsView />;
      default:
        return null;
    }
  };

  return (
    <html>
      <head>{/* Head content */}</head>
      <body>
        <div className={styles.area}></div>
        <nav className={styles.main_menu}>
          <ul>
            <li>
              <a href="" onClick={() => setActiveOption("profile")}>
                <i className={`fa fa-home ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Profile</span>
              </a>
            </li>
            <li className="has subnav">
              <a href="/library" onClick={() => setActiveOption("shopping")}>
                <i className={`fa fa-gamepad ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>MyGames</span>
              </a>
            </li>
            {/* <li className="has-subnav">
              <a href="/review" onClick={() => setActiveOption("reviews")}>
                <i className={`fa fa-star ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Reviews</span>
              </a>
            </li> */}
            {/* More menu options */}
          </ul>
          <ul className="logout">
            <li>
              <Link to="/form">
                <i className={`fa fa-power-off ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
        {renderView()}
      </body>
    </html>
  );
};

export default Profile;



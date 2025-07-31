import React from "react";

import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.text}>cheporté</p>
      <p className={styles.subtext}>
        Not all wanderers are lost—some are just debugging the stars.
      </p>
    </div>
  );
};

export default Hero;

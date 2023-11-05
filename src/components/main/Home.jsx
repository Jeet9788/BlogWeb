'use client'
import React from 'react';
import styles from "./Home.module.css";

export const Main = () => {
  return (
      <div className={styles.home}>
        <div className={styles.videocontainer}>
          <video autoPlay loop muted className={styles.video}>
            <source src="/videoBg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.title}>
          <b>Welcome to Travel Explorer</b>
          <p className={styles.p}>Your Adventure Awaits!</p>
          <p className={styles.p}>Discover stories and creative ideas</p>
          <button>explor</button>
        </div>

      </div>
  );
};

export default Main;

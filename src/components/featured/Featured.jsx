import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>welcome to Traveler</b> Discover places and creative plans
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/munnar.jpg"  alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>A Slice of Paradise: Exploring Munnar in Kerala</h1>
          <p className={styles.postDDesc}>
          Munnar is well-connected to major cities in Kerala, making it accessible by road, rail, and air.
           The nearest airport is Cochin International Airport, about 110 kilometers away, and you can hire a taxi or take a bus to reach Munnar.
           The scenic drive through winding roads and verdant landscapes is an experience in itself.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default Featured

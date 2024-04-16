"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  const [highestViewedPosts, setHighestViewedPosts] = useState([]);

  useEffect(() => {
    async function fetchHighestViewedPosts() {
      const res = await fetch('/api/popular');
      const data = await res.json();
      console.log(data);
      setHighestViewedPosts(data);
    }

    fetchHighestViewedPosts();
  }, []);

  return (
    <div className={styles.items}>
      {highestViewedPosts.map(post => (
        <Link key={post.id}href={`/posts/${post.slug}`}  className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.kerala}`}>{post.cat.title}</span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}> - {new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;

import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=gujarat"
        className={`${styles.categoryItem} ${styles.gujarat}`}
      >
        gujarat
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.rajasthan}`}>
        rajasthan
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.mumbai}`}>
        mumbai
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.himachal}`}>
        himachal
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.kerala}`}>
        kerala
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.kashmir}`}>
        kashmir
      </Link>
    </div>
  );
};

export default MenuCategories;

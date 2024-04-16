// pages/components/Featured.js
'use client'
import React, { useEffect, useState } from 'react';
import styles from "./featured.module.css"
import Image from 'next/image'
import Card from '../card/Card';

export const Featured = () => {
  const [highestViewedPost, setHighestViewedPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHighestViewedPost = async () => {
      try {
        const response = await fetch('/api/highview', { method: 'GET' });
        if (!response.ok) {
          throw new Error('Failed to fetch highest viewed post');
        }
        const data = await response.json();
        setHighestViewedPost(data);
      } catch (error) {
        console.error('Error fetching highest viewed post:', error);
        setError('Failed to fetch highest viewed post. Please try again later.');
      }
    };
    
    fetchHighestViewedPost();
  }, []);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      <b>  Welcome to WonderWise</b> Discover places and creative plans
      </h1>
      {error && <p className={styles.error}>{error}</p>}
      {highestViewedPost && (
        <Card key={highestViewedPost.id} item={highestViewedPost} />
      )}
    </div>
  )
}

export default Featured;

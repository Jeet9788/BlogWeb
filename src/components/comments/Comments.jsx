import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link';
import Image from 'next/image';

export const Comments = () => {

  const status = "authenticated";  
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="write a comment..." className={styles.input} />
                <button className={styles.button}>Send</button>
            </div>
        ) : (
            <Link>Login to Write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John doe</span>
                        <span className={styles.date}>01.01.2020</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                    ullam adipisci dicta, quasi voluptatem omnis harum officiis ipsam
                    accusamus, nulla necessitatibus placeat nisi sapiente! Vitae, sequi
                    atque architecto?
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John doe</span>
                        <span className={styles.date}>01.01.2020</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                    ullam adipisci dicta, quasi voluptatem omnis harum officiis ipsam
                    accusamus, nulla necessitatibus placeat nisi sapiente! Vitae, sequi
                    atque architecto?
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John doe</span>
                        <span className={styles.date}>01.01.2020</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                    ullam adipisci dicta, quasi voluptatem omnis harum officiis ipsam
                    accusamus, nulla necessitatibus placeat nisi sapiente! Vitae, sequi
                    atque architecto?
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John doe</span>
                        <span className={styles.date}>01.01.2020</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                    ullam adipisci dicta, quasi voluptatem omnis harum officiis ipsam
                    accusamus, nulla necessitatibus placeat nisi sapiente! Vitae, sequi
                    atque architecto?
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Comments

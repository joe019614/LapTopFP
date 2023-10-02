import React from 'react'
import styles from "./TopNav.module.css"

export default function TopNav() {
  return (
    <div className={styles["top-nav"]}>
        <div className={styles.left}>
            <span>write a review </span>
            <span>events </span>
        </div>
        <div className={styles.right}>
            <span>login </span>
            <button className='button'>sign up </button>
        </div>    
    </div>
  )
}

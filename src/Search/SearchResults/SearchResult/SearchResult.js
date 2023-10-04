import React from 'react'
import styles from "./SearchResult.module.css"
import BusinessRating from '../../../BusinessRating/BusinessRating'

export default function SearchResult() {
  return (
    <div className={styles["search-result"]}>
      <img src="https://via.placeholder.com/210" alt="business" className={styles['business-image']}/>
      <div className={styles['business-info']}>
        <h2 className='subtitle'> Burger Place123 </h2>
        <BusinessRating/>
        <p> $$ <span className='tag'> burgers </span> <span className='tag'> fastfoods </span> </p>
      </div>
      <div className={styles['contact-info']}>
        <p>9123 4567</p>
        <p>example street 9</p>
        <p>123 HongKong</p>
      </div>
    </div>
  )
}
  
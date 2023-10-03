import React from 'react'
import styles from "./SearchResultsSummary.module.css"

export default function SearchResultsSummary() {
  return (
    <div className={styles['container']}>
        <div className={styles['search-summary']}>
            <h1 className='subtitle'>
                <strong>burgers</strong> HongKong
            </h1>
            <p>Showing 1-20 out of 100results</p>
        </div>
        <div className={styles.filters}>
            <button className="button">
              <span className="icon"> <i className="fas fa-sliders-h"></i> </span>
              <span>All Filters</span>
            </button>
            <button className="button">
              <span className="icon"> <i className="fab fa-clock"></i> </span>
              <span>Open Now</span>
            </button>
            <button className="button">
              <span className="icon"> <i className="fab fa-github"></i> </span>
              <span>GitHub</span>
            </button>
        </div>
    </div>
  )
}

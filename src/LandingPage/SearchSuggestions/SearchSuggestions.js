import React from 'react'
import styles from "./SearchSuggestions.module.css"

export default function SearchSuggestions() {
  return (
    <div className={styles.suggestions}>
        <span className="icon is-small">
            <i className="fas fa-utensils" /* style={{color: "#ffffff",}} */ ></i>
        </span>
        <span className={styles.suggestion}>Restaurantssssss</span>

        <span className="icon is-small">
            <i className="fas fa-cocktail" /* style={{color: "#ffffff",}} */ ></i>
        </span>
        <span className={styles.suggestion}>Nightlife</span>

        <span className="icon is-small">
            <i className="fas fa-concierge-bell" /* style={{color: "#ffffff",}} */ ></i>
        </span>
        <span className={styles.suggestion}>Service</span>
        
        <span className="icon is-small">
            <i className="fas fa-truck" /* style={{color: "#ffffff",}} */ ></i>
        </span>
        <span className={styles.suggestion}>Delivery Services</span>
     

    </div>
  )
}

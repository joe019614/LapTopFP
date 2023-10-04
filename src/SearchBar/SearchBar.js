import React from 'react'
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
    const sizeClass = props.small ? "" : "is-medium";
  return (
    <div>
        <div className="field has-addons">
            <p className="control">
                <button className={`button is-static ${sizeClass}`}>Search</button>   
            </p>

            <p className="control">
                <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="Chinese,Japanese,Burger,Pizza"/>
            </p>

            <p className="control">
                <button className={`button is-static ${sizeClass}`}>Near</button>   
            </p>

            <p className="control">
                <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="where"/>
            </p>
            
            <button className={`button ${sizeClass} ${styles['search-button']}`}>
                <span className={`icon is-small ${styles['search-icon']}`}>
                <i className="fas fa-search" /* style={{color: "#ffffff",}} */ ></i>
                </span>
            </button>
            
        </div>
    </div>
  );
}

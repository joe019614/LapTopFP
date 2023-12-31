import React from 'react'
import logo from "../assets/logo.png"
import styles from "./NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div className={styles["nav-bar"]}>
        <Link to="/"><img src={logo} className={styles.logo} alt="logo"/></Link>
        <SearchBar small term={props.term} location={props.location} search={props.search}/>
        <button className={`button ${styles['nav-button']}`}>Sign in</button>
        <button className={`button ${styles['nav-button']}`}>Register</button>
    </div>
  )
}

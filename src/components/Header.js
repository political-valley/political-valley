import React from 'react'
import { Link } from 'gatsby'
import config from '../../data/SiteConfig'
import Categories from './Categories'
import styles from './Header.module.scss'

const Header = () => (
  <header>
    <h1>
      <Link to="/" activeClassName={styles.activeNav}>
        {config.siteTitle}
      </Link>
    </h1>
    <nav>
      <ul className={styles.mainNav}>
        <li>
          <Link to="/categories" activeClassName={styles.activeNav}>
            Categories
          </Link>
        </li>
        <li>
          <Link to="/topics" activeClassName={styles.activeNav}>
            Topics
          </Link>
        </li>
        <li> :: </li>
        <li>
          <Link to="/about" activeClassName={styles.activeNav}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header

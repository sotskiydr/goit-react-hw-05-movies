import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.btns}>
        <li className={styles.btn}>
          <NavLink
            className={navData =>
              navData.isActive ? styles.active : styles.link
            }
            exact="true"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.btn}>
          <NavLink
            className={navData =>
              navData.isActive ? styles.active : styles.link
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

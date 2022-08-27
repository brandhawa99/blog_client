import React from 'react';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  const activeStyle = {
    backgroundColor: "orangered",
    color: "black",
    padding: "7px 10px",
    borderRadius: ".35rem",
  }

  return (
    <div className={styles.mainContainer}>
        <NavLink 
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          className={`${styles.homelink} ${styles.link} `}  to='/'>
          Dev Blog
        </NavLink>
        <NavLink 
          style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        className={styles.link} to='/posts'>
        posts
        </NavLink>
    </div>
  );
};

export default Nav
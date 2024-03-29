import React from 'react';
import styles from './PostCard.module.css';
import {NavLink} from 'react-router-dom'

function PostCard(props) {
  const {author, title , date, _id} = props; 
  return (
      <NavLink to={"/posts/"+_id} key={_id} className={styles.mainContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.dataContainer}>
          <div>{date}</div>
          <div>{author.first_name}, {author.last_name}</div>
        </div>
      </NavLink>
  );
};

export default PostCard
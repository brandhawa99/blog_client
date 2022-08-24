import React from 'react';
import styles from './PostCard.module.css';

function PostCard(props) {
  const {author, title , date} = props; 
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.dataContainer}>
        <div>{date}</div>
        <div>{author}</div>
      </div>
    </div>
  );
};

export default PostCard
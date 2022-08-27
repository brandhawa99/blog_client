import React from 'react';
import styles from './Comment.module.css';

function Comment(props) {
  const {name, comment, time} = props;
  return (
    <div className={styles.mainContainer}>
        <div className={styles.time}>
          {time}
        </div>
      <div className={styles.data}>
        {name} 
      </div>
      <div className={styles.comment}>
        {comment} 
      </div>
    </div>
  );
};

export default Comment
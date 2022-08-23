import {React, useEffect, useState} from 'react';
import styles from './Home.module.css';
import hero from '../../icons/hero.svg';
import PostHolder from '../PostHolder';

const Home = () => {
  const [posts, setPosts] = useState([]);

  //get the 5 most recent post from database
  const fetch_index = async() =>{
    const data = await fetch('https://agile-mesa-41864.herokuapp.com/')
    const post = await data.json();
    setPosts(post);
  }

  useEffect(()=>{
    fetch_index();

  },[])  
  

  return (
  <div className={styles.Home} data-testid="Home">
    <div className={styles.headerContent}>
      <div className={styles.text}>
        <h1>Welcome To The Dev Blog</h1>
        <p>
          This is where anyone and eveyone who is anybody comes to 
          get the latest news in tech. First, factual news! Come and
           read one of our wonderful articles! 
        </p>
      </div>
      <img className={styles.heroIcon} src={hero} alt="hero icon"></img>
    </div>
    <div className={styles.posts}>
    {
        posts.map(post =>{
          const {title, author, blog,_id} = post;
          return <PostHolder key={_id} title={title} author={author} blog={blog} timestamp={post.timestamp} _id={_id} />
        })
      }
    </div>

  </div>
)
};

export default Home;

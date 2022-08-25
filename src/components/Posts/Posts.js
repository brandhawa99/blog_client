import {React, useEffect, useState} from 'react'
import PostCard from '../PostCard/PostCard';
import styles from './Posts.module.css'

export default function Posts() {
  const link = "https://agile-mesa-41864.herokuapp.com/";
  const testLink = "http://localhost:3001/posts/"


  const [posts, setPosts] = useState();
  const getAllPosts = async() =>{
    try {
      const data =  await fetch(testLink,{
        mode:'cors'
      })
      if(data.ok){
        let json = await data.json();
        setPosts(json);
        console.log(json);

      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getAllPosts();
  },[])
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Latest Posts</h1>
      {
        (!posts)?<div>There are no posts</div>:
        <div className={styles.postsContainer}> 
          {
            posts.map(post =>{
              const {author, timestamp, title, _id} = post; 
              console.log(_id, "THESE ARE THE IDS");
              return <PostCard  key={_id} title={title} date={timestamp} author={author} _id={_id}/>
            })
          }
        </div>
      }
    </div>
  )
}

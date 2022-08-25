import {React, useEffect, useState} from 'react'
import PostCard from '../PostCard/PostCard';
import styles from './Posts.module.css'

export default function Posts() {
  const link = "https://agile-mesa-41864.herokuapp.com/";
  const testLink = "http://localhost:3001/posts"


  const [posts, setPosts] = useState();
  const getAllPosts = async() =>{
    try {
      const data =  await fetch(testLink,{
        mode:'cors'
      })
      if(data.ok){
        const json = await data.json();
        setPosts(json);
        console.log(json);

      }
    } catch (error) {
      
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
          {posts.map(post=>{
            const {title, author, blog,_id, timestamp} = post;
            return <PostCard key={_id} title={title} author={author} blog={blog} date={timestamp} />
          })}
        </div>
      }
    </div>
  )
}

import {React, useEffect, useState} from 'react'
import PostCard from '../PostCard/PostCard';
import styles from './Posts.module.css'

export default function Posts() {
  const [posts, setPosts] = useState();
  const getAllPosts = async() =>{
    try {
      const data =  await fetch('https://agile-mesa-41864.herokuapp.com/posts',{
        mode:'cors'
      })
      if(data.ok){
        const json = await data.json();
        setPosts(json);

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

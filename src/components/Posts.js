import {React, useEffect, useState} from 'react'
import PostHolder from './PostHolder';
require('../styles/Posts.css')

export default function Posts() {
  const [posts, setPosts] = useState();
  const getAllPosts = async() =>{
    try {
      const data =  await fetch('http://localhost:3001/posts',{
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
    <div className='posts-main'>
      {
        (!posts)?<div>There are no posts</div>:
        <div className='wrapper-grid'> 

        {posts.map(post=>{
          const {title, author, blog,_id} = post;
          return <PostHolder key={_id} title={title} author={author} blog={blog} timestamp={new Date(post.timestamp).toISOString().slice(0,10).replace(/-/g,"-")} _id={_id} />
        })}
        </div>
      }
    </div>
  )
}

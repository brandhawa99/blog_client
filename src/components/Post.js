import React from 'react'
import {useParams} from 'react-router-dom'
export default function Post() {
//need to fetch from /posts/${params.id}
// this is why we need the use params from react router dom

let params = useParams();

//basically what i need to do 
const PostDetails = async()=>{
  const post = await fetch(`/localhosts/posts/${params.id}`)
  console.log(post);
}
  


  return (
    <div>Post</div>
  )
}

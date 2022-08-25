import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../styles/Post.css'


export default function Post() {
  const link = "https://agile-mesa-41864.herokuapp.com/";
  const testLink = "http://localhost:3001"

const params = useParams();
const [postdata, setPostData ] = useState();
const [commentArr, setCommentArr] = useState([]);
const [date, setDate] = useState();
const[userComment, setUserComment] = useState({
  name:"",
  comment:""
})

/**
 * Get all the data for the blog
 */
const PostDetails = async() =>{
  const data = await fetch(`${testLink}/posts/${params.id}`)
  const post = await data.json();
  setPostData(post.post);
  setCommentArr(post.comments);
  setDate(post.date);
  console.log(commentArr)
}
/**
 * Get all the username and comment 
 */
const setCommentData = (e) =>{
  const newdata = {...userComment}
  newdata[e.target.name] = e.target.value;
  setUserComment(newdata);
  console.log(userComment)
  return false;
}
/**
 * Submit submit the users comment
 */
const submitComment = async(e) =>{
  e.preventDefault()
    let response = await fetch(`https://agile-mesa-41864.herokuapp.com/posts/${params.id}`,{
    method:"POST",
    mode:'no-cors',
    credentials:'same-origin',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      name :userComment.name,
      comment :userComment.comment,
    }),
  });
  setUserComment({
    name:"",
    comment:""
  })
  if(response.ok){
    let data = await response.json();
    setPostData(data);
  }
  return false;
}

const wrapper = (e) =>{
  submitComment(e);
  setUserComment({
    name:"",
    comment:""
  })
}

useEffect(()=>{
  PostDetails();
},[userComment])

  
  return (
    <div className='main-post'>
      {
        !postdata?<div>There is nothing post</div>:
        <div className='single-container'>
          <h1>{postdata.title}</h1>
          <div className='meta'>
            <div>Author: {postdata.author.last_name},{postdata.author.first_name} </div>
            <div>{date}</div>
          </div>
          <div className='blog-post'>{postdata.blog}</div>
        </div>
      }
        <h4 className='heading'>Add A Comment</h4>
      <form className='comment-form'>
        <label>Name:</label>
        <input name='name' type={'text'} value={userComment.name} onChange={(e)=>setCommentData(e)} ></input>
        <label>Comment:</label>
        <input name='comment'type={'text'} value={userComment.comment} onChange={(e)=>setCommentData(e)} />
        <button onClick={(e)=>wrapper(e)}>Post</button>
      </form>
        <div className='comment-container'>

        {
          commentArr.length<=0 ? <div>There are no comments</div>:
          commentArr.map(com =>{
            return(
              <div className='comment-comment' key={com._id}>
                <div>Username: {com.name }</div>
                <div>Message: {com.message} </div>
              </div>
          )})
          
          
        }
        </div>
      </div>
  )
}


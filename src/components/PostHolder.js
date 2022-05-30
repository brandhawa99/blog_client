import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../styles/postHolder.css'

function PostHolder(props) {
  const {title, author, blog,timestamp,_id} = props;
  const navigate = useNavigate();

  const redirect = (e,link) =>{
    e.preventDefault();
    navigate('/posts/'+link)

  }

  return (
    <div className='post-container' onClick={(e)=>redirect(e,_id)}>
      <div className='footer'>
        <div className='timestamp'>{timestamp}</div>                                                                                                                                                                                                                                                                                                                                                                                                    
        <div className='author'>{author.last_name}, {author.first_name}</div>
      </div>
      <div className='title'>{title}</div>
      <div className='blog'>{blog}</div>

    </div>
  )
}

export default PostHolder
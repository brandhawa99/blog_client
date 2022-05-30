import React,{useState, useEffect} from 'react'
import hero from '../icons/hero.svg'
import '../styles/Home.css'
import PostHolder from './PostHolder';


export default function Home() {
  const [posts, setPosts] = useState([]);

  //get the 5 most recent post from database
  const fetch_index = async() =>{
    const data = await fetch('http://localhost:3001/')
    const post = await data.json();
    setPosts(post);
  }

  useEffect(()=>{
    fetch_index();

  },[])

  return (
    <div className='main-container'>
      {/*main header of the page*/}
      <section className='header'>
        <div className='text'>
         <h1>Welcome to, Dev Blog</h1>
         <p>This is where anyone and eveyone who is anybody comes to get the latest news in tech. First, factual news! Come and read one of our wonderful articles! </p>
        </div>
        <img src={hero} alt='cartoon of person looking at a blog post' />
      </section>
           {/*5 recent posts section*/}
      <section className='posts'>
        <h1>Recent Blog Posts</h1>
        {(posts.length>=0) ? 
        <div className='wrapper-grid'>
          {
        posts.map(post =>{
          const {title, author, blog,_id} = post;
          return <PostHolder key={_id} title={title} author={author} blog={blog} timestamp={post.timestamp} _id={_id} />
        })
      }
    </div>
          :<dix>There are no posts</dix>}
      </section>
    </div>

  )
}



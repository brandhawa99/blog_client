import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import { getPostData, postComment } from "./PostQuery";
import Comment from "../Comment/Comment";

export default function Post() {
  const params = useParams();
  const link = "https://blog-api-h9xk.onrender.com/posts/" + params.id;
  const testLink = "http://localhost:3001/posts/" + params.id;

  const [postdata, setPostData] = useState();
  const [commentData, setCommentData] = useState([]);
  const [date, setDate] = useState();
  const [commentPosted, setCommentPosted] = useState(false);
  const [userComment, setUserComment] = useState({
    name: "",
    comment: "",
  });

  const commentValue = (e) => {
    const newdata = { ...userComment };
    newdata[e.target.name] = e.target.value;
    setUserComment(newdata);
    console.log(userComment);
  };

  const postUserComment = async (e) => {
    e.preventDefault();
    let data = await postComment(userComment.name, userComment.comment, link);
    setCommentData(data);
    setUserComment({
      name: "",
      comment: "",
    });
    setCommentPosted(true);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await getPostData(link);
        setPostData(data.post);
        setCommentData(data.comments);
        setDate(data.date);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [commentPosted]);

  return (
    <div className={styles.mainContainer}>
      {!postdata ? (
        <h1>There Is Nothing Here</h1>
      ) : (
        <div className={styles.postContainer}>
          <h1>{postdata.title}</h1>

          <div className={styles.postData}>
            <div>{date}</div>
            <div>
              {postdata.author.last_name}, {postdata.author.first_name}{" "}
            </div>
          </div>
          <div className={styles.blog}>&emsp;{postdata.blog}</div>
        </div>
      )}
      {!commentPosted && (
        <form className={styles.commentForm}>
          <h2 className="heading">
            Got Something on your mind?<br></br> Let us know!
          </h2>
          <div className={styles.inputs}>
            <input
              placeholder="Name"
              name="name"
              type={"text"}
              value={userComment.name}
              onChange={commentValue}
              required
            ></input>
            <input
              placeholder="Comment"
              name="comment"
              type={"text"}
              value={userComment.comment}
              onChange={commentValue}
              required
            />
          </div>
          <button onClick={postUserComment} type="submit">
            Post
          </button>
        </form>
      )}
      <div className={styles.commentContainer}>
        <h1>Comments:</h1>
        {commentData.length <= 0 ? (
          <h2>Be the first to comment!</h2>
        ) : (
          commentData.map((com) => {
            return (
              <Comment
                name={com.name}
                comment={com.message}
                time={com.formatted_date}
                key={com._id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

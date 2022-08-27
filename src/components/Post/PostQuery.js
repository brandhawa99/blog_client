
const getPostData = async (link) => {
  try {
    let postData = await fetch(link)
    let postJSON = await postData.json();
    return postJSON; 
  } catch (error) {
    console.log(error);
  }
}

const postComment = async(name, comment, link) =>{
  let commentData, commentJSON
  const data = {name:name, comment: comment}
  try {
    commentData = await fetch(link, {
      method: "POST",
      mode: "cors",
      credentials:"same-origin",
      headers:{
        "Accept":'application/json',
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),
    });
    if(!commentData.ok){
      throw Error("error with comment");
    }
    commentJSON = await commentData.json();
    return commentJSON;
  } catch (error) {
    console.error(error);
  }
}

export {postComment, getPostData}; 
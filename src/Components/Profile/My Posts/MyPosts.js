import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postBlock}>
      <h3>MY POSTS</h3>
      <div className={styles.addPostBlock}>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button className={styles.button} onClick={onAddPost}>
            Add Post
          </button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

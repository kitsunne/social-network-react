import React from "react";
import styles from "./Post.module.css";
import { FcLike } from "react-icons/fc";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt="avatar"
        />
        {props.message}
      </div>
      <div className={styles.likes}>
        {/* <button className={classes.button}>I like it</button> */}
        <span>
          {props.likesCount}
          <FcLike className={styles.likeIcon} />
        </span>
      </div>
    </div>
  );
};

export default Post;

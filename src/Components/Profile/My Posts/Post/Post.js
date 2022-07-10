import React from "react";
import styles from "./Post.module.css";
import { FcLike } from "react-icons/fc";
import userAlternative from "../../../../assets/images/userAlternative.jpeg";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <img src={userAlternative} alt="avatar" />
        {props.message}
      </div>
      <div className={styles.likes}>
        <span>
          {props.likesCount}
          <FcLike className={styles.likeIcon} />
        </span>
      </div>
    </div>
  );
};

export default Post;

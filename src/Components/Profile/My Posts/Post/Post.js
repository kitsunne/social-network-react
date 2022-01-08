import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={classes.item}>
			<div className={classes.itemInfo}>
				<img
					src="https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
					alt="avatar"
				/>
				{props.message}
			</div>
			<div className={classes.likes}>
				{/* <button className={classes.button}>I like it</button> */}
				<span>{props.likesCount} like</span>
			</div>
		</div>
	);
};

export default Post;

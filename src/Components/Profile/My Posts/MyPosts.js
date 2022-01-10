import React from "react";
import classes from "./MyPosts.module.css";
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
		<div className={classes.postBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						ref={newPostElement}
						onChange={onPostChange}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button className={classes.button} onClick={onAddPost}>
						Add Post
					</button>
				</div>
			</div>
			<div className={classes.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;

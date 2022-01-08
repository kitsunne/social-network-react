import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const DialogItem = (props) => {
	const path = "/dialogs/" + props.id;
	return (
		<div className={`${classes.dialog} ${classes.active}`}>
			<img
				src="https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
				alt="avatar"
			/>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

export default DialogItem;

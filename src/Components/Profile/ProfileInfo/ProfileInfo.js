import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					src="https://color-hex.org/colors/6c5b7b.png"
					alt="profile-avatar"
				></img>
			</div>
			<div className={classes.descriptionBlock}>ava+description</div>
		</div>
	);
};

export default ProfileInfo;

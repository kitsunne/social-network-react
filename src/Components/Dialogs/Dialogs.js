import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} />
	));
	let messagesElements = state.messages.map((message) => (
		<Message message={message.message} />
	));
	let newMessageText = state.newMessageText;

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = (e) => {
		let newMessage = e.target.value;
		props.updateNewMessageText(newMessage);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>
			<div className={classes.messages}>{messagesElements}</div>
			<div className={classes.newMessage}>
				<div>
					<textarea
						onChange={onNewMessageChange}
						value={newMessageText}
					></textarea>
				</div>
				<div>
					<button className={classes.button} onClick={onSendMessageClick}>
						Reply
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;

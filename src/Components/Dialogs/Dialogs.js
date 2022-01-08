import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
	sendMessageCreator,
	updateNewMessageTextCreator,
} from "../../Redux/state";

const Dialogs = (props) => {
	let state = props.store.getState().dialogsPage;

	const dialogsElements = state.dialogs.map((dialog) => (
		<DialogItem
			name={dialog.name}
			id={dialog.id}
			dialogs={props.state.dialogs}
		/>
	));
	const messagesElements = state.messages.map((message) => (
		<Message message={message.message} id={props.state.dialogs.id} />
	));

	const newMessageText = state.newMessageText;

	const onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	const onNewMessageChange = (e) => {
		let newMessage = e.target.value;
		props.store.dispatch(updateNewMessageTextCreator(newMessage));
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

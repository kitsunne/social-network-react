import React from "react";
import {
	updateNewMessageTextCreator,
	sendMessageCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;

	const onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	const onNewMessageChange = (newMessage) => {
		props.store.dispatch(updateNewMessageTextCreator(newMessage));
	};

	return (
		<Dialogs
			updateNewMessageText={onNewMessageChange}
			sendMessage={onSendMessageClick}
			dialogsPage={state}
		/>
	);
};

export default DialogsContainer;

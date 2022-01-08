const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "hi,how are you?", likesCount: 56 },
				{ id: 2, message: "It's my first post.", likesCount: 87 },
				{ id: 3, message: "WHAT?", likesCount: 123 },
			],
			newPostText: "What's going on?",
		},
		dialogsPage: {
			dialogs: [
				{
					id: 1,
					name: "Tim",
				},
				{
					id: 2,
					name: "Andrew",
				},
				{
					id: 3,
					name: "Susan",
				},
				{
					id: 4,
					name: "Leo",
				},
				{
					id: 5,
					name: "Rafael",
				},
			],
			messages: [
				{
					id: 1,
					message: "Hi",
				},
				{
					id: 2,
					message:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					id: 3,
					message: "It's OK by me. Deal.",
				},
				{
					id: 4,
					message: "Would you mind calling you for me?",
				},
				{
					id: 5,
					message: "Rafael",
				},
			],
			newMessageText: "Write smth...",
		},
		siteBar: {
			friends: [
				{ name: "Tim" },
				{ name: "Susan" },
				{
					name: "Andrew",
				},
			],
		},
	},
	_callSubscriber() {
		console.log("state was changed");
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			const newPost = {
				id: 4,
				message: this._state.profilePage.newPostText,
				likesCount: 18,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessageText = action.newMessage;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let newMessage = this._state.dialogsPage.newMessageText;
			let newDialog = this._state.dialogsPage.newDialog;
			this._state.dialogsPage.newMessageText = "";
			this._state.dialogsPage.dialogs.push({ id: 6, name: "Me" });
			this._state.dialogsPage.messages.push({ id: 6, message: newMessage });
			this._callSubscriber(this._state);
		}
	},
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextCreator = (newMessage) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newMessage: newMessage,
});

export default store;
window.store = store;

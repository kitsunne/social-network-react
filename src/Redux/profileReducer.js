const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
	posts: [
		{ id: 1, message: "hi,how are you?", likesCount: 56 },
		{ id: 2, message: "It's my first post.", likesCount: 87 },
		{ id: 3, message: "WHAT?", likesCount: 123 },
	],
	newPostText: "What's going on?",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 4,
				message: state.newPostText,
				likesCount: 18,
			};
			state.posts.push(newPost);
			state.newPostText = "";
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export default profileReducer;

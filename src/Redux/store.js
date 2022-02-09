import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
    sidebar: {
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;

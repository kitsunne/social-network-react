const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      state.newMessageText = "";
      state.dialogs.push({ id: 6, name: "Me" });
      state.messages.push({ id: 6, message: newMessage });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: newMessage,
});

export default dialogsReducer;

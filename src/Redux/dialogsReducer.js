const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

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
  newMessageBody: "Write smth...",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;

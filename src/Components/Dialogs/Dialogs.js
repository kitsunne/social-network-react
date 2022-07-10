import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div className={classes.newMessage}>
        <div>
          <AddMessageForm sendMessage={props.sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import { StyledDialogs, DialogsItem, Messages } from "./units";
import Dialog from "./Dialog";
import Message from "./Messge";

const Dialogs = (props) => {
    let state = props.dialogs;
    let dialogsElement = state.dialogsData.map((d) => <Dialog id={d.id}>{d.name}</Dialog>);
    let messagesElement = state.messagesData.map((m) => <Message>{m.message}</Message>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <StyledDialogs>
            <DialogsItem>{dialogsElement}</DialogsItem>
            <Messages>
                {messagesElement}
                <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message" />
                <button onClick={onSendMessageClick}>add message</button>
            </Messages>
        </StyledDialogs>
    );
};

export default Dialogs;

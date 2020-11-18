import React from "react";
import StyledMessage from "./units";

const Message = (props) => {
    return <StyledMessage>{props.children}</StyledMessage>;
};

export default Message;

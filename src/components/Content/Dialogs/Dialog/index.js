import React from "react";
import StyledDialog from "./units";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return (
        <StyledDialog>
            <NavLink to={"/dialogs/" + props.id}>{props.children}</NavLink>
        </StyledDialog>
    );
};

export default Dialog;

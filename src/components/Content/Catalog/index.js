import React from "react";
import { StyledCatalog } from "./units";
import { NavLink } from "react-router-dom";

const Catalog = () => {
    return (
        <StyledCatalog>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Message</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/setting">Setting</NavLink>
        </StyledCatalog>
    );
};

export default Catalog;

import React from "react";
import Img from "./units";

const Post = (props) => {
  return (
    <div>
      <Img src={props.img} alt="" />
      {props.text}
      <div>{`like ${props.like}`}</div>
    </div>
  );
};

export default Post;

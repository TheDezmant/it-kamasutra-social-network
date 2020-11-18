import React from "react";
import { StyledProfile, AddPost } from "./units";
import Post from "./Post";

const Profile = (props) => {
    let postsElements = props.posts.map((p) => <Post img={p.img} text={p.message} like={p.likesCount} />);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChenge = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <StyledProfile>
            <img src="https://ktonanovenkogo.ru/image/priroda-gora.jpg" alt="" />
            <div>ava + discription</div>
            <div>My post</div>
            <AddPost>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChenge} />
                </div>
                <button onClick={onAddPost}> add post</button>
            </AddPost>
            {postsElements}
        </StyledProfile>
    );
};

export default Profile;

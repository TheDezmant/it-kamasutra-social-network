import Profile from "./index";
import { addPostActionCreator, updateNewPostChenge } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profile.postData,
        newPostText: state.profile.newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostChenge(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};
const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConteiner;

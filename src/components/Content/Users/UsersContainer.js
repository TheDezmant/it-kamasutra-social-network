import Users from "./index";
import { connect } from "react-redux";
import { setUsersAC, followAC, unfollowAC } from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;

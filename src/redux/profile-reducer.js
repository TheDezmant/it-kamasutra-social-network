const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        {
            id: 1,
            img: "https://st.depositphotos.com/2000885/1902/i/450/depositphotos_19021343-stock-photo-red-heart.jpg",
            message: "Hello, my name is Misha",
            likesCount: 13,
        },
        {
            id: 2,
            img: "https://st.depositphotos.com/2000885/1902/i/450/depositphotos_19021343-stock-photo-red-heart.jpg",
            message: "It's my first project",
            likesCount: 200,
        },
        {
            id: 3,
            img: "https://st.depositphotos.com/2000885/1902/i/450/depositphotos_19021343-stock-photo-red-heart.jpg",
            message: "Hello world",
            likesCount: 400,
        },
    ],
    newPostText: "",
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                img: "https://st.depositphotos.com/2000885/1902/i/450/depositphotos_19021343-stock-photo-red-heart.jpg",
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: "",
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.updatePost,
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST,
});
export const updateNewPostChenge = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    updatePost: text,
});

export default profileReduser;

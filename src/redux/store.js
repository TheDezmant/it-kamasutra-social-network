import profileReduser from "./profile-reducer";
import catalogReduser from "./catalog-reducer";
import dialogsReduser from "./dialogs-reducer";

let store = {
    _state: {
        profile: {
            postData: [
                {
                    id: 1,
                    img:
                        "https://st.depositphotos.com/2000885/1902/i/450/depositphotos_19021343-stock-photo-red-heart.jpg",
                    message: "Hello, my name is Misha",
                    likesCount: 13,
                },
                {
                    id: 2,
                    img:
                        "https://st.depositphotos.com/2000885/1902/i/450/depositphotos_19021343-stock-photo-red-heart.jpg",
                    message: "It's my first project",
                    likesCount: 200,
                },
                {
                    id: 3,
                    img:
                        "https://st.depositphotos.com/2000885/1902/i/450/depositphotos_19021343-stock-photo-red-heart.jpg",
                    message: "Hello world",
                    likesCount: 400,
                },
            ],
            newPostText: "",
        },

        dialogs: {
            messagesData: [
                { id: "1", message: "Hello sister" },
                { id: "2", message: "it's a nice san day " },
                { id: "3", message: "Mgfdskgjl;fdsa" },
                { id: "4", message: "gjdflskgj;ldfsg" },
                { id: "5", message: "Ivgfds;kgj;sfl" },
            ],
            dialogsData: [
                { id: "1", name: "Andrew" },
                { id: "2", name: "Sasha" },
                { id: "3", name: "Misha" },
                { id: "4", name: "Lena" },
                { id: "5", name: "Ivan" },
            ],
            newMessageBody: "",
        },

        catalog: {},
    },
    _callSubscriber() {
        console.log("State change");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReduser(this._state.profile, action);
        this._state.dialogs = dialogsReduser(this._state.dialogs, action);
        this._state.catalog = catalogReduser(this._state.catalog, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;

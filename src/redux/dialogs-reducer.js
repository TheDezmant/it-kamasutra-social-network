const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: body }],
                newMessageBody: "",
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogsReduser;

import { updateNewMessageBodyCreator, sendMessageCreator } from "../../../redux/dialogs-reducer";
import Dialogs from "./index";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

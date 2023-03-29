import {changeNewMessageTextActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewMessageText: (message) => {
            dispatch(changeNewMessageTextActionCreator(message));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
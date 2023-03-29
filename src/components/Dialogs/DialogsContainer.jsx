import {changeNewMessageTextActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
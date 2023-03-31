import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage;

    let dialogs = dialogsPage.dialogs;

    let messages = dialogsPage.messages;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth){
        return <Navigate to="/login"/>
    }

    return (
        <div className={classes["dialogs"]}>
            <div className={classes["dialogs-items"]}>
                {
                    dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
                }

            </div>
            <div className={classes["messages"]}>
                <div>{
                    messages.map(message => <Message message={message.message}/>)
                }</div>
                
                <div>
                    <ReduxMessageForm onSubmit={addNewMessage}/>
                </div>

            </div>
        </div>
    );
}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const ReduxMessageForm = reduxForm({
    form: "messageForm"
})(MessageForm)

export default Dialogs;
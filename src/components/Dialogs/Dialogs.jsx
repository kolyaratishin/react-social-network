import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage;

    let dialogs = dialogsPage.dialogs;

    let messages = dialogsPage.messages;

    let newMessageText = dialogsPage.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.changeNewMessageText(message);
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
                    <div>
                        <textarea value={newMessageText} onChange={onNewMessageChange} placeholder="Enter message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";


let handlers = new Map();

handlers.set(CHANGE_NEW_MESSAGE_TEXT, changeNewMessageText);
handlers.set(SEND_MESSAGE, sendMessage);

let initialState = {
    dialogs: [
        {id: 1, name: "Mykola"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Vlad"},
        {id: 4, name: "Edward"}
    ],

    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "hello"},
        {id: 3, message: "yo"},
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(state);
        case CHANGE_NEW_MESSAGE_TEXT:
            return changeNewMessageText(state, action.message);
        default:
            return state;
    }
}

function sendMessage(state) {
    const messages = state.messages;
    const lastMessageId = messages[messages.length - 1];
    let newMessage = {id: lastMessageId + 1, message: state.newMessageText}
    return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, newMessage],
    };
}

function changeNewMessageText(state, message) {
    return {
        ...state,
        newMessageText: message
    };
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE};
}

export const changeNewMessageTextActionCreator = (message) => {
    return {type: CHANGE_NEW_MESSAGE_TEXT, message: message};
}

export default dialogsReducer;
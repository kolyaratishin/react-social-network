const SEND_MESSAGE = "SEND-MESSAGE";

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(state, action);
        default:
            return state;
    }
}

function sendMessage(state, action) {
    const messages = state.messages;
    const lastMessageId = messages[messages.length - 1].id;
    let newMessage = {id: lastMessageId + 1, message: action.newMessageBody}
    debugger
    return {
        ...state,
        messages: [...state.messages, newMessage],
    };
}

export const sendMessageActionCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody};
}

export default dialogsReducer;
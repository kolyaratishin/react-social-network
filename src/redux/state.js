let store = {

    _callSubscriber: () => {

    },
    _state: {

        dialogsPage: {
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
        },

        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
            ],
            newPostText: "shos"
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        // this._state = reducer(this._state, action);
        // this._callSubscriber(this._state);
    }

}

export default store;
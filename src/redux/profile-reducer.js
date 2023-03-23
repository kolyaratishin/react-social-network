const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
    newPostText: "shos",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state);
        case CHANGE_NEW_POST_TEXT:
            return changeNewPostText(state, action.text);
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

function addPost(state) {
    const posts = state.posts;
    const lastPostId = posts[posts.length - 1];
    let newPost = {id: lastPostId + 1, message: state.newPostText, likesCount: 0}
    return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost]
    };
}

function changeNewPostText(state, text) {
    return {
        ...state,
        newPostText: text
    };
}

export const addPostActionCreator = () => {
    return {type: ADD_POST};
}

export const changeNewPostTextActionCreator = (text) => {
    return {type: CHANGE_NEW_POST_TEXT, text: text};
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: {...profile}};
}

export default profileReducer;
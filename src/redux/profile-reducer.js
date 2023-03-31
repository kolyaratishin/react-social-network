import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action);
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

function addPost(state, action) {
    const posts = state.posts;
    const lastPostId = posts[posts.length - 1].id;
    let newPost = {id: lastPostId + 1, message: action.postMessage, likesCount: 0}
    return {
        ...state,
        posts: [...state.posts, newPost]
    };
}

export const addPostActionCreator = (postMessage) => {
    return {type: ADD_POST, postMessage};
}

const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: {...profile}};
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export const setStatus = (status) => {
    return {type: SET_USER_STATUS, status};
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;
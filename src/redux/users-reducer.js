import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return followUser(state, action);
        case UNFOLLOW:
            return unfollowUser(state, action);
        case SET_USERS :
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsers: action.totalUsers};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id!==action.userId)}
        default:
            return state;
    }
}

function followUser(state, action) {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
                return {...u, followed: true};
            }
            return u;
        })
    };
}

function unfollowUser(state, action) {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
                return {...u, followed: false};
            }
            return u;
        })
    };
}

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId: userId};
}

export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId: userId};
}

export const setUsers = (users) => {
    return {type: SET_USERS, users: users};
}

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage};
}

export const setTotalUsers = (totalUsers) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsers: totalUsers};
}

export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching};
}

export const toggleFollowingProgress = (isFetching , userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId};
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurrentPage(currentPage));
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsers(data.totalCount / 600));
            });
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.follow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
}

export default usersReducer;
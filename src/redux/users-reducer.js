const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return follow(state, action);
        case UNFOLLOW:
            return unfollow(state, action);
        case SET_USERS :
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsers: action.totalUsers};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

function follow(state, action) {
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

function unfollow(state, action) {
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

export const followActionCreator = (userId) => {
    return {type: FOLLOW, userId: userId};
}

export const unfollowActionCreator = (userId) => {
    return {type: UNFOLLOW, userId: userId};
}

export const setUsersActionCreator = (users) => {
    return {type: SET_USERS, users: users};
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage};
}

export const setTotalUsersActionCreator = (totalUsers) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsers: totalUsers};
}

export const toggleIsFetchingActionCreator = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching};
}

export default usersReducer;
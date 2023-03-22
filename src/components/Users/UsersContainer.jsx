import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import Users from "./Users";

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsers: (totalUsers) => {
            dispatch(setTotalUsersActionCreator(totalUsers));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
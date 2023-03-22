import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import {Component} from "react";
import axios from "axios";
import Users from "./Users";

class UsersApiContainer extends Component {
    getUsers = (currentPage, pageSize) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                return response;
            });

    }

    componentDidMount() {
        this.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setTotalUsers(response.data.totalCount / 600);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.getUsers(page, this.props.pageSize);
    }

    render() {
        return <Users totalUsers={this.props.totalUsers} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}/>
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);
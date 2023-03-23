import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsers,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {Component} from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersApiContainer extends Component {
    getUsers = (currentPage, pageSize) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                return response;
            });

    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setTotalUsers(response.data.totalCount / 600);
            });
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        this.getUsers(page, this.props.pageSize);
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsers={this.props.totalUsers} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}/>
        </>);
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    toggleIsFetching,
})(UsersApiContainer);
import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unfollow} from "../../redux/users-reducer";
import {Component} from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersApiContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount / 600);
            });
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
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
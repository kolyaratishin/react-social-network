import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/hulk.png"
import {Component} from "react";

class Users extends Component {
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
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        debugger
        return (<div>
            <div>
                {pages.map(page => <span
                    className={this.props.currentPage === page ? classes.selectedPage : ""}
                    onClick={(e) => {
                        this.onPageChanged(page);
                    }}>{page}</span>)}
            </div>
            {
                this.props.users.map(u => {
                    return (
                        <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                                 className={classes.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                            <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                        <span>
                            <div>
                                {"Brody"}
                            </div>
                            <div>
                                {"Ukraine"}
                            </div>
                    </span>
                </span>
                        </div>
                    )
                })}</div>)
    }
}

export default Users;
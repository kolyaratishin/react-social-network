import classes from "./Users.module.css";
import userPhoto from "../../assets/hulk.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let onFollow = (id) => {
        props.toggleFollowingProgress(true, id);
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(id);
                }
                props.toggleFollowingProgress(false, id);
            });
    }

    let onUnfollow = (id) => {
        props.toggleFollowingProgress(true, id);
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(id);
                }
                props.toggleFollowingProgress(false, id);
            });
    }

    return (<div>
        <div>
            {pages.map(page => <span
                className={props.currentPage === page ? classes.selectedPage : ""}
                onClick={(e) => {
                    props.onPageChanged(page);
                }}>{page}</span>)}
        </div>
        {
            props.users.map(u => {
                return (
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                                     className={classes.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => onUnfollow(u.id)}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => onFollow(u.id)}>Follow</button>}
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
            })}</div>);
}

export default Users;
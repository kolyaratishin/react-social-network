import classes from "./Users.module.css";
import userPhoto from "../../assets/hulk.png";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
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
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                                 className={classes.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
            })}</div>);
}

export default Users;
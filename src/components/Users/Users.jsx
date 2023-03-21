import classes from "./Users.module.css";

const Users = (props) => {

    return (props.users.map(u => {
        return (
            <div key={u.id}>
                <span>
                        <div>
                            <img src={u.photo} alt="avatar" className={classes.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id)} }>Follow</button>}
                        </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                       <div>
                            {u.location.city}
                        </div>
                        <div>
                            {u.location.country}
                        </div>
                    </span>
                </span>
            </div>)
    }))
}

export default Users;
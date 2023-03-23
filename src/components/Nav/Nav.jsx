import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes["nav"]}>
            <div className={classes["item"]}>
                <NavLink to="/profile" className={isActive}>Profile</NavLink>
            </div>
            <div className={classes["item"]}>
                <NavLink to="/dialogs" className={isActive}>Messages</NavLink>
            </div>
            <div className={classes["item"]}>
                <NavLink to="/news" className={isActive}>News</NavLink>
            </div>
            <div className={classes["item"]}>
                <NavLink to="/music" className={isActive}>Music</NavLink>
            </div>
            <div className={classes["item"]}>
                <NavLink to="/settings" className={isActive}>Settings</NavLink>
            </div>
            <div className={classes["item"]}>
                <NavLink to="/users" className={isActive}>Users</NavLink>
            </div>
        </nav>
    );
}

function isActive({isActive, isPending}) {
    return isPending ? classes["pending"] : isActive ? classes["active"] : "";
}

export default Nav;
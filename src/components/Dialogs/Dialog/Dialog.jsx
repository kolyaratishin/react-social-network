import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={classes["dialog"]}>
            <NavLink className={isActive} to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    );
}

function isActive({isActive, isPending}) {
    return isPending ? classes["pending"] : isActive ? classes["active"] : "";
}

export default Dialog;
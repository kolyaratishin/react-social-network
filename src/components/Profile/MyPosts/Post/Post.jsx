import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes["item"]}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteHWeErjcnZpd_zo_KLQUdeKTFxXe-h86GQ&usqp=CAU"} alt="post avatar"/>
            {props.message}
        </div>
    );
}

export default Post;
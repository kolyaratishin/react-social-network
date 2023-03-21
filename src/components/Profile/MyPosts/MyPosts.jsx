import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let posts = props.posts;


    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.postChange(text);
    }

    return (
        <div className={classes["postBlock"]}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes["posts"]}>
                {
                    posts.map(post => <Post message={post.message}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let posts = props.posts;

    let addPost = (values) => {
        props.addPost(values.postMessage);
    }

    return (
        <div className={classes["postBlock"]}>
            <h2>My posts</h2>
            <div>
                <ReduxPostForm onSubmit={addPost}/>
            </div>
            <div className={classes["posts"]}>
                {
                    posts.map(post => <Post message={post.message}/>)
                }
            </div>
        </div>
    );
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="postMessage" component="textarea" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const ReduxPostForm = reduxForm({
    form: "postForm"
})(PostForm)

export default MyPosts;
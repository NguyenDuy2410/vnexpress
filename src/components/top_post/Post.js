import React from "react";
import classNames from "classnames/bind";
import style from "./Post.module.scss";
const cls = classNames.bind(style);
function Post({ title, location, discription }) {
    return (
        <div className={cls("Post")}>
            <h3>{title}</h3>
            <p>
                {location}-{discription}
            </p>
        </div>
    );
}

export default Post;

import React from "react";
import classNames from "classnames/bind";
import style from "./News.module.scss";
const cls = classNames.bind(style);
function News({ title, image, description }) {
    return (
        <div className={cls("News")}>
            <h3>{title}</h3>
            <div className={cls("Content")}>
                <img alt="" src={image} />
                <p>{description}</p>
            </div>
            <p className={cls("dot")}></p>
        </div>
    );
}

export default News;

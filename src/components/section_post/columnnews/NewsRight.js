import React from "react";
import classNames from "classnames/bind";
import style from "./NewsRight.module.scss";
const cls = classNames.bind(style);
function NewsRight({ title, title2, title3 }) {
    return (
        <div className={cls("NewsRight")}>
            <div className={cls("title-news")}>
                <ul>
                    <li>{title}</li>
                    <li>{title2}</li>
                    <li>{title3}</li>
                </ul>
            </div>
            <p className={cls("dot")}></p>
        </div>
    );
}

export default NewsRight;

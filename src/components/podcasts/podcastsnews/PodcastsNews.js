import React from "react";
import classNames from "classnames/bind";
import style from "./PodcastsNews.module.scss";
const cls = classNames.bind(style);
function PodcastsNews({ src, title, description }) {
    return (
        <div className={cls("PodcastsNews")}>
            <div className={cls("info")}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img alt="" src={src} />
        </div>
    );
}

export default PodcastsNews;

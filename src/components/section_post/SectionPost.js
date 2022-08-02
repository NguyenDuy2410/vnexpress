import React from "react";
import classNames from "classnames/bind";
import style from "./SectionPost.module.scss";
import LeftNews from "./columnnews/LeftNews";
import RightNews from "./columnnews/RightNews";
const cls = classNames.bind(style);
function SectionPost() {
    return (
        <div className={cls("SectionPost")}>
            <LeftNews />
            <RightNews />
        </div>
    );
}

export default SectionPost;

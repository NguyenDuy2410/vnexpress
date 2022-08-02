import React from "react";
import classNames from "classnames/bind";
import style from "./SubMenu.module.scss";

const cls = classNames.bind(style);

const SubMenu = ({ title, subTitle }) => {
    return (
        <div className={cls("submenu")}>
            <div className={cls("title")}>{title}</div>
            <div className={cls("subtitle")}>
                <ul>
                    {subTitle.map((value, index) => {
                        return <li key={index}>{value}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SubMenu;

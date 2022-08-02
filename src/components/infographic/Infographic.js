import React from "react";
import classNames from "classnames/bind";
import style from "./Infographic.module.scss";
import BoxGraphic from "./box_graphic/BoxGraphic";
import Event from "./event/Event";
import Popular from "./popular/Popular";
import IndustryInfo from "./industry_info/IndustryInfo";

const cls = classNames.bind(style);

const Infographic = () => {
    return (
        <div className={cls("inforgraphic")}>
            <h3 className={cls("title")}>Infographics</h3>
            <BoxGraphic />
            <Event />
            <Popular />
            <IndustryInfo />
        </div>
    );
};

export default Infographic;

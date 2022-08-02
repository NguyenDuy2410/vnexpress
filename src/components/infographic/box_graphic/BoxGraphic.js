import React from "react";
import classNames from "classnames/bind";
import style from "./BoxGraphic.module.scss";
import { SiGoogleanalytics } from "react-icons/si";
import { BiMessage } from "react-icons/bi";

const cls = classNames.bind(style);

const BoxGraphic = () => {
    return (
        <div className={cls("box_graphic")}>
            <div className={cls("item")}>
                <div className={cls("item_img")}>
                    <img src="/image/box1.jpg" alt="" />
                    <SiGoogleanalytics />
                </div>
                <h3 className={cls("title")}>
                    <a href="/">
                        Cấu trúc bí mật giúp pharaoh bảo vệ kim tự tháp
                    </a>

                    <span>
                        <div>
                            <BiMessage /> 10
                        </div>
                    </span>
                </h3>
            </div>
            <div className={cls("item")}>
                <div className={cls("item_img")}>
                    <img src="/image/box2.jpg" alt="" />
                    <SiGoogleanalytics />
                </div>
                <h3 className={cls("title")}>
                    <a href="/">
                        Bao nhiêu người bị bắt trong đại án 'chuyến bay giải
                        cứu'?
                    </a>

                    <span>
                        <div>
                            <BiMessage /> 104
                        </div>
                    </span>
                </h3>
            </div>
            <div className={cls("item")}>
                <div className={cls("item_img")}>
                    <img src="/image/box2.jpg" alt="" />
                    <SiGoogleanalytics />
                </div>
                <h3 className={cls("title")}>
                    <a href="/">
                        Bao nhiêu người bị bắt trong đại án 'chuyến bay giải
                        cứu'?
                    </a>

                    <span>
                        <div>
                            <BiMessage /> 104
                        </div>
                    </span>
                </h3>
            </div>
        </div>
    );
};

export default BoxGraphic;

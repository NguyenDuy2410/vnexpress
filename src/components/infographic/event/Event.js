import React from "react";
import classNames from "classnames/bind";
import style from "./Event.module.scss";
import { GrNext, GrPrevious } from "react-icons/gr";

const cls = classNames.bind(style);

const Event = () => {
    return (
        <div className={cls("event")}>
            <div className={cls("event_header")}>
                <div>Sự kiện</div>
                <div>
                    <GrPrevious />
                    <GrNext />
                </div>
            </div>
            <div className={cls("items")}>
                <div className={cls("item")}>
                    <img src="/image/event/ev1.png" alt="" />
                    <div>Mở cổng nộp hồ sơ tham gia Start Up Việt 2022</div>
                </div>
                <div className={cls("item")}>
                    <img src="/image/event/ev2.jpg" alt="" />
                    <div>VnExpress Marathon Marvelous Nha Trang 2022</div>
                </div>
                <div className={cls("item")}>
                    <img src="/image/event/ev3.jpg" alt="" />
                    <div>Tech Awards 2022 - Bình chọn Sản phẩm tôi yêu</div>
                </div>
                <div className={cls("item")}>
                    <img src="/image/event/ev4.jpg" alt="" />
                    <div>VnExpress Marathon Hanoi Midnight 2022</div>
                </div>
            </div>
        </div>
    );
};

export default Event;

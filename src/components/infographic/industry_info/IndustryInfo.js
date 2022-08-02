import React from "react";
import classNames from "classnames/bind";
import style from "./IndustryInfo.module.scss";
import { GrNext, GrPrevious } from "react-icons/gr";

const cls = classNames.bind(style);

const IndustryInfo = () => {
    return (
        <div className={cls("industry_info")}>
            <div className={cls("title")}>
                <div>Thông tin doanh nghiệp</div>
                <div>
                    <GrPrevious />
                    <GrNext />
                </div>
            </div>
            <div className={cls("items")}>
                <div className={cls("item")}>
                    <img src="/image/industry/in1.jpg" alt="" />
                    <div>Saigontourist Group kỷ niệm 47 năm thành lập</div>
                </div>
                <div className={cls("item")}>
                    <img src="/image/industry/in2.png" alt="" />
                    <div>Thiên ý Pharma gia nhập hội Đông y Việt Nam</div>
                </div>
                <div className={cls("item")}>
                    <img src="/image/industry/in3.jpg" alt="" />
                    <div>Bia Hạ Long ra mắt bia low-carb Sapphire Golden</div>
                </div>
                <div className={cls("item")}>
                    <img src="/image/industry/in4.jpg" alt="" />
                    <div>
                        EzyRemit ra mắt cổng thanh toán quốc tế phiên bản tiếng
                        Việt
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryInfo;

import React from "react";
import classNames from "classnames/bind";
import style from "./Popular.module.scss";

const cls = classNames.bind(style);

const data = [
    "Ngày thứ 157 chiến sự: Nga tuyên bố diệt tiểu đoàn cận vệ Tổng thống Ukraine",
    "Quang Hải được chấm điểm cao bậc nhất Pau FC",
    "Màn kịch của kẻ gây thảm án",
    "Mỹ khó cô lập Nga",
    "Nghề streamer và cái giá cho sự nổi tiếng",
    "Cao tốc TP HCM - Dầu Giây vẫn kẹt sau gần tuần thu phí không dừng",
    "Giá xăng có thể giảm lần thứ tư liên tiếp",
    "Vé độc đắc hơn 1,2 tỷ USD ở Mỹ có chủ",
];

const Popular = () => {
    return (
        <div className={cls("popular")}>
            <div className={cls("title")}>
                <div>Xem nhiều</div>
            </div>
            <div className={cls("items")}>
                {data.map((value, index) => {
                    return (
                        <div
                            className={cls(
                                "item",
                                index < 4 ? "border_right" : ""
                            )}
                            key={index}
                        >
                            <div>{index + 1}</div>
                            <a href="/">{value}</a>
                        </div>
                    );
                })}
            </div>
            <div className={cls("items_ex")}>
                <div className={cls("item_ex")}>
                    <img src="/image/event/ev5.jpg" alt="" />
                    <div>
                        <div className={cls("title_ex")}>
                            Sao Việt diện váy cắt xẻ trên thảm đỏ
                        </div>
                        <p className={cls("content")}>
                            Hoa hậu Kỳ Duyên, Tiểu Vy, siêu mẫu Võ Hoàng Yến,
                            Minh Tú và dàn người đẹp diện váy cut out gợi cảm
                            trên thảm đỏ Hoa hậu Thể thao Việt Nam 2022 tối
                            31/7.
                        </p>
                    </div>
                </div>
                <div className={cls("item_ex")}>
                    <img src="/image/event/ev6.jpg" alt="" />
                    <div>
                        <div className={cls("title_ex")}>
                            Electronic toll collection jams HCMC-Dong Nai
                            expressway
                        </div>
                        <p className={cls("content")}>
                            Days since the electronic toll collection (ETC)
                            system was applied, the HCMC - Long Thanh - Dau Giay
                            Expressway has been experiencing severe traffic
                            congestion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;

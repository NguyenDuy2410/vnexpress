import React from "react";
import classNames from "classnames/bind";
import style from "./Podcasts.module.scss";
import PodcastsNews from "./podcastsnews/PodcastsNews";
const cls = classNames.bind(style);
function Podcasts() {
    return (
        <div className={cls("Podcast")}>
            <div>
                <h3 className={cls("title")}>Podcasts</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <PodcastsNews
                    title={
                        "Điểm tin 11h: Giá vàng tuần này có thể tăng tiếp; Công an kêu gọi người 'hôi vàng' giao nộp tang vật"
                    }
                    description={
                        "Không đến đúng giờ khám nghĩa vụ quân sự bị phạt 10-12 triệu đồng; Triệu chứng mới của bệnh đậu mùa... "
                    }
                    src={"/image/diemtin11h.jpg"}
                />
                <p className={cls("separation")}></p>
                <PodcastsNews
                    title={"Nguy cơ gì khi dịch chồng dịch?"}
                    description={
                        "Sốt xuất huyết, cúm A, Covid-19... đều có chiều hướng gia tăng nhưng lại tác động lên từng nhóm..."
                    }
                    src={"/image/chongdich.jpg"}
                />
                <p className={cls("separation")}></p>
                <PodcastsNews
                    title={"'Không chồng, không tiền, không nhà, nuôi 2 con'"}
                    description={
                        "15 năm bị chồng cũ bạo hành, xúc phạm, chị Vân Anh quyết định ly hôn trong sự hiếu... "
                    }
                    src={"/image/baohanhgiadinh.jpg"}
                />
            </div>
        </div>
    );
}

export default Podcasts;

import React from "react";
import classNames from "classnames/bind";
import style from "./TopPost.module.scss";
import Post from "./Post";
import { FiMessageSquare } from "react-icons/fi";
const cls = classNames.bind(style);
const TopPost = () => {
    return (
        <div className={cls("TopPost")}>
            <div className={cls("top_post")}>
                <img alt="" src="/image/metro.jpg" />
                <div className={cls("description_top_post")}>
                    <h3 className={cls("title_post")}>
                        Vị trí 22 phố đi bộ dự kiến mở ở TP HCM
                    </h3>
                    <p className={cls("description_post")}>
                        22 tuyến đường ở trung tâm TP HCM dự kiến được tổ chức
                        thành phố đi bộ trong ba năm tới, chia thành 7 tiểu khu
                        với đặc trưng riêng.
                    </p>
                    <div className={cls("meta-new")}>
                        <span>2h Trước</span>
                        <p>Video</p>
                    </div>
                </div>
            </div>
            <div className={cls("news_post")}>
                <Post
                    className={cls("content-new-post")}
                    title={"Leo thác chụp ảnh, hai thanh niên tử vong"}
                    location={"PHÚ YÊN"}
                    discription={
                        "Thanh niên 20 tuổi đi du lịch, leo thác ở thị xã Sông Cầu chụp hình, trượt chân rơi xuống nước, hai người bạn đi cùng nhảy xuống cứu bị nước cuốn."
                    }
                />
                <Post
                    className={cls("content-new-post")}
                    title={"Leo thác chụp ảnh, hai thanh niên tử vong"}
                    location={"PHÚ YÊN"}
                    discription={
                        "Thanh niên 20 tuổi đi du lịch, leo thác ở thị xã Sông Cầu chụp hình, trượt chân rơi xuống nước, hai người bạn đi cùng nhảy xuống cứu bị nước cuốn."
                    }
                />
                <p className={cls("dot")}></p>
                <div className={cls("look")}>
                    <span> Góc nhìn</span>
                    <h3>'Nhà em có một ông nội'</h3>
                    <p>
                        Văn mẫu là sản phẩm của nền giáo dục lỗi thời mà nếu
                        không dứt bỏ được, khó nói tới những cải cách, đổi mới
                        lớn hơn.
                    </p>
                    <div className={cls("info_author")}>
                        <div>
                            <p>Chu Thị Vân Anh</p>
                            <div className={cls("comment")}>
                                <FiMessageSquare />
                                <span>166</span>
                            </div>
                        </div>
                        <img alt="" src="/image/tacgia.png" />
                    </div>
                </div>
            </div>
            <p className={cls("strikethrough")}></p>
        </div>
    );
};

export default TopPost;

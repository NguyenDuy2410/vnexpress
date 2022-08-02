import React from "react";
import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import SubMenu from "./submenu/SubMenu";

const cls = classNames.bind(style);

const Menu = () => {
    return (
        <div className={cls("menu")}>
            <div className={cls("menu_icon_home")}>
                <AiOutlineHome />
            </div>
            <SubMenu
                title="Thời sự"
                subTitle={[
                    "Chính trị",
                    "Dân sinh",
                    "Lao động - Việc làm",
                    "Giao thông",
                    "Mekong",
                    "Quỹ hy vọng",
                ]}
            />
            <SubMenu
                title="Góc nhìn"
                subTitle={[
                    "Bình luận nhiều",
                    "Covid 19",
                    "Chính trị & chính sách",
                    "Y tế & sức khỏe",
                    "Kinh doanh & chính trị",
                    "Môi trường",
                    "Tác giả",
                ]}
            />
            <SubMenu
                title="Thế giới"
                subTitle={[
                    "Tư liệu",
                    "Phân tích",
                    "Người việt 5 châu",
                    "Quân sự",
                ]}
            />
            <SubMenu
                title="Video"
                subTitle={[
                    "Thời sự",
                    "Nhịp sống",
                    "Food",
                    "Tôi kể",
                    "Pháp luật",
                    "Giải trí",
                    "Thể thao",
                ]}
            />
            <SubMenu
                title="Podcasts"
                subTitle={[
                    "nexpress hôm nay",
                    "Họ nói gì",
                    "Hộp đen",
                    "Ly hôn",
                    "Thầm thì",
                ]}
            />
            <SubMenu
                title="Kinh doanh"
                subTitle={[
                    "Quốc tế",
                    "Doanh nghiệp",
                    "Chứng khoán",
                    "Bất động sản",
                ]}
            />
            <SubMenu
                title="khoa học"
                subTitle={[
                    "Khoa học trong nước",
                    "Tin tức",
                    "Phát minh",
                    "Ứng dụng",
                ]}
            />
            <SubMenu
                title="Giải trí"
                subTitle={["Giới sao", "Video", "Phim", "Nhạc"]}
            />
            <SubMenu title="Thể thao" subTitle={["Bóng đá", "Tenis"]} />
            <SubMenu title="Pháp luật" subTitle={["Hồ sơ phá án", "Video"]} />
            <SubMenu
                title="Giáo dục"
                subTitle={["Tin tức", "Tuyển sinh", "Du học"]}
            />
            <SubMenu
                title="Sức khỏa"
                subTitle={["Tin tức", "Tư vấn", "Dinh dưỡng"]}
            />
            <SubMenu title="Đời sống" subTitle={["Tin tức", "Tổ ấm", "Nhà"]} />
            <SubMenu
                title="Du lịch"
                subTitle={["Ẩm thực", "Điểm đến", "Dấu chân"]}
            />
            <div className={cls("all")}>
                <div>Tất cả</div>
                <span className={cls("hamburger")}></span>
            </div>
        </div>
    );
};

export default Menu;

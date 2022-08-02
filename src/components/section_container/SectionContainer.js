import React from "react";
import classNames from "classnames/bind";
import style from "./SectionContainer.module.scss";
import Container from "./container/Container";

const cls = classNames.bind(style);

const SectionContainer = () => {
    return (
        <div className={cls("section_container")}>
            <Container
                mainMenu="Du lịch"
                menu={[
                    "Điểm đến",
                    "Điểm đến",
                    "Ẩm thực",
                    "Dấu chân",
                    "Tư vấn",
                    "Cẩm nang",
                    "Ảnh",
                    "Ăn và chơi",
                    "Mở cửa du lịch",
                ]}
                items={[
                    {
                        image: "/image/sess1.jpg",
                        title: "Năm khu nghỉ cao cấp bên vịnh biển",
                        content:
                            "Du khách vừa được tận hưởng những tiện nghi đẳng cấp, vừa được ngắm vịnh biển nguyên sơ, thân thiện với thiên nhiên. ",
                    },
                    {
                        image: "/image/sess2.jpg",
                        title: "Gia đình trẻ rong ruổi Quy Nhơn - Phú Yên săn ảnh đẹp",
                        comment: 12,
                    },
                    {
                        image: "/image/sess3.jpg",
                        title: "Du khách đến Malaysia không cần khai thẻ nhập cảnh",
                    },
                    {
                        image: "/image/sess4.jpg",
                        title: "'Sở thú đêm Singapore không như mong đợi'",
                        comment: 12,
                    },
                    {
                        image: "/image/sess5.jpg",
                        title: "Lái xe máy chở mẹ phượt từ Đà Lạt tới Huế",
                        comment: 12,
                    },
                    {
                        image: "/image/sess6.jpg",
                        title: "Công ty có nhân viên cởi áo ở biển Cửa Lò gửi lời xin lỗi",
                        comment: 12,
                    },
                    {
                        image: "/image/sess7.jpg",
                        title: "Ninh Bình vào top điểm đến lên phim đẹp nhất châu Á",
                    },
                ]}
            />
            <Container
                mainMenu="Xe"
                menu={[
                    "Thị trường",
                    "Cầm lái",
                    "V-Car",
                    "Diễn đàn",
                    "Video",
                    "Cẩm nang mua xe",
                    "Thi bằng lái",
                    "Mua bán",
                ]}
                items={[
                    {
                        image: "/image/sess8.jpg",
                        title: "Honda Accord giảm giá gần 100 triệu đồng",
                        content:
                            "Mẫu sedan cỡ D đang được khuyến mãi khoảng 100 triệu đồng, gồm tiền mặt và bộ quà tặng phụ kiện.",
                    },
                    {
                        image: "/image/sess9.jpg",
                        title: "Loạt ôtô ra mắt khách Việt tháng 7",
                        comment: 12,
                    },
                    {
                        image: "/image/sess9.jpg",
                        title: "Xe tải vượt hàng ba trên quốc lộ",
                    },
                    {
                        image: "/image/sess10.jpg",
                        title: "Tiền thay pin ôtô điện đắt hơn mua xe",
                        comment: 12,
                    },
                    {
                        image: "/image/sess11.jpg",
                        title: "Đập phá ôtô đỗ chắn cửa nhà phạm tội gì?",
                    },
                    {
                        image: "/image/sess12.jpg",
                        title: "Nissan Navara NP300 bản E 2015 giá 420 triệu hợp lý?",
                    },
                    {
                        image: "/image/sess10.jpg",
                        title: "Tiền thay pin ôtô điện đắt hơn mua xe",
                        comment: 12,
                    },
                ]}
            />
            <Container
                mainMenu="Số hóa"
                menu={[
                    "Công nghệ",
                    "Sản phẩm",
                    "Blockchain",
                    "Tech Awards 2022",
                    "Startup",
                ]}
                items={[
                    {
                        image: "/image/sess13.jpg",
                        title: "Những người lạc quan giữa mùa đông tiền số",
                        content:
                            "Khi giá tiền số giảm hàng chục lần trong năm nay, ngày càng có sự chia rẽ giữa các nhà đầu tư tìm cách kiếm tiền và những người tin tưởng vào sứ mệnh của nó. ",
                    },
                    {
                        image: "/image/sess14.jpg",
                        title: "Elon Musk than bị 'bóp' tương tác",
                    },
                    {
                        image: "/image/sess15.png",
                        title: "Bắt đầu bình chọn máy lọc khí kiêm quạt không cánh",
                    },
                    {
                        image: "/image/sess16.jpg",
                        title: "Nghề streamer và cái giá cho sự nổi tiếng",
                        comment: 12,
                    },
                    {
                        image: "/image/sess17.jpg",
                        title: "7 loa di động siêu bền cho mùa du lịch",
                    },
                    {
                        image: "/image/sess18.jpg",
                        title: "Trải nghiệm cây lau nhà thông minh Dreame H12",
                    },
                    {
                        image: "/image/sess19.jpg",
                        title: "Màn hình luôn hiển thị trên iPhone hoạt động thế nào",
                        comment: 12,
                    },
                ]}
            />
        </div>
    );
};

export default SectionContainer;

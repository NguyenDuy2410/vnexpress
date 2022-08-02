import React from "react";
import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import { MdEmail } from "react-icons/md";
import { FaCreativeCommonsNcEu, FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const cls = classNames.bind(style);

const Footer = () => {
    return (
        <div className={cls("footer")}>
            <div className={cls("footer_top")}>
                <ul>
                    <li>
                        <a href="/">Trang chủ</a>
                    </li>
                    <li>
                        <a href="/">Video</a>
                    </li>
                    <li>
                        <a href="/">Podcasts</a>
                    </li>
                    <li>
                        <a href="/">Ảnh</a>
                    </li>
                    <li>
                        <a href="/">Inforgraphics</a>
                    </li>
                    <li className={cls("break")}></li>
                    <li>
                        <a href="/">Mới nhất</a>
                    </li>
                    <li>
                        <a href="/">Xem nhiều</a>
                    </li>
                    <li>
                        <a href="/">Tin nóng</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/">Thời sự</a>
                    </li>
                    <li>
                        <a href="/">Góc nhìn</a>
                    </li>
                    <li>
                        <a href="/">Thế giới</a>
                    </li>
                    <li>
                        <a href="/">Kinh doanh</a>
                    </li>
                    <li>
                        <a href="/">Giải trí</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/">Thể thao</a>
                    </li>
                    <li>
                        <a href="/">Pháp luật</a>
                    </li>
                    <li>
                        <a href="/">Giáo dục</a>
                    </li>
                    <li>
                        <a href="/">Sức khỏe</a>
                    </li>
                    <li>
                        <a href="/">Đời sống</a>
                    </li>
                    <li>
                        <a href="/">Du lịch</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/">Khoa học</a>
                    </li>
                    <li>
                        <a href="/">Số hóa</a>
                    </li>
                    <li>
                        <a href="/">Xe</a>
                    </li>
                    <li>
                        <a href="/">Ý kiến</a>
                    </li>
                    <li>
                        <a href="/">Tâm sự</a>
                    </li>
                </ul>
                <ul className={cls("last_menu")}>
                    <li>
                        <a href="/">Rao vặt</a>
                    </li>
                    <li>
                        <a href="/">Startup</a>
                    </li>
                    <li>
                        <a href="/">Mua ảng VnExpress</a>
                    </li>
                    <li>
                        <a href="/">Vhome</a>
                    </li>
                    <li>
                        <a href="/">eBox</a>
                    </li>
                    <li>
                        <a href="/">eWork</a>
                    </li>
                </ul>
                <div className={cls("meta")}>
                    <div className={cls("download")}>
                        <div>Tải ứng dụng</div>
                        <div>
                            <div>
                                <img src="/e.png" alt="" />
                                <span>VnExpress</span>
                            </div>
                            <div>
                                <img src="/e.png" alt="" />
                                <span>International</span>
                            </div>
                        </div>
                    </div>

                    <div className={cls("contact")}>
                        <div>Liên hệ</div>
                        <div>
                            <div>
                                <MdEmail />
                                <span>Tòa soạn</span>
                            </div>
                            <div>
                                <FaCreativeCommonsNcEu />
                                <span>Quảng cáo</span>
                            </div>
                            <div>
                                <FaCreativeCommonsNcEu />
                                <span>Hợp tác bản quyền</span>
                            </div>
                        </div>
                    </div>
                    <div className={cls("hotline")}>
                        <div>Đường dây nóng</div>
                        <div>
                            <div>
                                <div>083.888.0123</div>
                                <span>(Hà Nội)</span>
                            </div>
                            <div>
                                <div>082.233.3555</div>
                                <span>(TP. Hồ Chí Minh)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls("footer_center")}>
                <div className={cls("left")}>
                    <div>Báo điện tử</div>
                    <img src="/logo.svg" alt="" />
                </div>
                <div className={cls("right")}>
                    <div>RSS</div>
                    <div>Theo dõi VnExpress trên</div>
                    <FaFacebookF />
                    <AiFillYoutube />
                </div>
            </div>
            <div className={cls("footer_bottom")}>
                <div className={cls("left")}>
                    <div className={cls("title")}>
                        Báo tiếng Việt nhiều người xem nhất
                    </div>
                    <div>Thuộc Bộ Khoa học Công nghệ</div>
                    <div>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</div>
                </div>
                <div className={cls("center")}>
                    <div>Tổng biên tập: Phạm Hiếu</div>
                    <div>
                        Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy,
                        Hà Nội
                    </div>
                    <div>Điện thoại: 024 7300 8899 - máy lẻ 4500</div>
                </div>
                <div className={cls("right")}>
                    © 1997-2022. Toàn bộ bản quyền thuộc VnExpress
                </div>
            </div>
        </div>
    );
};

export default Footer;

import React from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import Menu from "./menu/Menu";

const cls = classNames.bind(style);

const Header = () => {
    return (
        <div className={cls("header")}>
            <div className={cls("header_top")}>
                <div className={cls("left")}>
                    <img src="/logo.svg" alt="" />
                    <div>Chủ nhật, 31/7/2022</div>
                </div>
                <div className={cls("right")}>
                    <div className={cls("new")}>
                        <AiOutlineClockCircle />
                        <span>Mới nhất</span>
                    </div>
                    <div className={cls("international")}>
                        <img src="/e.png" alt="" />
                        <span>International</span>
                    </div>
                    <form action="" className={cls("search")}>
                        <div className={cls("form_group")}>
                            <input type="text" placeholder="Tìm kiếm" />
                            <BsSearch />
                        </div>
                    </form>
                    <div className={cls("user")}>
                        <FaUserAlt />
                        <span>Đăng nhập</span>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    );
};

export default Header;

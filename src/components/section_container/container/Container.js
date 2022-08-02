import React from "react";
import classNames from "classnames/bind";
import style from "./Container.module.scss";
import { BiMessage } from "react-icons/bi";

const cls = classNames.bind(style);

const Container = ({ mainMenu, menu, items }) => {
    return (
        <div className={cls("container")}>
            <div className={cls("title")}>
                <div className={cls("main")}>{mainMenu}</div>
                {menu.map((value, index) => {
                    return <div key={index}>{value}</div>;
                })}
            </div>
            <div className={cls("content")}>
                <div className={cls("left")}>
                    <img src={items[0].image} alt="" />
                    <h2>{items[0].title}</h2>
                    <p>{items[0].content}</p>
                </div>

                <div className={cls("center")}>
                    <div>
                        <img src={items[1].image} alt="" />
                        <p>{items[1].title}</p>
                        {items[1].comment && (
                            <div>
                                <BiMessage />
                                {items[1].comment}
                            </div>
                        )}
                    </div>
                    <div>
                        <img src={items[2].image} alt="" />
                        <p>{items[2].title}</p>
                        {items[2].comment && (
                            <div>
                                <BiMessage />
                                {items[2].comment}
                            </div>
                        )}
                    </div>
                </div>

                <div className={cls("right")}>
                    <div className={cls("item")}>
                        <div className={cls("group")}>
                            <p>{items[3].title}</p>
                            {items[3].comment && (
                                <div>
                                    <BiMessage />
                                    {items[3].comment}
                                </div>
                            )}
                        </div>
                        <img src={items[3].image} alt="" />
                    </div>
                    <div className={cls("item")}>
                        <div className={cls("group")}>
                            <p>{items[4].title}</p>
                            {items[4].comment && (
                                <div>
                                    <BiMessage />
                                    {items[4].comment}
                                </div>
                            )}
                        </div>
                        <img src={items[4].image} alt="" />
                    </div>
                    <div className={cls("item")}>
                        <div className={cls("group")}>
                            <p>{items[5].title}</p>
                            {items[5].comment && (
                                <div>
                                    <BiMessage />
                                    {items[5].comment}
                                </div>
                            )}
                        </div>
                        <img src={items[5].image} alt="" />
                    </div>
                    <div className={cls("item")}>
                        <div className={cls("group")}>
                            <p>{items[6].title}</p>
                            {items[6].comment && (
                                <div>
                                    <BiMessage />
                                    {items[6].comment}
                                </div>
                            )}
                        </div>
                        <img src={items[6].image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;

import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ul className={isHovered ? "hovered" : ""}>
                <li>
                    <NavLink to="/bestProduct">
                        <img src="/assets/img/appleLogo.png" alt="" />
                    </NavLink>
                </li>
                <li>스토어</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>TV 및 홈</li>
                <li>엔터테인먼트</li>
                <li>엑세서리</li>
                <li>고객지원</li>
                <li>
                    <img src="/assets/img/search.png" alt="" />
                </li>
                <li>
                    <img src="/assets/img/shopping-cart.png" alt="" />
                </li>
            </ul>
            {isHovered && (
                <div className="hovered-content">
                    {[<li>Qyd</li>, <li>i</li>]}
                    <p>마우스 호버 상태입니다.</p>
                </div>
            )}
        </header>
    );
};

export default Header;

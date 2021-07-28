import React, { useState } from "react";
import {MenuOutlined, CloseOutlined} from "@ant-design/icons"
import "./Nav2.css";
import { Link } from "react-router-dom";

export default function Nav2(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 return(
    <nav>
        <div className="left">
            <div className="logo-container">
                <a href="/">
                    <h1>LOGO</h1>
                </a>
            </div>

            <ul >
                <li className="menu-item-left" onClick={closeMobileMenu}>
                    <Link to="/">Home</Link>
                </li>
                <li className="menu-item-left" onClick={closeMobileMenu}>
                    <Link to="/">About</Link>
                </li>
            </ul>

            <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="menu-item" onClick={closeMobileMenu}>
                    <Link to="/">Home</Link>
                </li>
                <li className="menu-item" onClick={closeMobileMenu}>
                    <Link to="/">About</Link>
                </li>
            </ul>
        </div>

        <div className="right">
            <ul >
                <li className="menu-item-right" onClick={closeMobileMenu}>
                    <Link to="/">Sign up</Link>
                </li>
                <li className="menu-item-right" onClick={closeMobileMenu}>
                    <Link to="/">Register</Link>
                </li>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                    <CloseOutlined />
                    ) : (
                    <MenuOutlined />
                    )}
                </div>
            </ul>
        </div>
    </nav>
 )}
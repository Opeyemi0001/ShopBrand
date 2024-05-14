import React, { useState } from "react";
import "./Navbar.css";
import Basket from "../../assets/Homepage/basket.png";
import identity from "../../assets/Homepage/Identity.png";
import selectArrow from "../../assets/Homepage/selectArrow.png";
import searchBar from "../../assets/Homepage/search_icon.png";
import navIcon from "../../assets/Homepage/NavIcon.png";
import searchIconBlack from "../../assets/Homepage/searchIconBlack.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <img className="navicon" src={navIcon} alt="" />
      <h1 className="logo">SHOP.CO</h1>
      <div className="navbar-menu">
        <ul className="menu-list">
          <Link to='/'
            onClick={() => setMenu("shop")}
            className={menu === "shop" ? "active" : ""}
          >
            Shop {menu === "shop" ? <img src={selectArrow} alt="" /> : null}{" "}
          </Link>
          <a href='#topselling'
            onClick={() => setMenu("on-sale")}
            className={menu === "on-sale" ? "active" : ""}
          >
            On sale {menu === "on-sale" ? <img src={selectArrow} alt="" /> : null}{" "}
          </a>
          <a href='#newarrivals'
            onClick={() => setMenu("new-arrivals")}
            className={menu === "new-arrivals" ? "active" : ""}
          >
            New Arrivals {menu === "new-arrivals" ? <img src={selectArrow} alt="" /> : null}{" "}
          </a>
          <a href='#partnerslogo'
            onClick={() => setMenu("brands")}
            className={menu === "brands" ? "active" : ""}
          >
            Brands{menu === "brands" ? <img src={selectArrow} alt="" /> : null}{" "}
          </a>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
            <img src={searchBar} alt="" />
          <input
            type="text"
            className="basketIcon"
            placeholder="Search for product.."
          />
        </div>
        <img className="searchicon" src={searchIconBlack} alt="" />
        <img src={Basket} alt="" />
        <img src={identity} alt="" />
      </div>
    </div>
  );
};

export default Navbar;

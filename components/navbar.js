import Link from "next/link";
import React, { useState } from "react";
import NavItem from "../components/nav-item.js";
import { Colors } from "chart.js";

const MENU_LIST = [
  { text: "Graph", href: "/" },
  { text: "</> Source Code", href: "https://github.com/justindhillon/place-vanier-line" },
  { text: "About Me", href: "https://placevanierline.vercel.app/record-time" },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 style={{color:"#2596be"}}>PlaceVanierLine</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

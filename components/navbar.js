import Link from "next/link";
import React, { useState } from "react";
import NavItem from "../components/nav-item.js";

const MENU_LIST = [
  { text: "Graph", href: "/" },
  { text: "</> Source Code", href: "https://github.com/justindhillon/place-vanier-line" },
  { text: "Twitter", href: "https://twitter.com/justindhillon0" },
  { text: "Email", href: "https://mail.google.com/mail/u/?authuser=justin.singh.dhillon@gmail.com" },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1>PlaceVanierLine</h1>
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

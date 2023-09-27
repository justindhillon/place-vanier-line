import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "</> Source Code", href: "https://github.com/justindhillon/place-vanier-rush-hour" },
  { text: "Twitter", href: "https://twitter.com/justindhillon0" },
  { text: "Gmail", href: "justin.singh.dhillon@gmail.com" },
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

"use client";
// Styles
import "./header.styles.scss";
// Public & Assets
import Logo from "../../components/svgs/logo.component.jsx";
// React/Next Functions
import Link from "next/link";
// Context & Actions

// Components
import Menu from "../../components/menu-partwidth/menu.component.jsx";
import MenuItem from "../../components/menu-partwidth/menu-item.component.jsx";
/*
INSTRUCTIONS
  variant           variant of menu (default is leftsettings-centerlogo-rightmenu)
            others: .leftlogo-rightmenu-rightsettings
*/
const Header = ({ variant = "leftsettings-centerlogo-rightmenu" }) => {
  if (variant === "leftsettings-centerlogo-rightmenu") {
    return (
      <header id="article-header" className={`${variant}`}>
        <div className="header-container-settings"></div>
        <div className="header-container-logo">
          <Link href="/">
            <Logo alt="Logo" id="logo-header" />
          </Link>
        </div>
        <div id="header-container-menu">
          <Menu location="right">
            <MenuItem content="‎ TEST ‎">
              <MenuItem content="TEST" href="/test"></MenuItem>
              <MenuItem content="TEST" href="/test"></MenuItem>
              <MenuItem content="TEST" href="/test"></MenuItem>
            </MenuItem>
            <MenuItem content="TEST">
              <MenuItem content="TEST" href="/test"></MenuItem>
              <MenuItem content="TEST" href="/test"></MenuItem>
              <MenuItem content="TEST" href="/test"></MenuItem>
            </MenuItem>
            <MenuItem content="TEST" href="/test" />
            <MenuItem content="TEST" href="/test" />
          </Menu>
        </div>
      </header>
    );
  } else if (variant === "leftlogo-rightmenu-rightsettings") {
    return (
      <header id="article-header" className={`${variant}`}>
        <div className="header-container-logo">
          <Link href="/">
            <Logo alt="Logo" id="logo-header" />
          </Link>
        </div>
        <div id="header-container-menu">
          <Menu location="right">
            <MenuItem content="‎ TEST ‎">
              <MenuItem content="TEST" href="/test"></MenuItem>
              <MenuItem content="TEST" href="/test"></MenuItem>
              <MenuItem content="TEST" href="/test"></MenuItem>
            </MenuItem>
            <MenuItem content="TEST">
              <MenuItem content="TEST" href="/test"></MenuItem>
              <MenuItem content="TEST" href="/test"></MenuItem>
              <MenuItem content="TEST" href="/test"></MenuItem>
            </MenuItem>
            <MenuItem content="TEST" href="/test" />
            <MenuItem content="TEST" href="/test" />
          </Menu>
        </div>
        <div className="header-container-settings"></div>
      </header>
    );
  } else {
    return (
      <header id="article-header" className={`${variant}`}>
        <h1>INVALID variant of HEADER</h1>
      </header>
    );
  }
};

export default Header;

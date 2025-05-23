"use client";
// Styles
import styles from "./header.module.scss";
// Public & Assets
import Logo from "@/components/svgs/logo.component.jsx";
// React/Next Functions
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
// Context & Actions

// Components
import { Menu, MenuItem } from "@/components/menu/menu.component.jsx";
import ColorThemeSwitch from "@/components/color-theme-switch/color-theme-switch.component";

/*
INSTRUCTIONS
  variant           variant of menu (default is leftsettingsCenterlogoRightmenu)
                    others: 
                      leftlogoRightmenuRightsettings
                      leftmenuCenterlogoRightsettings
  headerOption      define if and how header will act
                      0: header will be position static
                      1: header will be fixed and on scroll down dissapear
                      2: header will be fixed
  bgColor           color of background // MUST BE TRANSPARENT IF BACKDROPFILTER
  backdropFilter    backdropfilter apply to btnBg as var
  stylesForHeader   additional styles apply to header container
*/
const Header = ({
  variant = "leftsettingsCenterlogoRightmenu",
  headerOption = 0,
  bgColor = "rgb(from var(--color-background) r g b / 0.5)",
  backdropFilter = "blur(4px)",
  stylesForHeader = {},
}) => {
  const headerRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef();

  useEffect(() => {
    function setPaddingTopOfBody() {
      if ([1, 2].includes(headerOption)) {
        const heightOfHeader = headerRef.current.offsetHeight;
        document.body.style.paddingTop = `${heightOfHeader}px`;
      }
    }
    setPaddingTopOfBody();
    window.addEventListener("resize", setPaddingTopOfBody);
    return () => {
      window.removeEventListener("resize", setPaddingTopOfBody);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (headerOption !== 1) return; // Only apply logic for option 1

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerOption]);

  const renderMenu = (location) => {
    return (
      <Menu
        location={location}
        menuOption={2}
        headerOption={headerOption}
        paddingOfEachLinkBlock="10px 20px"
        headerOriginalBgColor={bgColor}
        ref={menuRef}
      >
        {/* <MenuItem content="‎ TEST ‎">
          <MenuItem content="TEST" href="/test"></MenuItem>
          <MenuItem content="TEST" href="/test"></MenuItem>
          <MenuItem content="TEST" href="/test"></MenuItem>
        </MenuItem> */}
        <MenuItem content="O mně" href="/o-mne" />
        {/* <MenuItem content="Portfolio" href="/portfolio" /> */}
        <MenuItem content="Služby" href="/sluzby" />
        <MenuItem content="Kontakt" href="/kontakt" />
      </Menu>
    );
  };

  const renderSettings = () => {
    return (
      <div className={`${styles.headerSettings}`}>
        <ColorThemeSwitch variant="third" />
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <Link
        href="/"
        aria-label="Navigovat na domovskou stránku"
        onClick={() => {
          menuRef.current?.handleLogoClick();
        }}
      >
        <Logo alt="Logo" id={`${styles.logoHeader}`} aria-label="Logo" />
      </Link>
    );
  };

  // returns based on variants
  if (variant === "leftsettingsCenterlogoRightmenu") {
    return (
      <header
        id={`${styles.articleHeader}`}
        ref={headerRef}
        className={`${styles[variant]} ${
          styles[
            headerOption === 0
              ? ""
              : headerOption === 1
              ? "fixedOnScrollUp"
              : headerOption === 2
              ? "fixedAllTime"
              : ""
          ]
        } ${styles[headerOption === 1 && isVisible ? "visible" : "hidden"]}`}
        style={{
          backgroundColor: `${bgColor}`,
          "--localBackdropFilter": `${backdropFilter}`,
          ...stylesForHeader,
        }}
      >
        <div className={`${styles.headerContainerSettings}`}>
          {renderSettings("left")}
        </div>
        <div className={`${styles.headerContainerLogo}`}>{renderLogo()}</div>
        <div id={`${styles.headerContainerMenu}`}>{renderMenu("right")}</div>
      </header>
    );
  } else if (variant === "leftlogoRightmenuRightsettings") {
    return (
      <header
        id={`${styles.articleHeader}`}
        ref={headerRef}
        className={`${styles[variant]} ${
          styles[
            headerOption === 0
              ? ""
              : headerOption === 1
              ? "fixedOnScrollUp"
              : headerOption === 2
              ? "fixedAllTime"
              : ""
          ]
        } ${styles[headerOption === 1 && isVisible ? "visible" : "hidden"]}`}
        style={{
          backgroundColor: `${bgColor}`,
          "--localBackdropFilter": `${backdropFilter}`,
          ...stylesForHeader,
        }}
      >
        <div className={`${styles.headerContainerLogo}`}>{renderLogo()}</div>
        <div id={`${styles.headerContainerMenu}`}>{renderMenu("right")}</div>
        <div className={`${styles.headerContainerSettings}`}>
          {renderSettings("right")}
        </div>
      </header>
    );
  } else if (variant === "leftmenuCenterlogoRightsettings") {
    return (
      <header
        id={`${styles.articleHeader}`}
        ref={headerRef}
        className={`${styles[variant]} ${
          styles[
            headerOption === 0
              ? ""
              : headerOption === 1
              ? "fixedOnScrollUp"
              : headerOption === 2
              ? "fixedAllTime"
              : ""
          ]
        } ${styles[headerOption === 1 && isVisible ? "visible" : "hidden"]}`}
        style={{
          backgroundColor: `${bgColor}`,
          "--localBackdropFilter": `${backdropFilter}`,
          ...stylesForHeader,
        }}
      >
        <div id={`${styles.headerContainerMenu}`}>{renderMenu("left")}</div>
        <div className={`${styles.headerContainerLogo}`}>{renderLogo()}</div>
        <div className={`${styles.headerContainerSettings}`}>
          {renderSettings("right")}
        </div>
      </header>
    );
  } else {
    return (
      <header
        id={`${styles.articleHeader}`}
        ref={headerRef}
        className={`${styles[variant]} ${
          styles[
            headerOption === 0
              ? ""
              : headerOption === 1
              ? "fixedOnScrollUp"
              : headerOption === 2
              ? "fixedAllTime"
              : ""
          ]
        } ${styles[headerOption === 1 && isVisible ? "visible" : "hidden"]}`}
        style={{
          backgroundColor: `${bgColor}`,
          "--localBackdropFilter": `${backdropFilter}`,
          ...stylesForHeader,
        }}
      >
        <h1>INVALID variant of HEADER</h1>
      </header>
    );
  }
};

export default Header;

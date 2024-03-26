"use client";
// Styles
import "./menu.styles.scss";
// React Functions
import { Children, cloneElement } from "react";
import { useState, useEffect } from "react";
/*
INSTRUCTIONS
  children                MenuItem components should be there (If MenuItem have more Menu items, it will create submenu, else it will be Link)
  location                define if menu is on the left or right side of the header
  menuInLine              define if menu can be inline (if there is eneugh space) (default true)
  fontSize                fontSize in px for mobile (it will be * by multiplier for desktop) (default set to var(--fontsize-h5))
  fontFamily              fontFamily (could be like var(--font-primary), if fonts are set in variables) (default set to var(--font-primary))
  paddingOfEachLinkBlock  defines padding of each link block (default set to "10px 10px 5px 10px")
*/
const Menu = ({
  children,
  location = "left",
  menuInLine = true,
  fontSize = "var(--fontsize-h5)",
  fontFamily = "var(--font-primary), sans-serif",
  paddingOfEachLinkBlock = "10px 10px 5px 10px",
  // paddingOfEachLinkBlock = "10px 10px 5px 10px",
}) => {
  // if menu is dropdown, this state have value if its active or not
  const [activeMenu, setActiveMenu] = useState(false);
  // width of container for left side of header, where should be only menu
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  // width of all links in row (of menu)
  const [widthOfAllLinks, setWidthOfAllLinks] = useState(0);
  // height of one link
  const [heightOfLink, setHeightOfLink] = useState(0);
  // menu will be dropdown (false) or inline (true)
  const [canBeInline, setCanBeInline] = useState(true);
  // update state widthOfContainer
  console.log(widthOfAllLinks, widthOfContainer);
  const updateWidthOfContainer = () => {
    try {
      const newWidth = document.getElementById(
        "header-container-menu"
      ).offsetWidth;
      setWidthOfContainer(newWidth);
    } catch (error) {}
  };
  // update state widthOfAllLinks
  const updateSizeOfLinks = () => {
    try {
      const listOfWidths = [];
      const listOfHeights = [];
      // find all inline items
      const listOfLinksInline = document.querySelectorAll(
        "#nav-inline .menu-inline > li"
      );
      for (let i = 0; i < listOfLinksInline.length; i++) {
        const width = listOfLinksInline[i].clientWidth;
        const height = listOfLinksInline[i].clientHeight;
        listOfWidths.push(width);
        listOfHeights.push(height);
      }
      if (typeof listOfWidths[0] !== "undefined") {
        const newWidth = listOfWidths.reduce((previousValue, curentValue) => {
          return previousValue + curentValue;
        }, listOfWidths.length * 10);
        const newHeight = Math.max(...listOfHeights);
        setWidthOfAllLinks(newWidth);
        setHeightOfLink(newHeight);
      }
    } catch (error) {}
  };
  // on initial load make listeners for resize that will call both func; updateWidthOfContainer & updateSizeOfLinks
  useEffect(() => {
    if (menuInLine) {
      window.addEventListener("resize", () => {
        updateWidthOfContainer();
        updateSizeOfLinks();
      });
      updateWidthOfContainer();
      updateSizeOfLinks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // if widthOfContainer or widthOfAllLinks change, setCanBeInline to equal value
  useEffect(() => {
    if (widthOfContainer >= widthOfAllLinks && menuInLine) {
      setCanBeInline(true);
    } else {
      setCanBeInline(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthOfContainer, widthOfAllLinks]);
  /* animation of menu icon & if activeMenu state is active, set state of menu
  and all submenus to false (func handleDisactiveMenu),
  if activeMenu state is false then set it to true */
  const handleMenuClick = () => {
    document
      .getElementsByClassName("menu-icon")
      .item(0)
      .classList.toggle("active");
    document
      .getElementsByClassName("line-1")
      .item(0)
      .classList.remove("no-animation");
    document
      .getElementsByClassName("line-2")
      .item(0)
      .classList.remove("no-animation");
    document
      .getElementsByClassName("line-3")
      .item(0)
      .classList.remove("no-animation");
    if (activeMenu === true) {
      setActiveMenu(false);
      disactiveSubmenus();
    } else {
      setActiveMenu(true);
    }
  };
  // If menu change to hamburger menu or oposite way, remove active submenu
  useEffect(() => {
    disactiveSubmenus();
  }, [canBeInline]);
  // Disactive active submenu
  const disactiveSubmenus = () => {
    const listOfSubmenus = document.getElementsByClassName("submenu-dropdown");
    for (let i = 0; i < listOfSubmenus.length; i++) {
      const element = listOfSubmenus[i];
      element.classList.remove("active");
    }
  };
  /* 
  canBeInline make everything suitable for both inline & dropdown options
  all submenu (ul) are generated inside of item (li) after text
  there are three types of onClick interactions (target another page, target id at actual page, dropdown submenu)
  */
  return (
    <nav
      id={`${canBeInline ? "nav-inline" : "nav-dropdown"}`}
      className={`${location === "right" ? "side-right" : "side-left"}`}
      style={{ fontFamily: `${fontFamily}`}}
      onClick={() => {
        !canBeInline && !activeMenu && handleMenuClick();
      }}
    >
      <div
        className="menu-icon"
        style={{ display: `${canBeInline ? "none" : "block"}` }}
        onClick={() => {
          activeMenu && handleMenuClick();
        }}
      >
        <div className="line-1 no-animation"></div>
        <div className="line-2 no-animation"></div>
        <div className="line-3 no-animation"></div>
      </div>
      <ul
        className={`${canBeInline ? "menu-inline" : "menu-dropdown"} ${
          activeMenu === true ? "active" : ""
        }`}
      >
        {Children.map(children, (child) => {
          return cloneElement(child, {
            fontSize: fontSize,
            paddingOfEachLinkBlock: paddingOfEachLinkBlock,
          });
        })}
      </ul>
    </nav>
  );
};

export default Menu;

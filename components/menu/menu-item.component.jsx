"use client";
import styles from "./menu.module.scss"
// React Functions
import { Children, cloneElement } from "react";
import Link from "next/link";

/*
INSTRUCTIONS
  children                  MenuItem components should be there (If MenuItem have more Menu items, it will create submenu, else it will be Link)
  content                   Text for MenuItem (Adjust spaces with this ‎)
  href                      Href, if MenuItem has more children dont use href in params, just content
  \/\/\/ These props are taken from Menu component (dont decalre in MenuItem) \/\/\/
  fontSize                  fontSize of text (default var(--fontsize-h5))
  paddingOfEachLinkBlock    defines padding of each link block (default set to "10px 10px 5px 10px")
*/
const MenuItem = ({
  children,
  content,
  href,
  fontSize,
  paddingOfEachLinkBlock,
  closeMenuFunction,
  openMenuFunction,
}) => {
  const handleSubmenuClick = (e) => {
    const listOfSubmenus = document.getElementsByClassName(styles.submenuDropdown);
    const activeSubmenu = [];
    const targetSubmenu = e.target.querySelector(`.${styles.submenuDropdown}`);
    for (let i = 0; i < listOfSubmenus.length; i++) {
      const element = listOfSubmenus[i];
      if (element.classList.contains(styles.active)) {
        activeSubmenu.push(element);
      }
      element.classList.remove(styles.active);
    }
    if (activeSubmenu[0] !== targetSubmenu && targetSubmenu) {
      targetSubmenu.classList.add(styles.active);
      openMenuFunction()
    }
  };
  return (
    <li>
      {href ? (
        <Link
          className={styles.itemLinkElement}
          href={href}
          style={{ padding: paddingOfEachLinkBlock, fontSize: fontSize }}
          onClick={closeMenuFunction}
        >
          {content}
        </Link>
      ) : (
        <span
          className={styles.itemLinkElement}
          onClick={(e) => {
            handleSubmenuClick(e);
          }}
          style={{ padding: paddingOfEachLinkBlock, fontSize: fontSize }}
        >
          {content}
          <ul className={`${styles.submenuDropdown}`}>
            {Children.map(children, (child) => {
              return cloneElement(child, {
                fontSize: fontSize,
                paddingOfEachLinkBlock: paddingOfEachLinkBlock,
                closeMenuFunction: closeMenuFunction,
              });
            })}
          </ul>
        </span>
      )}
    </li>
  );
};

export default MenuItem;

"use client";
// Styles
import styles from "./color-theme-switch.module.scss";
// Public & Assets
import LightThemeIcon from "../svgs/theme-icons/light.component";
import DarkThemeIcon from "../svgs/theme-icons/dark.component";
// Next Functions

// React Functions
import { useState, useEffect } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

// Create btn that will change color theme of website
const ColorThemeSwitch = () => {
  // Use local storage for theme persistence
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Retrieve initial theme from local storage, defaulting to 'light'
    var storedTheme;
    try {
      storedTheme = localStorage.getItem("theme");
    } catch (error) {}
    if (storedTheme) {
      console.log("storedTheme", storedTheme);
      if (storedTheme === "dark") {
        console.log("x");
        return true;
      } else {
        return false;
      }
    } else {
      var prefersDarkTheme;
      try {
        prefersDarkTheme =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
      } catch (error) {}
      console.log("prefersDarkTheme", prefersDarkTheme);
      if (prefersDarkTheme) {
        return true;
      } else {
        return false;
      }
    }
  });
  useEffect(() => {
    console.log(isDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    if (isDarkTheme) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    // <div
      // id={`${styles.themeSwitch}`}
      // aria-label="{languageDict.article_header.buttons.button_themes_aria_label}"
    // >
      // {/* <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} /> */}
      <button id={`${styles.themeSwitch}`} className={`${isDarkTheme ? styles.dark : styles.light}`} onClick={toggleTheme}>
        <LightThemeIcon className={styles.lightIcon} />
        <DarkThemeIcon className={styles.darkIcon} />
      </button>
    // {/* </div> */}
  );
};

export default ColorThemeSwitch;

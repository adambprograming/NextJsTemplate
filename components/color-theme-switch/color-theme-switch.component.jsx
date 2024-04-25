"use client";
// Styles
// import './buttons-settings.styles.scss'
// Public & Assets
// import IconDay from "../../public/theme_day.svg";
// import IconNight from "../../public/theme_night.svg";
// Next Functions
import Image from "next/image";
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
      } catch (error) {
        
      }
      if (storedTheme) {
        console.log("storedTheme", storedTheme);
        if (storedTheme === "dark") {
          console.log('x');
          return true;
        } else {
          return false;
        }
      } else {
        var prefersDarkTheme;
        try {
          prefersDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (error) {
          
        }
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
  }, [isDarkTheme])
  

  return (
    <label className="switch" aria-label="{languageDict.article_header.buttons.button_themes_aria_label}">
        <input type="checkbox" checked={isDarkTheme} onChange={() => {setIsDarkTheme(!isDarkTheme)}}/>
        {/* <span className="slider"></span> */}
        {/* <Image className='left-icon-btn' src={IconDay} alt="{languageDict.article_header.buttons.icon_light_theme_alt}" /> */}
        {/* <Image className='right-icon-btn' src={IconNight} alt="{languageDict.article_header.buttons.icon_dark_theme_alt}" /> */}
    </label>
  );
};

export default ColorThemeSwitch;

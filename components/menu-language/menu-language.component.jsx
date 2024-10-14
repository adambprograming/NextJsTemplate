"use client";
import styles from "./menu-language.module.scss";
// Public & Assets
import FlagOfCs from "../../public/flags/Flag_of_the_Czech_Republic.png";
import FlagOfSk from "../../public/flags/Flag_of_Slovakia.png";
import FlagOfUk from "../../public/flags/Flag_of_the_United_Kingdom.png";
import FlagOfDe from "../../public/flags/Flag_of_Germany.png";
import FlagOfPl from "../../public/flags/Flag_of_Poland.png";
import FlagOfHu from "../../public/flags/Flag_of_Hungary.png";
// React/Next Functions
import { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// Context & Actions
import { LanguageContext } from "@/context/lang.context";
// Components

/*
INSTRUCTIONS
  In styles it needs to be changed width of both spans to optimal ch
*/
const MenuLanguage = ({
  iconOnly = false,
  variant = "first",
  languages = [],
  fontSize = "14px",
  fontFamily = "var(--font-secondary)",
  paddingOfBtn,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguageName, setSelectedLanguageName] = useState("Česky");
  const [selectedFlagTag, setSelectedFlagTag] = useState(FlagOfCs);
  const { setLanguage, language } = useContext(LanguageContext);
  // Get other parts of pathname then language (locale)
  const pathname = usePathname().split("/").slice(2).join("/");
  const router = useRouter();
  // ref for menu
  const langMenuRef = useRef(null);
  // func to handle click outside of menu and all child - if menu active, close it
  const handleClickOutside = (event) => {
    if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
      if (langMenuRef.current.getElementsByClassName(styles.active)) {
        closeLangMenuFunction();
      }
    }
  };
  const closeLangMenuFunction = () => {
    setDropdownOpen(false)
  };
  // Listener for mouseClick
  useEffect(() => {
    // Add event listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSelectedLanguageName(
      chooseLanguageNameOrFlagTagByTag(language, "langName")
    );
    setSelectedFlagTag(chooseLanguageNameOrFlagTagByTag(language, "flagTag"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chooseLanguageNameOrFlagTagByTag = (languageTag, result) => {
    if (result === "flagTag") {
      switch (languageTag) {
        case "cs":
          return FlagOfCs;
        case "en":
          return FlagOfUk;
        case "sk":
          return FlagOfSk;
        case "de":
          return FlagOfDe;
        case "pl":
          return FlagOfPl;
        case "hu":
          return FlagOfHu;
      }
    } else {
      switch (languageTag) {
        case "cs":
          return "Česky";
        case "sk":
          return "Slovensky";
        case "en":
          return "English";
        case "de":
          return "Deutsch";
        case "pl":
          return "Polski";
        case "hu":
          return "Magyar";
      }
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleLanguageChange = (languageTag, languageName, flagTag) => {
    setLanguage(languageTag);
    setSelectedLanguageName(languageName);
    setSelectedFlagTag(flagTag);
    setDropdownOpen(false);
    // redirect to new URL without re-render
    router.push(`/${languageTag}/${pathname}`);
    // You can add logic here to handle language change, such as updating the global state or triggering language-related actions.
  };

  return (
    <div
      id={`${styles.menuLanguage}`}
      className={`${
        variant === "first"
          ? styles.firstVariant
          : variant === "second"
          ? styles.secondVariant
          : variant === "third"
          ? styles.thirdVariant
          : styles.firstVariant
      }`}
      ref={langMenuRef}
    >
      <button
        onClick={toggleDropdown}
        className={`${styles.menuToggle}`}
        style={{
          padding: `${paddingOfBtn}`,
        }}
      >
        <Image src={selectedFlagTag} alt="Flag of choiced country" />
        {!iconOnly && (
          <span
            style={{
              fontSize: `${fontSize}`,
              fontFamily: `${fontFamily}`,
            }}
          >
            {selectedLanguageName}
          </span>
        )}
      </button>

      <div
        className={`${styles.menuDropdown} ${
          isDropdownOpen ? styles.active : ""
        }`}
      >
        {selectedLanguageName !== "Česky" && languages.includes("cs") && (
          <button
            onClick={() => handleLanguageChange("cs", "Česky", FlagOfCs)}
            style={{
              padding: `${paddingOfBtn}`,
            }}
          >
            <Image src={FlagOfCs} alt="Flag of Czech" />
            {!iconOnly && (
              <span
                style={{
                  fontSize: `${fontSize}`,
                  fontFamily: `${fontFamily}`,
                }}
              >
                Česky
              </span>
            )}
          </button>
        )}
        {selectedLanguageName !== "Slovensky" && languages.includes("sk") && (
          <button
            onClick={() => handleLanguageChange("sk", "Slovensky", FlagOfSk)}
            style={{
              padding: `${paddingOfBtn}`,
            }}
          >
            <Image src={FlagOfSk} alt="Flag of Slovakia" />
            {!iconOnly && (
              <span
                style={{
                  fontSize: `${fontSize}`,
                  fontFamily: `${fontFamily}`,
                }}
              >
                Slovensky
              </span>
            )}
          </button>
        )}
        {selectedLanguageName !== "English" && languages.includes("en") && (
          <button
            onClick={() => handleLanguageChange("en", "English", FlagOfUk)}
            style={{
              padding: `${paddingOfBtn}`,
            }}
          >
            <Image src={FlagOfUk} alt="Flag of United Kingdom" />
            {!iconOnly && (
              <span
                style={{
                  fontSize: `${fontSize}`,
                  fontFamily: `${fontFamily}`,
                }}
              >
                English
              </span>
            )}
          </button>
        )}
        {selectedLanguageName !== "Deutsch" && languages.includes("de") && (
          <button
            onClick={() => handleLanguageChange("de", "Deutsch", FlagOfDe)}
            style={{
              padding: `${paddingOfBtn}`,
            }}
          >
            <Image src={FlagOfDe} alt="Flag of Germany" />
            {!iconOnly && (
              <span
                style={{
                  fontSize: `${fontSize}`,
                  fontFamily: `${fontFamily}`,
                }}
              >
                Deutsch
              </span>
            )}
          </button>
        )}
        {selectedLanguageName !== "Polski" && languages.includes("pl") && (
          <button
            onClick={() => handleLanguageChange("pl", "Polski", FlagOfPl)}
            style={{
              padding: `${paddingOfBtn}`,
            }}
          >
            <Image src={FlagOfPl} alt="Flag of Poland" />
            {!iconOnly && (
              <span
                style={{
                  fontSize: `${fontSize}`,
                  fontFamily: `${fontFamily}`,
                }}
              >
                Polski
              </span>
            )}
          </button>
        )}
        {selectedLanguageName !== "Magyar" && languages.includes("hu") && (
          <button
            onClick={() => handleLanguageChange("hu", "Magyar", FlagOfHu)}
            style={{
              padding: `${paddingOfBtn}`,
            }}
          >
            <Image src={FlagOfHu} alt="Flag of Hungary" />
            {!iconOnly && (
              <span
                style={{
                  fontSize: `${fontSize}`,
                  fontFamily: `${fontFamily}`,
                }}
              >
                Magyar
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuLanguage;

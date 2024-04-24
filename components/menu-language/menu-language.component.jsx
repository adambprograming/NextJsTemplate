"use client";
import "./menu-language.styles.scss";
// Public & Assets
import FlagOfCz from "../../public/flags/Flag_of_the_Czech_Republic.png";
import FlagOfSk from "../../public/flags/Flag_of_Slovakia.png";
import FlagOfUk from "../../public/flags/Flag_of_the_United_Kingdom.png";
import FlagOfDe from "../../public/flags/Flag_of_Germany.png";
import FlagOfPl from "../../public/flags/Flag_of_Poland.png";
import FlagOfHu from "../../public/flags/Flag_of_Hungary.png";
// React/Next Functions
import { useState, useContext, useEffect } from "react";
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
  languages = [],
  fontSize = "var(--fontsize-h6)",
  fontFamily = "var(--font-secondary)",
  paddingOfBtn = "auto",
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguageName, setSelectedLanguageName] = useState("English");
  const [selectedFlagTag, setSelectedFlagTag] = useState(FlagOfUk);
  const { setLanguage, language } = useContext(LanguageContext);
  // Get other parts of pathname then language ('cz'/'en')
  const pathname = usePathname().split("/").slice(2);
  const router = useRouter()

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
        case "cz":
          return FlagOfCz;
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
        case "cz":
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
    <div id="menu-language">
      <button onClick={toggleDropdown} className="menu-toggle" style={{
        padding: `${paddingOfBtn}`,
      }} >
        <Image src={selectedFlagTag} alt="Flag of choiced country" />
        <span style={{
          fontSize: `${fontSize}`,
          fontFamily: `${fontFamily}`
        }} >{selectedLanguageName}</span>
      </button>

      <div className={`menu-dropdown ${isDropdownOpen ? "active" : ""}`}>
        {selectedLanguageName !== "Česky" && languages.includes("cz") && (
          <button onClick={() => handleLanguageChange("cz", "Česky", FlagOfCz)} style={{
            padding: `${paddingOfBtn}`,
          }} >
            <Image src={FlagOfCz} alt="Flag of Czech" />
            <span style={{
              fontSize: `${fontSize}`,
              fontFamily: `${fontFamily}`
            }} >Česky</span>
          </button>
        )}
        {selectedLanguageName !== "Slovensky" && languages.includes("sk") && (
          <button onClick={() => handleLanguageChange("sk", "Slovensky", FlagOfSk)} style={{
            padding: `${paddingOfBtn}`,
          }} >
            <Image src={FlagOfSk} alt="Flag of Slovakia" />
            <span style={{
              fontSize: `${fontSize}`,
              fontFamily: `${fontFamily}`
            }} >Slovensky</span>
          </button>
        )}
        {selectedLanguageName !== "English" && languages.includes("en") && (
          <button
            onClick={() => handleLanguageChange("en", "English", FlagOfUk)} style={{
              padding: `${paddingOfBtn}`,

            }} 
          >
            <Image src={FlagOfUk} alt="Flag of United Kingdom" />
            <span style={{
              fontSize: `${fontSize}`,
              fontFamily: `${fontFamily}`
            }} >English</span>
          </button>
        )}
        {selectedLanguageName !== "Deutsch" && languages.includes("de") && (
          <button onClick={() => handleLanguageChange("de", "Deutsch", FlagOfDe)} style={{
            padding: `${paddingOfBtn}`,
          }} >
            <Image src={FlagOfDe} alt="Flag of Germany" />
            <span style={{
              fontSize: `${fontSize}`,
              fontFamily: `${fontFamily}`
            }} >Deutsch</span>
          </button>
        )}
        {selectedLanguageName !== "Polski" && languages.includes("pl") && (
          <button onClick={() => handleLanguageChange("pl", "Polski", FlagOfPl)} style={{
            padding: `${paddingOfBtn}`,
          }} >
            <Image src={FlagOfPl} alt="Flag of Poland" />
            <span style={{
              fontSize: `${fontSize}`,
              fontFamily: `${fontFamily}`
            }} >Polski</span>
          </button>
        )}
        {selectedLanguageName !== "Magyar" && languages.includes("hu") && (
          <button onClick={() => handleLanguageChange("hu", "Magyar", FlagOfHu)} style={{
            padding: `${paddingOfBtn}`,
          }} >
            <Image src={FlagOfHu} alt="Flag of Hungary" />
            <span style={{
              fontSize: `${fontSize}`,
              fontFamily: `${fontFamily}`
            }} >Magyar</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuLanguage;

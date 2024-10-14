"use client";
// React Functions
import { createContext, useState, useEffect } from "react";
// Databases
import cs from "../locales/cs.json";
import en from "../locales/en.json";
// Choose Language Dict
const chooseLanguageDict = (lang) => {
  if (lang == "cs") {
    return cs;
  } else {
    return en;
  }
};
// Create Context
export const LanguageContext = createContext({
  language: "",
  languageDict: {},
});
// Create Provider with props from RootLayout = lang, bcs of first load
export const LanguageProvider = ({ children, lang }) => {
  // Declere language ('cz'/'en')
  const [language, setLanguage] = useState(lang);
  // Declare language dict
  const [languageDict, setLanguageDict] = useState(chooseLanguageDict(lang));

  // Redeclere language dict everytime language change
  useEffect(() => {
    setLanguageDict(chooseLanguageDict(language));
  }, [language]);

  const value = { languageDict, setLanguage, language };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

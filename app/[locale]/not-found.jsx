"use client";
// Styles

// Public & Assets

// React/Next Functions
import { useContext } from "react";
// Context & Actions
import { LanguageContext } from "@/context/lang.context";
// Componenets
import Btn from "@/components/btn/btn.component";

export default function NotFound() {
  const { languageDict, language } = useContext(LanguageContext);
  return (
    <div
      style={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "var(--color-background)",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: 0 }}>404: {languageDict.notFound.title}</h1>
      <p style={{ margin: 0 }}>
        {languageDict.notFound.msg}
      </p>
      <Btn
        href={`/${language}`}
        fontFamily="var(--font-secondary)"
        fontSize="var(--fontsize-h6)"
        borderRadius="25px"
        bgColor="var(--color-secondary)"
        opacity={0.2}
        paddingOfBtn="8px 16px"
      >
        {languageDict.notFound.btn}
      </Btn>
    </div>
  );
}

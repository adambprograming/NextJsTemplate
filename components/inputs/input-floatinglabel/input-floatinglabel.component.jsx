"use client";
// Styles
import styles from "./input-floatinglabel.module.scss";
// Public & Assets

// React/Next Functions
import { useState } from "react";
// Context & Actions

// Componenets

const InputFloatingLabel = ({
  label,
  name,
  type = "text",
  value,
  ref,
  onChange,
  onBlur,
  fontSize,
  fontFamily,
  borderRadius = "0px",
  borderSize = "1px",
  borderColor = "var(--black-100)",
  paddingOfBtn = "10px 20px",
  widthInput,
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(value !== "");
    onBlur;
  };
  return (
    <fieldset className={styles.inputFloatinglabel} >
      <label
        htmlFor={name}
        style={{
          fontSize: `${fontSize}`,
          fontFamily: `${fontFamily}`,
          padding: `${paddingOfBtn}`,
        }}
        className={isActive ? `${styles.active}` : ""}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
        style={{
          fontSize: `${fontSize}`,
          borderRadius: `${borderRadius}`,
          fontFamily: `${fontFamily}`,
          width: `${widthInput}`,
          border: `${borderSize} solid ${borderColor}`,
          padding: `${paddingOfBtn}`,
        }}
      />
    </fieldset>
  );
};

export default InputFloatingLabel;

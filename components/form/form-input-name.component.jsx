"use client";
// Styles
import styles from "./form.module.scss";
// Public & Assets
import IconInfoCircle from "../svgs/info-circle.component";
// React/Next Functions
import { useState, useEffect } from "react";
// Context & Actions

// Componenets

/*
INSTRUCTIONS

*/

const FormInputName = ({
  value,
  label,
  isRequired = false,
  isDisabled,
  functionOnChange,
  functionOnBlur,
  functionOnFocus,
  functionOnKeyDown,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsActive(value !== "" && value !== null && value !== undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (e) => {
    setIsActive(value !== "" && value !== null && value !== undefined);
    !isValid && validateInputName(e);
    functionOnChange && functionOnChange(e);
  };

  const handleBlur = (e) => {
    setIsActive(value !== "" && value !== null && value !== undefined);
    validateInputName(e);
    functionOnBlur && functionOnBlur(e);
  };

  const handleFocus = (e) => {
    setIsActive(true);
    functionOnFocus && functionOnFocus(e);
  };

  const handleKeyDown = (e) => {
    functionOnKeyDown && functionOnKeyDown(e);
  };

  const validateInputName = (e) => {
    const phonePattern = /^[0-9]{2,12}$/;
    const value = e.target.value;

    if (!phonePattern.test(value)) {
      console.log("bad");
      
      setIsValid(false);
    } else {
      console.log("good");
      setIsValid(true);
    }
  };

  return (
    <fieldset className={`${styles.inputContainer}`}>
      {label && (
        <label
          htmlFor="form-input-name"
          style={{
            fontSize: `${fontSize}`,
            fontFamily: `${fontFamily}`,
            padding: `${paddingOfBtn}`,
          }}
          className={isActive ? `${styles.active}` : ""}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        name="form-input-name"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        required={isRequired}
        onInvalid={(e) => {
          e.target.setCustomValidity("Vyplňte prosím Vaše jméno.");
        }}
        disabled={isDisabled}
        // style={{
        //   fontSize: `${fontSize}`,
        //   borderRadius: `${borderRadius}`,
        //   fontFamily: `${fontFamily}`,
        //   width: `${width}`,
        //   border: `${borderSize} solid ${borderColor}`,
        //   padding: `${paddingOfBtn}`,
        //   backgroundColor: `${bgColor}`,
        // }}
      ></input>
      <IconInfoCircle />
    </fieldset>
  );
};

export default FormInputName;

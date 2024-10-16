"use client";
// Styles
import styles from "./form.module.scss";
// Public & Assets
import IconInfoCircle from "../svgs/info-circle.component";
// React/Next Functions
import { useState } from "react";
// Context & Actions

// Componenets

/*
INSTRUCTIONS

*/

const FormInputName = ({ value, onChange }) => {

  const validateInputName = (e) => {
    const phonePattern = /^[0-9]{9,12}$/;
    const value = e.target.value;

    if (!phonePattern.test(value)) {
      setError("Phone must be between 9 and 12 digits");
    } else {
      setError("");
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        // id="name"
        name="name"
        // value={value}
        // onChange={onChange}
        formNoValidate={false}
        onBlur={validateInputName}
      />
    <IconInfoCircle />
    </div>
  );
};

export default FormInputName;

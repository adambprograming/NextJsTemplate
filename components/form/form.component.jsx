"use client";
// Styles
import styles from "./form.module.scss";
// Public & Assets

// React/Next Functions
import { useRef } from "react";
// Context & Actions

// Componenets

/*
INSTRUCTIONS

*/

export const Form = ({ children, onSubmit }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form className={`${styles.form}`} ref={formRef} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

/*
ROW
Should be used if more items should be in one row
*/

export const FormRow = ({ children }) => {
  return <div className={`${styles.formRow}`}>{children}</div>;
};

/*
BTN Submit
Final submit button
*/

export const FormBtnSubmit = () => {
  return (
    <button type="submit" className={styles.submitBtn}>
      Submit
    </button>
  );
};

"use client";
// Styles
import styles from "./form.module.scss";
// Public & Assets
import IconInfoCircle from "../svgs/info-circle.component";
// React/Next Functions
import { Children, cloneElement, useState } from "react";
import { useRef } from "react";
// Context & Actions

// Componenets



/*
FORM
#0F0
*/
/*

TODO    Form should have action

INSTRUCTIONS
    children                            Child element
    onSubmit                            what should happen on submit
    fontSizeOfInputsAndBtnsForm         style attribute for every input, btn and label - can be overwritten individauly for each input/btn element by setting fontSizeInput there
    fontSizeOfLabelsForm                style attribute for every label - can be overwritten individauly for each label element by setting fontSizeLabel there
    fontFamilyOfInputsAndBtnsForm       style attribute for every input, btn and label - can be overwritten individauly for each input/btn/label element by setting fontFamily there
    borderRadiusOfInputsAndBtnsForm     style attribute for every input, btn and label - can be overwritten individauly for each input/btn/label element by setting borderRadius there
    borderSizeOfInputsAndBtnsForm       style attribute for every input, btn and label - can be overwritten individauly for each input/btn/label element by setting borderSize there
    borderColorOfInputsAndBtnsForm      style attribute for every input, btn and label - can be overwritten individauly for each input/btn/label element by setting borderColor there
    bgColorOfInputsAndBtnsForm          style attribute for every input, btn and label - can be overwritten individauly for each input/btn/label element by setting bgColor there
    paddingOfInputsAndBtnsForm          style attribute for every input, btn and label - can be overwritten individauly for each input/btn/label element by setting padding there
*/

export const Form = ({
  children,
  onSubmit,
  fontSizeOfInputsAndBtnsForm = "var(--fontsize-h6)",
  fontSizeOfLabelsForm = "var(--fontsize-small)",
  fontWeightOfLabelForm = "700",
  fontFamilyOfInputsAndBtnsForm = "var(--font-secondary)",
  borderRadiusOfInputsAndBtnsForm = "0px",
  borderSizeOfInputsAndBtnsForm = "2px",
  borderColorOfInputsAndBtnsForm = "var(--black-100)",
  bgColorOfInputsAndBtnsForm = "var(--color-text-reverse)",
  paddingOfInputsAndBtnsForm = "10px 20px",
}) => {
  const [isValid, setIsValid] = useState(true);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsetEls = [...document.getElementsByClassName(`${styles.formFieldsetName}`)]

    const hasNotValidClass = allFieldsetEls.filter(fieldset =>
      fieldset.classList.contains(`${styles.notValid}`)
    ).length > 0 ? true : false;

    if (hasNotValidClass) {
      console.log('NOT VALID');
    } else {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);
      onSubmit(data);
    }
  };

  return (
    <form className={`${styles.form}`} ref={formRef} onSubmit={handleSubmit}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          fontSizeOfInputsAndBtnsForm: fontSizeOfInputsAndBtnsForm,
          fontSizeOfLabelsForm: fontSizeOfLabelsForm,
          fontWeightOfLabelForm: fontWeightOfLabelForm,
          fontFamilyOfInputsAndBtnsForm: fontFamilyOfInputsAndBtnsForm,
          paddingOfInputsAndBtnsForm: paddingOfInputsAndBtnsForm,
          borderRadiusOfInputsAndBtnsForm: borderRadiusOfInputsAndBtnsForm,
          borderSizeOfInputsAndBtnsForm: borderSizeOfInputsAndBtnsForm,
          borderColorOfInputsAndBtnsForm: borderColorOfInputsAndBtnsForm,
          bgColorOfInputsAndBtnsForm: bgColorOfInputsAndBtnsForm,
        });
      })}
    </form>
  );
};

/*
TITLE
#0F0
*/

export const FormTitle = ({ children }) => {
  return <h2 className={`${styles.formTitle}`}>{children}</h2>;
};

/*
ROW
Should be used if more items should be in one row
#0F0
*/

export const FormRow = ({
  children,
  fontSizeOfInputsAndBtnsForm,
  fontSizeOfLabelsForm,
  fontWeightOfLabelForm,
  fontFamilyOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  bgColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
}) => {
  return (
    <div className={`${styles.formRow}`}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          fontSizeOfInputsAndBtnsForm: fontSizeOfInputsAndBtnsForm,
          fontSizeOfLabelsForm: fontSizeOfLabelsForm,
          fontWeightOfLabelForm: fontWeightOfLabelForm,
          fontFamilyOfInputsAndBtnsForm: fontFamilyOfInputsAndBtnsForm,
          paddingOfInputsAndBtnsForm: paddingOfInputsAndBtnsForm,
          borderRadiusOfInputsAndBtnsForm: borderRadiusOfInputsAndBtnsForm,
          borderSizeOfInputsAndBtnsForm: borderSizeOfInputsAndBtnsForm,
          borderColorOfInputsAndBtnsForm: borderColorOfInputsAndBtnsForm,
          bgColorOfInputsAndBtnsForm: bgColorOfInputsAndBtnsForm,
        });
      })}
    </div>
  );
};

/*
BTN Submit
Final submit button 
#0F0
*/

export const FormBtnSubmit = () => {
  return (
    <button type="submit" className={styles.submitBtn}>
      Submit
    </button>
  );
};

/*
INPUT Name
#0F0
*/

/*
INSTRUCTIONS
  label                                   fill either label or placeholder
  placeholder                             fill either label or placeholder
  isRequired                              true if required field (can submit without this field empty)
  isDisabled                              
  functionOnChange                        
  functionOnBlur                          
  functionOnFocus                         
  functionOnKeyDown                       
  width = "100%"                          
  fontSizeOfInputsAndBtnsForm             
  fontSizeOfLabelsForm                    
  fontWeightOfLabelForm                   
  fontFamilyOfInputsAndBtnsForm           
  borderRadiusOfInputsAndBtnsForm         
  borderSizeOfInputsAndBtnsForm           
  borderColorOfInputsAndBtnsForm          
  bgColorOfInputsAndBtnsForm              
  paddingOfInputsAndBtnsForm              
  fontSizeInput                           
  fontSizeLabel                           
  fontWeightLabel                         
  fontFamily                              
  borderRadius                            
  borderSize                              
  borderColor                             
  bgColor                                 
  padding                                 
*/

export const FormInputName = ({
  label,
  placeholder,
  isRequired = false,
  isDisabled,
  functionOnChange,
  functionOnBlur,
  functionOnFocus,
  functionOnKeyDown,
  width = "100%",
  hintText = "Vyplňte prosím Vaše jméno.",
  fontSizeOfInputsAndBtnsForm,
  fontSizeOfLabelsForm,
  fontWeightOfLabelForm,
  fontFamilyOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  bgColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  fontSizeInput = "",
  fontSizeLabel = "",
  fontWeightLabel = "",
  fontFamily = "",
  borderRadius = "",
  borderSize = "",
  borderColor = "",
  bgColor = "",
  padding = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    // setIsActive(value !== "" && value !== null && value !== undefined) && e.target === document.activeElement;
    !isValid && validateInputName(e);
    functionOnChange && functionOnChange(e);
  };

  const handleBlur = (e) => {
    const value = e.target.value;
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
    <fieldset className={`${styles.formFieldsetName} ${isValid ? "" : styles.notValid}`} style={{boxShadow: `${isValid ? "" : "0 0 2.5px var(--color-error)"}`, borderRadius: `${borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm}`}}>
      {label && (
        <label
          htmlFor="form-input-name"
          style={{
            fontSize: `${fontSizeLabel ? fontSizeLabel : fontSizeOfLabelsForm}`,
            fontWeight: `${fontWeightLabel ? fontWeightLabel : fontWeightOfLabelForm}`,
            fontFamily: `${fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsForm}`,
            padding: `5px 10px`,
            backgroundColor: `${bgColor ? bgColor : bgColorOfInputsAndBtnsForm}`,
          }}
          className={`${styles.formLabelName} ${isActive ? `${styles.active}` : ""}`}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        name="form-input-name"
        className={`${styles.formInputName}`}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        required={isRequired}
        onInvalid={(e) => {
          e.target.setCustomValidity("Vyplňte prosím Vaše jméno.");
        }}
        disabled={isDisabled}
        style={{
          fontSize: `${fontSizeInput ? fontSizeInput : fontSizeOfInputsAndBtnsForm}`,
          borderRadius: `${borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm}`,
          fontFamily: `${fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsForm}`,
          width: `${width}`,
          border: `${borderSize ? borderSize : borderSizeOfInputsAndBtnsForm} solid ${!isValid ? "var(--color-error)" : borderColor ? borderColor : borderColorOfInputsAndBtnsForm}`,
          padding: `${padding ? padding : paddingOfInputsAndBtnsForm}`,
          backgroundColor: `${bgColor ? bgColor : bgColorOfInputsAndBtnsForm}`,
        }}
      ></input>
      {hintText && 
        <>
          <IconInfoCircle className={`${styles.hintIcon}`} />
          <span className={`${styles.hintText}`}>{hintText}</span>
        </>
      }
    </fieldset>
  );
};


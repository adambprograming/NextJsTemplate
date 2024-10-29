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
#F0F
*/

/*
INSTRUCTIONS
  children                                        Child element
  onSubmit                                        what should happen on submit
  styleOfLabels                                   can contain floating, above or none (defines style of labels across form)
  fontSizeOfLabelsForm                            style attribute for every label - can be overwritten individauly for each label element by setting fontSizeLabel there
  fontWeightOfLabelsForm                          style attribute for every label - can be overwritten individauly for each label element by setting fontWeightLabel there
  textColorOfLabelsForm                           style attribute for every label - can be overwritten individauly for each label element by setting textColorLabel there
  paddingOfLabelsForm                             style attribute for every label - can be overwritten individauly for each label element by setting paddingLabel there
  fontSizeOfInputsAndBtnsForm                     style attribute for every input and btn - can be overwritten individauly for each input/btn element by setting fontSizeInput or fontSizeBtn there
  fontWeightOfInputsAndBtnsForm                   style attribute for every input and btn - can be overwritten individauly for each input/btn element by setting fontWeightInput or fontWeightBtn there
  textColorOfInputsAndBtnsForm                    style attribute for every input and btn - can be overwritten individauly for each input/btn element by setting textColorInput or textColorBtn there
  paddingOfInputsAndBtnsForm                      style attribute for every input and btn - can be overwritten individauly for each input/btn element by setting paddingInput or paddingBtn there
  borderRadiusOfInputsAndBtnsForm                 style attribute for every input and btn - can be overwritten individauly for each input/btn element by setting borderRadius there
  borderSizeOfInputsAndBtnsForm                   style attribute for every input and btn - can be overwritten individauly for each input/btn element by setting borderSize there
  borderColorOfInputsAndBtnsForm                  style attribute for every input and btn - can be overwritten individauly for each input/btn element by setting borderColor there
  fontFamilyOfInputsAndBtnsAndLabelsForm          style attribute for every input, btn and label - can be overwritten individauly for each input/btn/label element by setting fontFamily there
  bgColorOfInputsAndBtnsAndLabelsForm             style attribute for every input, btn and label - can be overwritten individauly for each input/btn/label element by setting bgColor there
*/

export const Form = ({
  children,
  onSubmit,
  styleOfLabels = "above",
  fontSizeOfLabelsForm = "var(--fontsize-small)",
  fontWeightOfLabelsForm = "400",
  textColorOfLabelsForm = "var(--shadow-75)",
  paddingOfLabelsForm = "5px 10px",
  fontSizeOfInputsAndBtnsForm = "var(--fontsize-small)",
  fontWeightOfInputsAndBtnsForm = "400",
  textColorOfInputsAndBtnsForm = "var(--color-text)",
  paddingOfInputsAndBtnsForm = "10px 20px",
  borderRadiusOfInputsAndBtnsForm = "5px",
  borderSizeOfInputsAndBtnsForm = "1px",
  borderColorOfInputsAndBtnsForm = "var(--color-border)",
  fontFamilyOfInputsAndBtnsAndLabelsForm = "var(--font-secondary)",
  bgColorOfInputsAndBtnsAndLabelsForm = "var(--color-background)",
}) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsetEls = [
      ...document.getElementsByClassName(`${styles.formFieldset}`),
    ];

    allFieldsetEls.forEach((fieldset) => {
      const input = fieldset.querySelector("input"); // Get the input element
      if (input) {
        // Ensure there's an input element
        input.focus();
        input.blur();
      }
    });
    setTimeout(() => {
      const hasNotValidClass =
        allFieldsetEls.filter((fieldset) =>
          fieldset.classList.contains(`${styles.notValid}`)
        ).length > 0
          ? true
          : false;

      if (hasNotValidClass) {
        const firstInvalidFieldset = allFieldsetEls.filter((fieldset) =>
          fieldset.classList.contains(`${styles.notValid}`)
        )[0];
        if (firstInvalidFieldset) {
          const firstInput = firstInvalidFieldset.querySelector("input");
          if (firstInput) {
            firstInput.focus();
            firstInput.select();
          }
        }
      } else {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        console.log(data);

        onSubmit(data);
      }
    }, 0);
  };

  return (
    <form
      className={`${styles.form}`}
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate={true}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, {
          styleOfLabels: styleOfLabels,
          fontSizeOfLabelsForm: fontSizeOfLabelsForm,
          fontWeightOfLabelsForm: fontWeightOfLabelsForm,
          textColorOfLabelsForm: textColorOfLabelsForm,
          paddingOfLabelsForm: paddingOfLabelsForm,
          fontSizeOfInputsAndBtnsForm: fontSizeOfInputsAndBtnsForm,
          fontWeightOfInputsAndBtnsForm: fontWeightOfInputsAndBtnsForm,
          textColorOfInputsAndBtnsForm: textColorOfInputsAndBtnsForm,
          paddingOfInputsAndBtnsForm: paddingOfInputsAndBtnsForm,
          borderRadiusOfInputsAndBtnsForm: borderRadiusOfInputsAndBtnsForm,
          borderSizeOfInputsAndBtnsForm: borderSizeOfInputsAndBtnsForm,
          borderColorOfInputsAndBtnsForm: borderColorOfInputsAndBtnsForm,
          fontFamilyOfInputsAndBtnsAndLabelsForm:
            fontFamilyOfInputsAndBtnsAndLabelsForm,
          bgColorOfInputsAndBtnsAndLabelsForm:
            bgColorOfInputsAndBtnsAndLabelsForm,
        });
      })}
    </form>
  );
};

/*
TITLE
#F0F
*/

/*
INSTRUCTIONS
  children                    Child element
  css                         styles (can set all css here), exemple - css={{backgroundColor: "red"}}
*/

export const FormTitle = ({ children, css }) => {
  return (
    <h2
      className={`${styles.formTitle}`}
      style={{
        ...css,
      }}
    >
      {children}
    </h2>
  );
};

/*
ROW
Should be used if more items should be in one row
#F0F
*/

export const FormRow = ({
  children,
  styleOfLabels,
  fontSizeOfLabelsForm,
  fontWeightOfLabelsForm,
  textColorOfLabelsForm,
  paddingOfLabelsForm,
  fontSizeOfInputsAndBtnsForm,
  fontWeightOfInputsAndBtnsForm,
  textColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  fontFamilyOfInputsAndBtnsAndLabelsForm,
  bgColorOfInputsAndBtnsAndLabelsForm,
}) => {
  return (
    <div className={`${styles.formRow}`}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          styleOfLabels: styleOfLabels,
          fontSizeOfLabelsForm: fontSizeOfLabelsForm,
          fontWeightOfLabelsForm: fontWeightOfLabelsForm,
          textColorOfLabelsForm: textColorOfLabelsForm,
          paddingOfLabelsForm: paddingOfLabelsForm,
          fontSizeOfInputsAndBtnsForm: fontSizeOfInputsAndBtnsForm,
          fontWeightOfInputsAndBtnsForm: fontWeightOfInputsAndBtnsForm,
          textColorOfInputsAndBtnsForm: textColorOfInputsAndBtnsForm,
          paddingOfInputsAndBtnsForm: paddingOfInputsAndBtnsForm,
          borderRadiusOfInputsAndBtnsForm: borderRadiusOfInputsAndBtnsForm,
          borderSizeOfInputsAndBtnsForm: borderSizeOfInputsAndBtnsForm,
          borderColorOfInputsAndBtnsForm: borderColorOfInputsAndBtnsForm,
          fontFamilyOfInputsAndBtnsAndLabelsForm:
            fontFamilyOfInputsAndBtnsAndLabelsForm,
          bgColorOfInputsAndBtnsAndLabelsForm:
            bgColorOfInputsAndBtnsAndLabelsForm,
        });
      })}
    </div>
  );
};

/*
BTN Submit
Final submit button 
#F0F
*/

/*
INSTRUCTIONS 
  fontSize              (*)fontSize in px (* multiplier)
  fontFamily            (*)fontFamily (could be like var(--font-primary), if fonts are set in variables)
  borderRadius          (*)borderRadius (default set to 0px)
  borderHoverRadius     (6)its new radius of btn
  borderSize            (*)size of border (default set to 1px)
  borderColor           (*)color of border
  bgColor               (*)color of background
  textColor             (*)color of text
  opacity               (*)opacity of button background (default set to 1.0)
  padding               (*)padding will be aplied if fontSize is not defined
  width                 (*)width of element
  display               (*)display of content
  backdropFilter        (*)backdropfilter apply to btnBg as var
  filter                (*)filter apply to btn as var
  bgHoverColor          (*)background hover color
  bgHoverBorderRadius   (2,3,4,5)border radius for hovering bg (::before)
  textHoverColor        (*)text hover color
  hoverEffect           (*)hover effect (choose from preset of effects)
                          1: bgHover (transition of bgHoverColor)
                          2: cfLeft (color fill left) (slide bgHoverColorFrom left with changing textHoverColor (if declared))
                          3: cfRight (color fill right) (slide bgHoverColorFrom right with changing textHoverColor (if declared))
                          4: cfBottom (color fill bottom) (slide bgHoverColorFrom bottom with changing textHoverColor (if declared))
                          5: cfTop (color fill top) (slide bgHoverColorFrom top with changing textHoverColor (if declared))
                          6: brc (border radius change) (border radius of btn change to borderHoverRadius)
                          7: scaleForward (scale forward) (Btn will scale forward little bit (1.15))
                          8: scaleBackward (scale backward) (Btn will scale backward little bit (1.15))
*/

export const FormBtnSubmit = ({
  children = "Odeslat",
  fontSizeOfInputsAndBtnsForm,
  fontWeightOfInputsAndBtnsForm,
  textColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  fontFamilyOfInputsAndBtnsAndLabelsForm,
  bgColorOfInputsAndBtnsAndLabelsForm,
  fontSize = "",
  fontWeight = "500",
  textColor = "var(--color-text-reverse)",
  padding = "",
  borderRadius = "",
  borderSize = "",
  borderColor = "",
  fontFamily = "",
  bgColor = "var(--color-secondary)",
  textHoverColor = "var(--color-text)",
  borderHoverRadius = "",
  bgHoverBorderRadius = "",
  bgHoverColor = "var(--color-ascent)",
  opacity = 1,
  width = "",
  backdropFilter = "",
  filter = "",
  hoverEffect = "bgHover",
}) => {
  return (
    <button
      className={`${styles.formBtnSubmit} ${styles[hoverEffect]}`}
      type="submit"
      style={{
        "--localBorderHoverRadius": `${borderHoverRadius}`,
        borderRadius: `${
          borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm
        }`,
        border: `${
          borderSize ? borderSize : borderSizeOfInputsAndBtnsForm
        } solid ${borderColor ? borderColor : borderColorOfInputsAndBtnsForm}`,
        width: `${width}`,
        "--localFilter": `${filter}`,
      }}
    >
      <span
        className={`${styles.btnBg}`}
        style={{
          "--localBgColor": `${
            bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
          }`,
          opacity: `${opacity}`,
          "--localBackdropFilter": `${backdropFilter}`,
          "--localBgHoverColor": `${bgHoverColor}`,
          "--localBgHoverBorderRadius": `${bgHoverBorderRadius}`,
        }}
      ></span>
      <span
        className={`${styles.btnText}`}
        style={{
          "--localTextColor": `${
            textColor ? textColor : textColorOfInputsAndBtnsForm
          }`,
          "--localTextHoverColor": `${
            textHoverColor
              ? textHoverColor
              : textColor
              ? textColor
              : textColorOfInputsAndBtnsForm
          }`,
          fontSize: `${fontSize ? fontSize : fontSizeOfInputsAndBtnsForm}`,
          fontWeight: `${
            fontWeight ? fontWeight : fontWeightOfInputsAndBtnsForm
          }`,
          color: `${textColor ? textColor : textColorOfInputsAndBtnsForm}`,
          padding: `${padding ? padding : paddingOfInputsAndBtnsForm}`,
          fontFamily: `${
            fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
          }`,
        }}
      >
        {children}
      </span>
    </button>
  );
};

/*
INPUT Name
#F0F
*/

/*
INSTRUCTIONS
  label                                   fill either label or placeholder
  placeholder                             fill either label or placeholder
  isRequired                              true if required field (can't submit without this field filled)
  isRequiredStar                          if true, show red start next to label (default true)
  isDisabled                              true if input is disabled
  functionOnChange                        function that proceed onChange
  functionOnBlur                          function that proceed onBlur
  functionOnFocus                         function that proceed onFocus
  functionOnKeyDown                       function that proceed onKeyDown
  minWidth                                minWidth of fieldset element (default to 200px) - if space, it take full width
  flex                                    flex of fieldset (default is "1 1 25%" - if two in same row with this default, it will be 50/50 until wrapped bcs of minWidth) 
  fontSizeLabel                           style attribute for input that overwrite fontSizeOfLabelsForm  
  fontWeightLabel                         style attribute for input that overwrite fontWeightOfLabelsForm  
  textColorLabel                          style attribute for input that overwrite textColorOfLabelsForm  
  paddingLabel                            style attribute for input that overwrite paddingOfLabelsForm  
  fontSizeInput                           style attribute for input that overwrite fontSizeOfInputsAndBtnsForm  
  fontWeightInput                         style attribute for input that overwrite fontWeightOfInputsAndBtnsForm  
  textColorInput                          style attribute for input that overwrite textColorOfInputsAndBtnsForm  
  paddingInput                            style attribute for input that overwrite paddingOfInputsAndBtnsForm  
  borderRadius                            style attribute for input that overwrite borderRadiusOfInputsAndBtnsForm  
  borderSize                              style attribute for input that overwrite borderSizeOfInputsAndBtnsForm  
  borderColor                             style attribute for input that overwrite borderColorOfInputsAndBtnsForm  
  fontFamily                              style attribute for input that overwrite fontFamilyOfInputsAndBtnsAndLabelsForm  
  bgColor                                 style attribute for input that overwrite bgColorOfInputsAndBtnsAndLabelsForm  
*/

export const FormInputName = ({
  label,
  placeholder = "Uveďte Vaše jméno",
  isRequired = false,
  isRequiredStar = true,
  isDisabled,
  functionOnChange,
  functionOnBlur,
  functionOnFocus,
  functionOnKeyDown,
  minWidth = "200px",
  flex = "1 1 25%",
  hintText = "Jméno musí obsahovat 2 až 30 znaků a může obsahovat pouze písmena, mezery a pomlčky.",
  styleOfLabels,
  fontSizeOfLabelsForm,
  fontWeightOfLabelsForm,
  textColorOfLabelsForm,
  paddingOfLabelsForm,
  fontSizeOfInputsAndBtnsForm,
  fontWeightOfInputsAndBtnsForm,
  textColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  fontFamilyOfInputsAndBtnsAndLabelsForm,
  bgColorOfInputsAndBtnsAndLabelsForm,
  fontSizeLabel = "",
  fontWeightLabel = "",
  textColorLabel = "",
  paddingLabel = "",
  fontSizeInput = "",
  fontWeightInput = "",
  textColorInput = "",
  paddingInput = "",
  borderRadius = "",
  borderSize = "",
  borderColor = "",
  fontFamily = "",
  bgColor = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    // setIsActive(value !== "" && value !== null && value !== undefined) && e.target === document.activeElement;
    !isValid && validateInput(e);
    functionOnChange && functionOnChange(e);
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setIsActive(value !== "" && value !== null && value !== undefined);
    validateInput(e);
    functionOnBlur && functionOnBlur(e);
  };

  const handleFocus = (e) => {
    setIsActive(true);
    functionOnFocus && functionOnFocus(e);
  };

  const handleKeyDown = (e) => {
    functionOnKeyDown && functionOnKeyDown(e);
  };

  const validateInput = (e) => {
    if (isRequired || (!isRequired && e.target.value)) {
      const namePattern = /^[a-zA-ZěščřžýáíéúůóďťňĚŠČŘŽÝÁÍÉÚŮÓĎŤŇ\s'-]{2,30}$/;
      const value = e.target.value;
      if (!namePattern.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      if (!isValid) {
        setIsValid(true);
      }
    }
  };

  return (
    <fieldset
      className={`${styles.formFieldset} ${styles.formFieldsetName} ${
        isValid ? "" : styles.notValid
      }`}
      style={{
        marginTop: `${styleOfLabels === "floating" ? "1.5rem" : "0"}`,
        minWidth: `${minWidth}`,
        flex: `${flex}`,
      }}
    >
      {label && styleOfLabels !== "none" && (
        <label
          htmlFor="name"
          style={{
            fontSize: `${fontSizeLabel ? fontSizeLabel : fontSizeOfLabelsForm}`,
            fontWeight: `${
              fontWeightLabel ? fontWeightLabel : fontWeightOfLabelsForm
            }`,
            color: `${textColorLabel ? textColorLabel : textColorOfLabelsForm}`,
            padding: `${paddingLabel ? paddingLabel : paddingOfLabelsForm}`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
          className={`${styles.formLabelName} ${
            isActive ? `${styles.active}` : ""
          } ${styles[styleOfLabels]}`}
        >
          {label}
          {isRequired && isRequiredStar && (
            <span className={`${styles.requiredStar}`}> *</span>
          )}
        </label>
      )}
      <div className={`${styles.inputContainer}`}>
        <input
          type="text"
          name="name"
          maxLength={30}
          className={`${styles.formInputName}`}
          placeholder={styleOfLabels !== "floating" ? placeholder : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          required={isRequired}
          // onInvalid={(e) => {
          // e.target.setCustomValidity("Vyplňte prosím Vaše jméno.");
          // }}
          // onInput={(e) => e.target.setCustomValidity("")}
          disabled={isDisabled}
          style={{
            fontSize: `${
              fontSizeInput ? fontSizeInput : fontSizeOfInputsAndBtnsForm
            }`,
            fontWeight: `${
              fontWeightInput ? fontWeightInput : fontWeightOfInputsAndBtnsForm
            }`,
            color: `${
              textColorInput ? textColorInput : textColorOfInputsAndBtnsForm
            }`,
            padding: `${
              paddingInput ? paddingInput : paddingOfInputsAndBtnsForm
            }`,
            borderRadius: `${
              borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm
            }`,
            border: `${
              borderSize ? borderSize : borderSizeOfInputsAndBtnsForm
            } solid ${
              !isValid
                ? "var(--color-error)"
                : borderColor
                ? borderColor
                : borderColorOfInputsAndBtnsForm
            }`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
        ></input>
        {hintText && !isValid && (
          <>
            <IconInfoCircle
              className={`${styles.hintIcon}`}
              style={{ fill: `${isValid ? "" : "var(--color-error)"}` }}
            />
            <span className={`${styles.hintText}`}>{hintText}</span>
          </>
        )}
      </div>
    </fieldset>
  );
};

/*
INPUT Surname
#F0F
*/

/*
INSTRUCTIONS
  label                                   fill either label or placeholder
  placeholder                             fill either label or placeholder
  isRequired                              true if required field (can't submit without this field filled)
  isRequiredStar                          if true, show red start next to label (default true)
  isDisabled                              true if input is disabled
  functionOnChange                        function that proceed onChange
  functionOnBlur                          function that proceed onBlur
  functionOnFocus                         function that proceed onFocus
  functionOnKeyDown                       function that proceed onKeyDown
  minWidth                                minWidth of fieldset element (default to 200px) - if space, it take full width
  flex                                    flex of fieldset (default is "1 1 25%" - if two in same row with this default, it will be 50/50 until wrapped bcs of minWidth) 
  fontSizeLabel                           style attribute for input that overwrite fontSizeOfLabelsForm  
  fontWeightLabel                         style attribute for input that overwrite fontWeightOfLabelsForm  
  textColorLabel                          style attribute for input that overwrite textColorOfLabelsForm  
  paddingLabel                            style attribute for input that overwrite paddingOfLabelsForm  
  fontSizeInput                           style attribute for input that overwrite fontSizeOfInputsAndBtnsForm  
  fontWeightInput                         style attribute for input that overwrite fontWeightOfInputsAndBtnsForm  
  textColorInput                          style attribute for input that overwrite textColorOfInputsAndBtnsForm  
  paddingInput                            style attribute for input that overwrite paddingOfInputsAndBtnsForm  
  borderRadius                            style attribute for input that overwrite borderRadiusOfInputsAndBtnsForm  
  borderSize                              style attribute for input that overwrite borderSizeOfInputsAndBtnsForm  
  borderColor                             style attribute for input that overwrite borderColorOfInputsAndBtnsForm  
  fontFamily                              style attribute for input that overwrite fontFamilyOfInputsAndBtnsAndLabelsForm  
  bgColor                                 style attribute for input that overwrite bgColorOfInputsAndBtnsAndLabelsForm  
*/

export const FormInputSurname = ({
  label,
  placeholder = "Uveďte Vaše příjmení",
  isRequired = false,
  isRequiredStar = true,
  isDisabled,
  functionOnChange,
  functionOnBlur,
  functionOnFocus,
  functionOnKeyDown,
  minWidth = "200px",
  flex = "1 1 25%",
  hintText = "Příjmení musí obsahovat 2 až 35 znaků a může obsahovat pouze písmena, mezery a pomlčky.",
  styleOfLabels,
  fontSizeOfLabelsForm,
  fontWeightOfLabelsForm,
  textColorOfLabelsForm,
  paddingOfLabelsForm,
  fontSizeOfInputsAndBtnsForm,
  fontWeightOfInputsAndBtnsForm,
  textColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  fontFamilyOfInputsAndBtnsAndLabelsForm,
  bgColorOfInputsAndBtnsAndLabelsForm,
  fontSizeLabel = "",
  fontWeightLabel = "",
  textColorLabel = "",
  paddingLabel = "",
  fontSizeInput = "",
  fontWeightInput = "",
  textColorInput = "",
  paddingInput = "",
  borderRadius = "",
  borderSize = "",
  borderColor = "",
  fontFamily = "",
  bgColor = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    // setIsActive(value !== "" && value !== null && value !== undefined) && e.target === document.activeElement;
    !isValid && validateInput(e);
    functionOnChange && functionOnChange(e);
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setIsActive(value !== "" && value !== null && value !== undefined);
    validateInput(e);
    functionOnBlur && functionOnBlur(e);
  };

  const handleFocus = (e) => {
    setIsActive(true);
    functionOnFocus && functionOnFocus(e);
  };

  const handleKeyDown = (e) => {
    functionOnKeyDown && functionOnKeyDown(e);
  };

  const validateInput = (e) => {
    if (isRequired || (!isRequired && e.target.value)) {
      const surnamePattern =
        /^[a-zA-ZěščřžýáíéúůóďťňĚŠČŘŽÝÁÍÉÚŮÓĎŤŇ\s'-]{2,35}$/;
      const value = e.target.value;
      if (!surnamePattern.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      if (!isValid) {
        setIsValid(true);
      }
    }
  };

  return (
    <fieldset
      className={`${styles.formFieldset} ${styles.formFieldsetSurname} ${
        isValid ? "" : styles.notValid
      }`}
      style={{
        marginTop: `${styleOfLabels === "floating" ? "1.5rem" : "0"}`,
        minWidth: `${minWidth}`,
        flex: `${flex}`,
      }}
    >
      {label && styleOfLabels !== "none" && (
        <label
          htmlFor="surname"
          style={{
            fontSize: `${fontSizeLabel ? fontSizeLabel : fontSizeOfLabelsForm}`,
            fontWeight: `${
              fontWeightLabel ? fontWeightLabel : fontWeightOfLabelsForm
            }`,
            color: `${textColorLabel ? textColorLabel : textColorOfLabelsForm}`,
            padding: `${paddingLabel ? paddingLabel : paddingOfLabelsForm}`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
          className={`${styles.formLabelSurname} ${
            isActive ? `${styles.active}` : ""
          } ${styles[styleOfLabels]}`}
        >
          {label}
          {isRequired && isRequiredStar && (
            <span className={`${styles.requiredStar}`}> *</span>
          )}
        </label>
      )}
      <div className={`${styles.inputContainer}`}>
        <input
          type="text"
          name="surname"
          maxLength={35}
          className={`${styles.formInputSurname}`}
          placeholder={styleOfLabels !== "floating" ? placeholder : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          required={isRequired}
          // onInvalid={(e) => {
          // e.target.setCustomValidity("Vyplňte prosím Vaše příjmení.");
          // }}
          // onInput={(e) => e.target.setCustomValidity("")}
          disabled={isDisabled}
          style={{
            fontSize: `${
              fontSizeInput ? fontSizeInput : fontSizeOfInputsAndBtnsForm
            }`,
            fontWeight: `${
              fontWeightInput ? fontWeightInput : fontWeightOfInputsAndBtnsForm
            }`,
            color: `${
              textColorInput ? textColorInput : textColorOfInputsAndBtnsForm
            }`,
            padding: `${
              paddingInput ? paddingInput : paddingOfInputsAndBtnsForm
            }`,
            borderRadius: `${
              borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm
            }`,
            border: `${
              borderSize ? borderSize : borderSizeOfInputsAndBtnsForm
            } solid ${
              !isValid
                ? "var(--color-error)"
                : borderColor
                ? borderColor
                : borderColorOfInputsAndBtnsForm
            }`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
        ></input>
        {hintText && !isValid && (
          <>
            <IconInfoCircle
              className={`${styles.hintIcon}`}
              style={{ fill: `${isValid ? "" : "var(--color-error)"}` }}
            />
            <span className={`${styles.hintText}`}>{hintText}</span>
          </>
        )}
      </div>
    </fieldset>
  );
};

/*
INPUT Phone
#F0F
*/

/*
INSTRUCTIONS
  label                                   fill either label or placeholder
  placeholder                             fill either label or placeholder
  isRequired                              true if required field (can't submit without this field filled)
  isRequiredStar                          if true, show red start next to label (default true)
  isDisabled                              true if input is disabled
  functionOnChange                        function that proceed onChange
  functionOnBlur                          function that proceed onBlur
  functionOnFocus                         function that proceed onFocus
  functionOnKeyDown                       function that proceed onKeyDown
  minWidth                                minWidth of fieldset element (default to 200px) - if space, it take full width
  flex                                    flex of fieldset (default is "1 1 25%" - if two in same row with this default, it will be 50/50 until wrapped bcs of minWidth) 
  fontSizeLabel                           style attribute for input that overwrite fontSizeOfLabelsForm  
  fontWeightLabel                         style attribute for input that overwrite fontWeightOfLabelsForm  
  textColorLabel                          style attribute for input that overwrite textColorOfLabelsForm  
  paddingLabel                            style attribute for input that overwrite paddingOfLabelsForm  
  fontSizeInput                           style attribute for input that overwrite fontSizeOfInputsAndBtnsForm  
  fontWeightInput                         style attribute for input that overwrite fontWeightOfInputsAndBtnsForm  
  textColorInput                          style attribute for input that overwrite textColorOfInputsAndBtnsForm  
  paddingInput                            style attribute for input that overwrite paddingOfInputsAndBtnsForm  
  borderRadius                            style attribute for input that overwrite borderRadiusOfInputsAndBtnsForm  
  borderSize                              style attribute for input that overwrite borderSizeOfInputsAndBtnsForm  
  borderColor                             style attribute for input that overwrite borderColorOfInputsAndBtnsForm  
  fontFamily                              style attribute for input that overwrite fontFamilyOfInputsAndBtnsAndLabelsForm  
  bgColor                                 style attribute for input that overwrite bgColorOfInputsAndBtnsAndLabelsForm  
*/

export const FormInputPhone = ({
  label,
  placeholder = "Uveďte Vaše telefonní číslo",
  isRequired = false,
  isRequiredStar = true,
  isDisabled,
  functionOnChange,
  functionOnBlur,
  functionOnFocus,
  functionOnKeyDown,
  minWidth = "200px",
  flex = "1 1 25%",
  hintText = "Telefonní číslo musí obsahovat 7 až 15 číslic.",
  styleOfLabels,
  fontSizeOfLabelsForm,
  fontWeightOfLabelsForm,
  textColorOfLabelsForm,
  paddingOfLabelsForm,
  fontSizeOfInputsAndBtnsForm,
  fontWeightOfInputsAndBtnsForm,
  textColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  fontFamilyOfInputsAndBtnsAndLabelsForm,
  bgColorOfInputsAndBtnsAndLabelsForm,
  fontSizeLabel = "",
  fontWeightLabel = "",
  textColorLabel = "",
  paddingLabel = "",
  fontSizeInput = "",
  fontWeightInput = "",
  textColorInput = "",
  paddingInput = "",
  borderRadius = "",
  borderSize = "",
  borderColor = "",
  fontFamily = "",
  bgColor = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    // setIsActive(value !== "" && value !== null && value !== undefined) && e.target === document.activeElement;
    !isValid && validateInput(e);
    functionOnChange && functionOnChange(e);
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setIsActive(value !== "" && value !== null && value !== undefined);
    validateInput(e);
    functionOnBlur && functionOnBlur(e);
  };

  const handleFocus = (e) => {
    setIsActive(true);
    functionOnFocus && functionOnFocus(e);
  };

  const handleKeyDown = (e) => {
    functionOnKeyDown && functionOnKeyDown(e);
  };

  const validateInput = (e) => {
    if (isRequired || (!isRequired && e.target.value)) {
      const phonePattern = /^\+?[0-9]{7,15}$/;
      const value = e.target.value;
      if (!phonePattern.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      if (!isValid) {
        setIsValid(true);
      }
    }
  };

  return (
    <fieldset
      className={`${styles.formFieldset} ${styles.formFieldsetPhone} ${
        isValid ? "" : styles.notValid
      }`}
      style={{
        marginTop: `${styleOfLabels === "floating" ? "1.5rem" : "0"}`,
        minWidth: `${minWidth}`,
        flex: `${flex}`,
      }}
    >
      {label && styleOfLabels !== "none" && (
        <label
          htmlFor="phone"
          style={{
            fontSize: `${fontSizeLabel ? fontSizeLabel : fontSizeOfLabelsForm}`,
            fontWeight: `${
              fontWeightLabel ? fontWeightLabel : fontWeightOfLabelsForm
            }`,
            color: `${textColorLabel ? textColorLabel : textColorOfLabelsForm}`,
            padding: `${paddingLabel ? paddingLabel : paddingOfLabelsForm}`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
          className={`${styles.formLabelPhone} ${
            isActive ? `${styles.active}` : ""
          } ${styles[styleOfLabels]}`}
        >
          {label}
          {isRequired && isRequiredStar && (
            <span className={`${styles.requiredStar}`}> *</span>
          )}
        </label>
      )}
      <div className={`${styles.inputContainer}`}>
        <input
          type="text"
          name="phone"
          maxLength={15}
          className={`${styles.formInputPhone}`}
          placeholder={styleOfLabels !== "floating" ? placeholder : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          required={isRequired}
          // onInvalid={(e) => {
          // e.target.setCustomValidity("Vyplňte prosím Vaše telefonní číslo.");
          // }}
          // onInput={(e) => e.target.setCustomValidity("")}
          disabled={isDisabled}
          style={{
            fontSize: `${
              fontSizeInput ? fontSizeInput : fontSizeOfInputsAndBtnsForm
            }`,
            fontWeight: `${
              fontWeightInput ? fontWeightInput : fontWeightOfInputsAndBtnsForm
            }`,
            color: `${
              textColorInput ? textColorInput : textColorOfInputsAndBtnsForm
            }`,
            padding: `${
              paddingInput ? paddingInput : paddingOfInputsAndBtnsForm
            }`,
            borderRadius: `${
              borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm
            }`,
            border: `${
              borderSize ? borderSize : borderSizeOfInputsAndBtnsForm
            } solid ${
              !isValid
                ? "var(--color-error)"
                : borderColor
                ? borderColor
                : borderColorOfInputsAndBtnsForm
            }`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
        ></input>
        {hintText && !isValid && (
          <>
            <IconInfoCircle
              className={`${styles.hintIcon}`}
              style={{ fill: `${isValid ? "" : "var(--color-error)"}` }}
            />
            <span className={`${styles.hintText}`}>{hintText}</span>
          </>
        )}
      </div>
    </fieldset>
  );
};

/*
INPUT Email
#F0F
*/

/*
INSTRUCTIONS
  label                                   fill either label or placeholder
  placeholder                             fill either label or placeholder
  isRequired                              true if required field (can't submit without this field filled)
  isRequiredStar                          if true, show red start next to label (default true)
  isDisabled                              true if input is disabled
  functionOnChange                        function that proceed onChange
  functionOnBlur                          function that proceed onBlur
  functionOnFocus                         function that proceed onFocus
  functionOnKeyDown                       function that proceed onKeyDown
  minWidth                                minWidth of fieldset element (default to 200px) - if space, it take full width
  flex                                    flex of fieldset (default is "1 1 25%" - if two in same row with this default, it will be 50/50 until wrapped bcs of minWidth) 
  fontSizeLabel                           style attribute for input that overwrite fontSizeOfLabelsForm  
  fontWeightLabel                         style attribute for input that overwrite fontWeightOfLabelsForm  
  textColorLabel                          style attribute for input that overwrite textColorOfLabelsForm  
  paddingLabel                            style attribute for input that overwrite paddingOfLabelsForm  
  fontSizeInput                           style attribute for input that overwrite fontSizeOfInputsAndBtnsForm  
  fontWeightInput                         style attribute for input that overwrite fontWeightOfInputsAndBtnsForm  
  textColorInput                          style attribute for input that overwrite textColorOfInputsAndBtnsForm  
  paddingInput                            style attribute for input that overwrite paddingOfInputsAndBtnsForm  
  borderRadius                            style attribute for input that overwrite borderRadiusOfInputsAndBtnsForm  
  borderSize                              style attribute for input that overwrite borderSizeOfInputsAndBtnsForm  
  borderColor                             style attribute for input that overwrite borderColorOfInputsAndBtnsForm  
  fontFamily                              style attribute for input that overwrite fontFamilyOfInputsAndBtnsAndLabelsForm  
  bgColor                                 style attribute for input that overwrite bgColorOfInputsAndBtnsAndLabelsForm  
*/

export const FormInputEmail = ({
  label,
  placeholder = "Uveďte Váš e-mail",
  isRequired = false,
  isRequiredStar = true,
  isDisabled,
  functionOnChange,
  functionOnBlur,
  functionOnFocus,
  functionOnKeyDown,
  minWidth = "200px",
  flex = "1 1 25%",
  hintText = "Zadejte platnou e-mailovou adresu ve formátu např. uzivatel@email.com.",
  styleOfLabels,
  fontSizeOfLabelsForm,
  fontWeightOfLabelsForm,
  textColorOfLabelsForm,
  paddingOfLabelsForm,
  fontSizeOfInputsAndBtnsForm,
  fontWeightOfInputsAndBtnsForm,
  textColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  fontFamilyOfInputsAndBtnsAndLabelsForm,
  bgColorOfInputsAndBtnsAndLabelsForm,
  fontSizeLabel = "",
  fontWeightLabel = "",
  textColorLabel = "",
  paddingLabel = "",
  fontSizeInput = "",
  fontWeightInput = "",
  textColorInput = "",
  paddingInput = "",
  borderRadius = "",
  borderSize = "",
  borderColor = "",
  fontFamily = "",
  bgColor = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    // setIsActive(value !== "" && value !== null && value !== undefined) && e.target === document.activeElement;
    !isValid && validateInput(e);
    functionOnChange && functionOnChange(e);
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setIsActive(value !== "" && value !== null && value !== undefined);
    validateInput(e);
    functionOnBlur && functionOnBlur(e);
  };

  const handleFocus = (e) => {
    setIsActive(true);
    functionOnFocus && functionOnFocus(e);
  };

  const handleKeyDown = (e) => {
    functionOnKeyDown && functionOnKeyDown(e);
  };

  const validateInput = (e) => {
    if (isRequired || (!isRequired && e.target.value)) {
      const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,320}$/;
      const value = e.target.value;
      if (!emailPattern.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      if (!isValid) {
        setIsValid(true);
      }
    }
  };

  return (
    <fieldset
      className={`${styles.formFieldset} ${styles.formFieldsetEmail} ${
        isValid ? "" : styles.notValid
      }`}
      style={{
        marginTop: `${styleOfLabels === "floating" ? "1.5rem" : "0"}`,
        minWidth: `${minWidth}`,
        flex: `${flex}`,
      }}
    >
      {label && styleOfLabels !== "none" && (
        <label
          htmlFor="email"
          style={{
            fontSize: `${fontSizeLabel ? fontSizeLabel : fontSizeOfLabelsForm}`,
            fontWeight: `${
              fontWeightLabel ? fontWeightLabel : fontWeightOfLabelsForm
            }`,
            color: `${textColorLabel ? textColorLabel : textColorOfLabelsForm}`,
            padding: `${paddingLabel ? paddingLabel : paddingOfLabelsForm}`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
          className={`${styles.formLabelEmail} ${
            isActive ? `${styles.active}` : ""
          } ${styles[styleOfLabels]}`}
        >
          {label}
          {isRequired && isRequiredStar && (
            <span className={`${styles.requiredStar}`}> *</span>
          )}
        </label>
      )}
      <div className={`${styles.inputContainer}`}>
        <input
          type="text"
          name="email"
          maxLength={320}
          className={`${styles.formInputEmail}`}
          placeholder={styleOfLabels !== "floating" ? placeholder : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          required={isRequired}
          // onInvalid={(e) => {
          // e.target.setCustomValidity("Vyplňte prosím Váš e-mail.");
          // }}
          // onInput={(e) => e.target.setCustomValidity("")}
          disabled={isDisabled}
          style={{
            fontSize: `${
              fontSizeInput ? fontSizeInput : fontSizeOfInputsAndBtnsForm
            }`,
            fontWeight: `${
              fontWeightInput ? fontWeightInput : fontWeightOfInputsAndBtnsForm
            }`,
            color: `${
              textColorInput ? textColorInput : textColorOfInputsAndBtnsForm
            }`,
            padding: `${
              paddingInput ? paddingInput : paddingOfInputsAndBtnsForm
            }`,
            borderRadius: `${
              borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm
            }`,
            border: `${
              borderSize ? borderSize : borderSizeOfInputsAndBtnsForm
            } solid ${
              !isValid
                ? "var(--color-error)"
                : borderColor
                ? borderColor
                : borderColorOfInputsAndBtnsForm
            }`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
        ></input>
        {hintText && !isValid && (
          <>
            <IconInfoCircle
              className={`${styles.hintIcon}`}
              style={{ fill: `${isValid ? "" : "var(--color-error)"}` }}
            />
            <span className={`${styles.hintText}`}>{hintText}</span>
          </>
        )}
      </div>
    </fieldset>
  );
};

/*
INPUT Price
#F0F
*/

/*
INSTRUCTIONS
  label                                   fill either label or placeholder
  placeholder                             fill either label or placeholder
  isRequired                              true if required field (can't submit without this field filled)
  isRequiredStar                          if true, show red start next to label (default true)
  isDisabled                              true if input is disabled
  functionOnChange                        function that proceed onChange
  functionOnBlur                          function that proceed onBlur
  functionOnFocus                         function that proceed onFocus
  functionOnKeyDown                       function that proceed onKeyDown
  minWidth                                minWidth of fieldset element (default to 200px) - if space, it take full width
  flex                                    flex of fieldset (default is "1 1 25%" - if two in same row with this default, it will be 50/50 until wrapped bcs of minWidth) 
  fontSizeLabel                           style attribute for input that overwrite fontSizeOfLabelsForm  
  fontWeightLabel                         style attribute for input that overwrite fontWeightOfLabelsForm  
  textColorLabel                          style attribute for input that overwrite textColorOfLabelsForm  
  paddingLabel                            style attribute for input that overwrite paddingOfLabelsForm  
  fontSizeInput                           style attribute for input that overwrite fontSizeOfInputsAndBtnsForm  
  fontWeightInput                         style attribute for input that overwrite fontWeightOfInputsAndBtnsForm  
  textColorInput                          style attribute for input that overwrite textColorOfInputsAndBtnsForm  
  paddingInput                            style attribute for input that overwrite paddingOfInputsAndBtnsForm  
  borderRadius                            style attribute for input that overwrite borderRadiusOfInputsAndBtnsForm  
  borderSize                              style attribute for input that overwrite borderSizeOfInputsAndBtnsForm  
  borderColor                             style attribute for input that overwrite borderColorOfInputsAndBtnsForm  
  fontFamily                              style attribute for input that overwrite fontFamilyOfInputsAndBtnsAndLabelsForm  
  bgColor                                 style attribute for input that overwrite bgColorOfInputsAndBtnsAndLabelsForm  
*/

export const FormInputPrice = ({
  label,
  placeholder = "Uveďte jaký máte rozpočet",
  isRequired = false,
  isRequiredStar = true,
  isDisabled,
  functionOnChange,
  functionOnBlur,
  functionOnFocus,
  functionOnKeyDown,
  minWidth = "200px",
  flex = "1 1 25%",
  hintText = "Zadejte částku ve formátu např. 5000. Případně i s poznámkou k částce.",
  styleOfLabels,
  fontSizeOfLabelsForm,
  fontWeightOfLabelsForm,
  textColorOfLabelsForm,
  paddingOfLabelsForm,
  fontSizeOfInputsAndBtnsForm,
  fontWeightOfInputsAndBtnsForm,
  textColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  fontFamilyOfInputsAndBtnsAndLabelsForm,
  bgColorOfInputsAndBtnsAndLabelsForm,
  fontSizeLabel = "",
  fontWeightLabel = "",
  textColorLabel = "",
  paddingLabel = "",
  fontSizeInput = "",
  fontWeightInput = "",
  textColorInput = "",
  paddingInput = "",
  borderRadius = "",
  borderSize = "",
  borderColor = "",
  fontFamily = "",
  bgColor = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    // setIsActive(value !== "" && value !== null && value !== undefined) && e.target === document.activeElement;
    !isValid && validateInput(e);
    functionOnChange && functionOnChange(e);
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setIsActive(value !== "" && value !== null && value !== undefined);
    validateInput(e);
    functionOnBlur && functionOnBlur(e);
  };

  const handleFocus = (e) => {
    setIsActive(true);
    functionOnFocus && functionOnFocus(e);
  };

  const handleKeyDown = (e) => {
    functionOnKeyDown && functionOnKeyDown(e);
  };

  const validateInput = (e) => {
    if (isRequired || (!isRequired && e.target.value)) {
      const pricePattern =
        /^[a-zA-Z0-9ěščřžýáíéúůóďťňĚŠČŘŽÝÁÍÉÚŮÓĎŤŇ+\-.,=]{1,30}$/;
      const value = e.target.value;
      if (!pricePattern.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      if (!isValid) {
        setIsValid(true);
      }
    }
  };

  return (
    <fieldset
      className={`${styles.formFieldset} ${styles.formFieldsetPrice} ${
        isValid ? "" : styles.notValid
      }`}
      style={{
        marginTop: `${styleOfLabels === "floating" ? "1.5rem" : "0"}`,
        minWidth: `${minWidth}`,
        flex: `${flex}`,
      }}
    >
      {label && styleOfLabels !== "none" && (
        <label
          htmlFor="price"
          style={{
            fontSize: `${fontSizeLabel ? fontSizeLabel : fontSizeOfLabelsForm}`,
            fontWeight: `${
              fontWeightLabel ? fontWeightLabel : fontWeightOfLabelsForm
            }`,
            color: `${textColorLabel ? textColorLabel : textColorOfLabelsForm}`,
            padding: `${paddingLabel ? paddingLabel : paddingOfLabelsForm}`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
          className={`${styles.formLabelPrice} ${
            isActive ? `${styles.active}` : ""
          } ${styles[styleOfLabels]}`}
        >
          {label}
          {isRequired && isRequiredStar && (
            <span className={`${styles.requiredStar}`}> *</span>
          )}
        </label>
      )}
      <div className={`${styles.inputContainer}`}>
        <input
          type="text"
          name="price"
          maxLength={30}
          className={`${styles.formInputPrice}`}
          placeholder={styleOfLabels !== "floating" ? placeholder : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          required={isRequired}
          // onInvalid={(e) => {
          // e.target.setCustomValidity("Vyplňte prosím Váš e-mail.");
          // }}
          // onInput={(e) => e.target.setCustomValidity("")}
          disabled={isDisabled}
          style={{
            fontSize: `${
              fontSizeInput ? fontSizeInput : fontSizeOfInputsAndBtnsForm
            }`,
            fontWeight: `${
              fontWeightInput ? fontWeightInput : fontWeightOfInputsAndBtnsForm
            }`,
            color: `${
              textColorInput ? textColorInput : textColorOfInputsAndBtnsForm
            }`,
            padding: `${
              paddingInput ? paddingInput : paddingOfInputsAndBtnsForm
            }`,
            borderRadius: `${
              borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm
            }`,
            border: `${
              borderSize ? borderSize : borderSizeOfInputsAndBtnsForm
            } solid ${
              !isValid
                ? "var(--color-error)"
                : borderColor
                ? borderColor
                : borderColorOfInputsAndBtnsForm
            }`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
        ></input>
        {hintText && !isValid && (
          <>
            <IconInfoCircle
              className={`${styles.hintIcon}`}
              style={{ fill: `${isValid ? "" : "var(--color-error)"}` }}
            />
            <span className={`${styles.hintText}`}>{hintText}</span>
          </>
        )}
      </div>
    </fieldset>
  );
};

/*
INPUT Input (Universal - can be used multiple times in one form with different tag)
#F0F
*/

/*
EXEMPLE for age
  <FormInput
    tag="age"
    label="Věk:"
    placeholder="Uveďte Váš věk"
    validationPattern={/^[0-9]{1,3}$/}
    hintText="Věk musí obsahovat 1 až 3 znaky a může obsahovat pouze čísla."
  />


INSTRUCTIONS
  tag                                     *REQUIRED - its for htmlFor and name of input to make it original (cant be two inputs with same name in form)
  validationPattern                       pattern for validation, must be in regex format (/^[a-zA-Z0-9ěščřžýáíéúůóďťňĚŠČŘŽÝÁÍÉÚŮÓĎŤŇ+\-.,=]{1,30}$/)
  label                                   fill either label or placeholder
  placeholder                             fill either label or placeholder
  isRequired                              true if required field (can't submit without this field filled)
  isRequiredStar                          if true, show red start next to label (default true)
  isDisabled                              true if input is disabled
  functionOnChange                        function that proceed onChange
  functionOnBlur                          function that proceed onBlur
  functionOnFocus                         function that proceed onFocus
  functionOnKeyDown                       function that proceed onKeyDown
  minWidth                                minWidth of fieldset element (default to 200px) - if space, it take full width
  flex                                    flex of fieldset (default is "1 1 25%" - if two in same row with this default, it will be 50/50 until wrapped bcs of minWidth) 
  fontSizeLabel                           style attribute for input that overwrite fontSizeOfLabelsForm  
  fontWeightLabel                         style attribute for input that overwrite fontWeightOfLabelsForm  
  textColorLabel                          style attribute for input that overwrite textColorOfLabelsForm  
  paddingLabel                            style attribute for input that overwrite paddingOfLabelsForm  
  fontSizeInput                           style attribute for input that overwrite fontSizeOfInputsAndBtnsForm  
  fontWeightInput                         style attribute for input that overwrite fontWeightOfInputsAndBtnsForm  
  textColorInput                          style attribute for input that overwrite textColorOfInputsAndBtnsForm  
  paddingInput                            style attribute for input that overwrite paddingOfInputsAndBtnsForm  
  borderRadius                            style attribute for input that overwrite borderRadiusOfInputsAndBtnsForm  
  borderSize                              style attribute for input that overwrite borderSizeOfInputsAndBtnsForm  
  borderColor                             style attribute for input that overwrite borderColorOfInputsAndBtnsForm  
  fontFamily                              style attribute for input that overwrite fontFamilyOfInputsAndBtnsAndLabelsForm  
  bgColor                                 style attribute for input that overwrite bgColorOfInputsAndBtnsAndLabelsForm  
*/

export const FormInput = ({
  tag,
  validationPattern,
  label,
  placeholder = "",
  isRequired = false,
  isRequiredStar = true,
  isDisabled,
  functionOnChange,
  functionOnBlur,
  functionOnFocus,
  functionOnKeyDown,
  minWidth = "200px",
  flex = "1 1 25%",
  hintText = "",
  styleOfLabels,
  fontSizeOfLabelsForm,
  fontWeightOfLabelsForm,
  textColorOfLabelsForm,
  paddingOfLabelsForm,
  fontSizeOfInputsAndBtnsForm,
  fontWeightOfInputsAndBtnsForm,
  textColorOfInputsAndBtnsForm,
  paddingOfInputsAndBtnsForm,
  borderRadiusOfInputsAndBtnsForm,
  borderSizeOfInputsAndBtnsForm,
  borderColorOfInputsAndBtnsForm,
  fontFamilyOfInputsAndBtnsAndLabelsForm,
  bgColorOfInputsAndBtnsAndLabelsForm,
  fontSizeLabel = "",
  fontWeightLabel = "",
  textColorLabel = "",
  paddingLabel = "",
  fontSizeInput = "",
  fontWeightInput = "",
  textColorInput = "",
  paddingInput = "",
  borderRadius = "",
  borderSize = "",
  borderColor = "",
  fontFamily = "",
  bgColor = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    // setIsActive(value !== "" && value !== null && value !== undefined) && e.target === document.activeElement;
    !isValid && validateInput(e);
    functionOnChange && functionOnChange(e);
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setIsActive(value !== "" && value !== null && value !== undefined);
    validateInput(e);
    functionOnBlur && functionOnBlur(e);
  };

  const handleFocus = (e) => {
    setIsActive(true);
    functionOnFocus && functionOnFocus(e);
  };

  const handleKeyDown = (e) => {
    functionOnKeyDown && functionOnKeyDown(e);
  };

  const validateInput = (e) => {
    if (isRequired || (!isRequired && e.target.value && validationPattern)) {
      const pattern = validationPattern;
      const value = e.target.value;
      if (!pattern.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      if (!isValid) {
        setIsValid(true);
      }
    }
  };

  return (
    <fieldset
      className={`${styles.formFieldset} ${isValid ? "" : styles.notValid}`}
      style={{
        marginTop: `${styleOfLabels === "floating" ? "1.5rem" : "0"}`,
        minWidth: `${minWidth}`,
        flex: `${flex}`,
      }}
    >
      {label && styleOfLabels !== "none" && (
        <label
          htmlFor={`${tag}`}
          style={{
            fontSize: `${fontSizeLabel ? fontSizeLabel : fontSizeOfLabelsForm}`,
            fontWeight: `${
              fontWeightLabel ? fontWeightLabel : fontWeightOfLabelsForm
            }`,
            color: `${textColorLabel ? textColorLabel : textColorOfLabelsForm}`,
            padding: `${paddingLabel ? paddingLabel : paddingOfLabelsForm}`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
          className={`${styles.formLabel} ${
            isActive ? `${styles.active}` : ""
          } ${styles[styleOfLabels]}`}
        >
          {label}
          {isRequired && isRequiredStar && (
            <span className={`${styles.requiredStar}`}> *</span>
          )}
        </label>
      )}
      <div className={`${styles.inputContainer}`}>
        <input
          type="text"
          name={`${tag}`}
          maxLength={30}
          className={`${styles.formInput}`}
          placeholder={styleOfLabels !== "floating" ? placeholder : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          required={isRequired}
          // onInvalid={(e) => {
          // e.target.setCustomValidity("Vyplňte prosím Váš e-mail.");
          // }}
          // onInput={(e) => e.target.setCustomValidity("")}
          disabled={isDisabled}
          style={{
            fontSize: `${
              fontSizeInput ? fontSizeInput : fontSizeOfInputsAndBtnsForm
            }`,
            fontWeight: `${
              fontWeightInput ? fontWeightInput : fontWeightOfInputsAndBtnsForm
            }`,
            color: `${
              textColorInput ? textColorInput : textColorOfInputsAndBtnsForm
            }`,
            padding: `${
              paddingInput ? paddingInput : paddingOfInputsAndBtnsForm
            }`,
            borderRadius: `${
              borderRadius ? borderRadius : borderRadiusOfInputsAndBtnsForm
            }`,
            border: `${
              borderSize ? borderSize : borderSizeOfInputsAndBtnsForm
            } solid ${
              !isValid
                ? "var(--color-error)"
                : borderColor
                ? borderColor
                : borderColorOfInputsAndBtnsForm
            }`,
            fontFamily: `${
              fontFamily ? fontFamily : fontFamilyOfInputsAndBtnsAndLabelsForm
            }`,
            backgroundColor: `${
              bgColor ? bgColor : bgColorOfInputsAndBtnsAndLabelsForm
            }`,
          }}
        ></input>
        {hintText && !isValid && (
          <>
            <IconInfoCircle
              className={`${styles.hintIcon}`}
              style={{ fill: `${isValid ? "" : "var(--color-error)"}` }}
            />
            <span className={`${styles.hintText}`}>{hintText}</span>
          </>
        )}
      </div>
    </fieldset>
  );
};

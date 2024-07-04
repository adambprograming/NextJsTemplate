"use client";
// Styles
import styles from "./btn-onclick.module.scss";

/*
INSTRUCTIONS 
  disabled          defines if button is disabled (default false)
  functionOnClick   function that happend onClick
  fontSize          fontSize in px (* multiplier)
  fontFamily        fontFamily (could be like var(--font-primary), if fonts are set in variables)
  borderRadius      borderRadius (default set to 0px)
  borderSize        size of border (default set to 1px)
  borderColor       color of border
  bgColor           color of background
  textColor         color of text
  opacity           opacity of button background (default set to 1.0)
  paddingOfBtn      padding will be aplied if fontSize is not defined
  width             width of element
*/

const BtnOnClick = ({
  children,
  disabled = false,
  functionOnClick,
  fontSize = "var(--fontsize-h5)",
  fontFamily = "var(--font-primary)",
  fontWeight,
  borderRadius = "0px",
  borderSize = "1px",
  borderColor = "var(--black-100)",
  bgColor = "var(--color-primary)",
  textColor = "var(--color-text)",
  opacity = 1,
  paddingOfBtn = "10px 20px",
  width,
  backdropFilter,
  filter,
  bgHoverColor,
  textHoverColor,
}) => {
  return (
    <button
      className={`${styles.btnOnclick} ${
        backdropFilter
          ? styles.withBackdropFilter
          : styles.withoutBackdropFilter
      }`}
      disabled={disabled}
      style={{
        borderRadius: `${borderRadius}`,
        border: `${borderSize} solid ${borderColor}`,
        width: `${width}`,
        "--localFilter": `${filter}`,
      }}
      onClick={functionOnClick}
    >
      <span
        className={`${styles.btnOnclickBg}`}
        style={{
          backgroundColor: `${bgColor}`,
          opacity: `${opacity}`,
          "--localBackdropFilter": `${backdropFilter}`,
          "--localBgHoverColor": `${bgHoverColor}`,
        }}
      ></span>
      <h4
        className={`${styles.btnOnclickText}`}
        style={{
          "--localTextColor": `${textColor}`,
          "--localTextHoverColor": `${textHoverColor}`,
          fontSize: `${fontSize}`,
          fontFamily: `${fontFamily}`,
          fontWeight: `${fontWeight}`,
          padding: `${paddingOfBtn}`,
        }}
      >
        {children}
      </h4>
    </button>
  );
};

export default BtnOnClick;
